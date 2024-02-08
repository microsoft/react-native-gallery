import React from 'react';
// import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';

export function CommunityModuleBadge() {
  // const {colors} = useTheme();
  return (
    <Badge
      badgeColor={'grey'}
      textColor={'white'}
      badgeTitle="Community Module"
      icon={57637}
      description="This component is not a part of React Native core. The package for this component must be explicitly added in order to have access to this component in a React Native project."
    />
  );
}
