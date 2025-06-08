import React from 'react';
import {useTheme} from '../Navigation';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';

export function CommunityModuleBadge() {
  const {colors} = useTheme();
  return (
    <Badge
      badgeColor={PlatformColor('AccentFillColorDefault')}
      textColor={
        Platform.OS === 'windows'
          ? PlatformColor('TextOnAccentFillColorPrimary')
          : colors.border
      }
      badgeTitle="Community Module"
      icon={57637}
      description="This component is not a part of React Native core. The package for this component must be explicitly added in order to have access to this component in a React Native project."
    />
  );
}
