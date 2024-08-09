import React from 'react';
import {
  Pressable,
  StyleSheet,
  Platform,
  PlatformColor,
  Text,
} from 'react-native';
import type {ColorValue} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const backgroundColorRest = Platform.select<ColorValue>({
  windows: PlatformColor('ControlFillColorDefaultBrush'),
  macos: PlatformColor('controlAccentColor'),
  default: 'white',
});
const backgroundColorHover = Platform.select<ColorValue>({
  windows: PlatformColor('ControlFillColorSecondaryBrush'),
  macos: PlatformColor('controlAccentColor'),
  default: 'white',
});
const backgroundColorPressed = Platform.select<ColorValue>({
  windows: PlatformColor('ControlFillColorTertiaryBrush'),
  macos: PlatformColor('controlAccentColor'),
  default: 'lightgray',
});

const borderColor = Platform.select<ColorValue>({
  windows: PlatformColor('ControlStrokeColorDefaultBrush'),
  macos: 'transparent',
  default: 'black',
});

const textColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextControlForeground'),
  macos: PlatformColor('labelColor'),
  default: 'black',
});

const createButtonStyles = (isHovered: boolean, isPressing: boolean) =>
  StyleSheet.create({
    background: {
      backgroundColor: isPressing
        ? backgroundColorPressed
        : isHovered
        ? backgroundColorHover
        : backgroundColorRest,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: borderColor,
      padding: 6,
    },
    text: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
      color: textColor,
    },
  });

type CopyToClipboardButtonProps = {
  content: string;
};
const CopyToClipboardButton = ({content}: CopyToClipboardButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const styles = createButtonStyles(isHovered, isPressing);

  const copyIcon = '⎘';
  const helpText = 'Copy to clipboard';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={helpText}
      tooltip={helpText}
      style={styles.background}
      onPress={() => Clipboard.setString(content)}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}>
      <Text accessible={false} style={styles.text}>
        {copyIcon}
      </Text>
    </Pressable>
  );
};

export {CopyToClipboardButton};
