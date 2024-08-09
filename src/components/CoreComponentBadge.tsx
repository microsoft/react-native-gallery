import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';
import type {ColorValue} from 'react-native';

export function CoreComponentBadge() {
  const {colors} = useTheme();

  const textColor = Platform.select<ColorValue>({
    windows: PlatformColor('SystemColorHighlightTextColor'),
    default: colors.primary,
  });

  return (
    <Badge
      badgeColor={colors.primary}
      textColor={textColor}
      badgeTitle="Core Component"
      icon={57611}
      description="This component is a part of React Native Windows core. No additional library must be added in order to have access to this component in a React Native Windows project."
    />
  );
}
