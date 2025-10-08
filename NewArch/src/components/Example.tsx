import React from 'react';
import {Code} from './Code';
import {StyleSheet, PlatformColor, Text, View} from 'react-native';
import {CopyToClipboardButton} from './CopyToClipboard';
import {useTheme} from '../Navigation';

const createStyles = (colors: any) =>
  StyleSheet.create({
    title: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      color: PlatformColor('TextControlForeground'),
    },
    box: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    exampleContainer: {
      padding: 15,
      backgroundColor: PlatformColor('Background'),
    },
    codeContainer: {
      borderWidth: 0,
      borderTopWidth: 1,
      borderColor: colors.border,
      padding: 12,
      backgroundColor: PlatformColor('Background'),
    },
  });

export const Example = React.forwardRef<any, {
  title: string;
  code: string;
  children: React.ReactNode;
}>((props, ref) => {
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
          <View
            style={styles.codeContainer}
            accessible={true}
            accessibilityRole="none"
            accessibilityLabel="Source code">
            <Code>{props.code}</Code>
            <View style={{position: 'absolute', right: 12, top: 12}}>
              <CopyToClipboardButton ref={ref} content={props.code} />
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
});