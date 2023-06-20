import React from 'react';
import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';

export function NativeControlBadge() {
  const {colors} = useTheme();
  return (
    <Badge
      badgeColor={'silver'}
      textColor={colors.text}
      badgeTitle="Wrapped Windows Control"
      icon={57828}
      description="This component wraps a native Windows XAML control: its visual appearance, animations, etc. will always match its native Windows counterpart."
    />
  );
}
