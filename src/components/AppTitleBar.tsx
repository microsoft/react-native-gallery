import React from 'react';
import {
  PlatformColor,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: PlatformColor('Background'),
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 140,
  },
  title: {
    color: PlatformColor('TextFillColorPrimary'),
    fontSize: 12,
  },
});

export const getAppTitleBarHeight = (fontScale: number) =>
  fontScale > 1 ? 48 : 32;

export function AppTitleBar() {
  const {fontScale} = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {height: getAppTitleBarHeight(fontScale)},
      ]}>
      <Text
        accessibilityRole="header"
        allowFontScaling={true}
        style={styles.title}>
        React Native Gallery
      </Text>
    </View>
  );
}
