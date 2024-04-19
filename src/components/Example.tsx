import React from 'react';
import {Code} from './Code';
import {Pressable, StyleSheet, PlatformColor, Text, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Clipboard from '@react-native-clipboard/clipboard';

const createStyles = (colors: any) =>
  StyleSheet.create({
    title: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      color: colors.text,
    },
    box: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    exampleContainer: {
      padding: 15,
      backgroundColor: PlatformColor('SolidBackgroundFillColorSecondaryBrush'),
    },
    codeContainer: {
      borderWidth: 0,
      borderTopWidth: 1,
      borderColor: colors.border,
      padding: 12,
      backgroundColor: PlatformColor('CardBackgroundFillColorDefaultBrush'),
    },
    copyButton: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 6,
    },
    copyButtonText: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
      color: PlatformColor('TextControlForeground'),
    },
  });

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
const CopyToClipboardButton = ({content}: CopyToClipboardButtonProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const styles = createButtonStyles(isHovered, isPressing);

  const copyIcon = '\uE8C8';

  return (
    <Pressable
      tooltip={'Copy to clipboard'}
      style={styles.background}
      onPress={() => Clipboard.setString(content)}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}>
      <Text style={styles.text}>{copyIcon}</Text>
    </Pressable>
  );
};

export function Example(props: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View>
      <Text accessibilityRole={'header'} style={styles.title}>
        {props.title}
      </Text>
      {props.code ? (
        <View style={styles.box}>
          <View style={styles.exampleContainer}>{props.children}</View>
          <View style={styles.codeContainer}>
            <Code>{props.code}</Code>
            <View style={{position: 'absolute', right: 12, top: 12}}>
              <CopyToClipboardButton content={props.code} />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.box}>
          <View style={styles.exampleContainer}>{props.children}</View>
        </View>
      )}
    </View>
  );
}
