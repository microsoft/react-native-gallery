'use strict';

import {AccessibilityInfo} from 'react-native-macos';
import React from 'react';

export default function useHighContrastState() {
  const [isHighContrast, setHighContrast] = React.useState(false);

  React.useEffect(() => {
    const accessibilitySubscription = AccessibilityInfo.addEventListener(
      'highContrastChanged',
      (value) => {
        setHighContrast(value);
      },
    );
    return () => accessibilitySubscription.remove();
  });
  return isHighContrast;
}
