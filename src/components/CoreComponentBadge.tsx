import React from 'react';
import {useTheme} from '../Navigation';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';

export function CoreComponentBadge() {
  const {colors} = useTheme();
  return (
    <Badge
      badgeColor={colors.primary}
      textColor={
        Platform.OS === 'windows'
          ? PlatformColor('SystemChromeMediumLowColor')
          : colors.primary
      }
      badgeTitle="Core Component"
      icon={57611}
      description="This component is included in the React Native Windows core, so you do not need to add any extra libraries to use it in a React Native Windows project."
    />
  );
}
