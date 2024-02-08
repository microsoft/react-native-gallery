import React from 'react';
// import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';

export function NativeControlBadge() {
  // const {colors} = useTheme();
  return (
    <Badge
      badgeColor={'silver'}
      textColor={'black'}
      badgeTitle="Wrapped Windows Control"
      icon={57828}
      description="This component wraps a native Windows XAML control: its visual appearance, animations, etc. will always match its native Windows counterpart."
    />
  );
}
