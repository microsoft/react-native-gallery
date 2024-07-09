'use strict';

import {AppTheme} from 'react-native-windows';
import React from 'react';

export default function useHighContrastState() {
  const [isHighContrast, setHighContrast] = React.useState(
    AppTheme.isHighContrast,
  );

  React.useEffect(() => {
    const subscription = AppTheme.addListener('highContrastChanged', () => {
      setHighContrast(AppTheme.isHighContrast);
    });

    return () => subscription.remove();
  });
  return isHighContrast;
}
