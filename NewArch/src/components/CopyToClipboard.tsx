import React from 'react';
import {
  AccessibilityInfo,
  Pressable,
  StyleSheet,
  PlatformColor,
  Text,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const createButtonStyles = (isHovered: boolean, isPressing: boolean) =>
  StyleSheet.create({
    background: {
      backgroundColor: isPressing
        ? PlatformColor('ControlFillColorTertiaryBrush')
        : isHovered
        ? PlatformColor('ControlFillColorSecondaryBrush')
        : PlatformColor('ControlFillColorDefaultBrush'),
      borderRadius: 8,
      borderWidth: 1,
      borderColor: PlatformColor('ControlStrokeColorDefaultBrush'),
      padding: 6,
    },
    text: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
      color: PlatformColor('TextControlForeground'),
    },
  });

type CopyToClipboardButtonProps = {
  content: string;
};
const CopyToClipboardButton = React.forwardRef<any, CopyToClipboardButtonProps>(({content}, ref) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const styles = createButtonStyles(isHovered, isPressing);

  const copyIcon = '\uE8C8';
  const helpText = 'Copy to clipboard';

  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityLabel={helpText}
      tooltip={helpText}
      tooltipProperties={{MaxWidth: 500}}
      style={styles.background}
      onPress={() => {
        Clipboard.setString(content);
        AccessibilityInfo.announceForAccessibility('Text copied to clipboard');
      }}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      onAccessibilityTap={() => {
        Clipboard.setString(content);
        AccessibilityInfo.announceForAccessibility('Text copied to clipboard');
      }}>
      <Text accessible={false} style={styles.text}>
        {copyIcon}
      </Text>
    </Pressable>
  );
});

export {CopyToClipboardButton};
