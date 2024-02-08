import React from 'react';
// import {useTheme} from '@react-navigation/native';
import {Badge} from './Badge';
import {Platform, PlatformColor} from 'react-native';

export function CoreComponentBadge() {
  // const {colors} = useTheme();
  return (
    <Badge
      badgeColor={'silver'}
      textColor={'black'}
      badgeTitle="Core Component"
      icon={57611}
      description="This component is a part of React Native Windows core. No additional library must be added in order to have access to this component in a React Native Windows project."
    />
  );
}
