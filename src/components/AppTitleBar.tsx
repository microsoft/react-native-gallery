import React from 'react';
import {
  LayoutChangeEvent,
  PlatformColor,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const STANDARD_TITLE_LINE_HEIGHT = 16;

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

export const getAppTitleBarHeight = (isTextScaled: boolean) =>
  isTextScaled ? 48 : 32;

export function AppTitleBar() {
  const {fontScale} = useWindowDimensions();
  const [isTitleScaled, setIsTitleScaled] = React.useState(fontScale > 1);

  const onTitleLayout = React.useCallback((event: LayoutChangeEvent) => {
    setIsTitleScaled(
      event.nativeEvent.layout.height > STANDARD_TITLE_LINE_HEIGHT,
    );
  }, []);

  return (
    <View
      style={[
        styles.container,
        {height: getAppTitleBarHeight(isTitleScaled)},
      ]}>
      <Text
        accessibilityRole="header"
        allowFontScaling={true}
        onLayout={onTitleLayout}
        style={styles.title}>
        React Native Gallery
      </Text>
    </View>
  );
}
