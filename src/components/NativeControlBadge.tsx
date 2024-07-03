import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';
import type {ColorValue} from 'react-native';

export function NativeControlBadge() {
  const {colors} = useTheme();

  const badgeColor = Platform.select<ColorValue>({
    windows: PlatformColor('SolidBackgroundFillColorSecondaryBrush'),
    default: colors.border,
  });

  return (
    <Badge
      badgeColor={badgeColor}
      textColor={colors.text}
      badgeTitle="Wrapped Windows Control"
      icon={57828}
      description="This component wraps a native Windows XAML control: its visual appearance, animations, etc. will always match its native Windows counterpart."
    />
  );
}
