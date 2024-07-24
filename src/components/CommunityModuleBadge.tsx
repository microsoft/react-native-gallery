import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';
import type {ColorValue} from 'react-native';

export function CommunityModuleBadge() {
  const {colors} = useTheme();

  const badgeColor = Platform.select<ColorValue>({
    windows: PlatformColor('AccentFillColorDefaultBrush'),
    macos: PlatformColor('controlAccentColor'),
    default: 'blue',
  });

  const textColor = Platform.select<ColorValue>({
    windows: PlatformColor('TextOnAccentFillColorPrimaryBrush'),
    macos: PlatformColor('labelColor'),
    default: colors.border,
  });

  return (
    <Badge
      badgeColor={badgeColor}
      textColor={textColor}
      badgeTitle="Community Module"
      icon={57637}
      description="This component is not a part of React Native core. The package for this component must be explicitly added in order to have access to this component in a React Native project."
    />
  );
}
