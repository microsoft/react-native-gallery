'use strict';

import React from 'react';
import {PixelRatio} from 'react-native';

/**
 * Hook to get the current font scale factor for accessibility text scaling.
 * Returns 1.0 at normal text size, 2.0 at 200% scaling, etc.
 */
export default function useFontScale(): number {
  const [fontScale, setFontScale] = React.useState(PixelRatio.getFontScale());

  React.useEffect(() => {
    // Update font scale when it changes
    const updateFontScale = () => {
      setFontScale(PixelRatio.getFontScale());
    };

    // Set up a listener for dimension changes which includes font scale changes
    const subscription = require('react-native').Dimensions.addEventListener(
      'change',
      updateFontScale,
    );

    return () => {
      subscription?.remove();
    };
  }, []);

  return fontScale;
}
