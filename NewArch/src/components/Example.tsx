import React, {useState, useEffect} from 'react';
import {Code} from './Code';
import {StyleSheet, PlatformColor, Text, View, Dimensions} from 'react-native';
import {CopyToClipboardButton} from './CopyToClipboard';
import {useTheme} from '../Navigation';

const createStyles = (colors: any, windowWidth: number) => {
  const isSmallScreen = windowWidth < 600;
  const padding = isSmallScreen ? 8 : 15;
  
  return StyleSheet.create({
    title: {
      marginTop: isSmallScreen ? 20 : 30,
      marginBottom: 10,
      fontSize: isSmallScreen ? 18 : 20,
      color: PlatformColor('TextControlForeground'),
    },
    box: {
      borderRadius: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    exampleContainer: {
      padding: padding,
      backgroundColor: PlatformColor('Background'),
      minHeight: isSmallScreen ? 40 : 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    codeContainer: {
      borderWidth: 0,
      borderTopWidth: 1,
      borderColor: colors.border,
      padding: isSmallScreen ? 8 : 12,
      backgroundColor: PlatformColor('Background'),
    },
  });
};

export const Example = React.forwardRef<any, {
  title: string;
  code: string;
  children: React.ReactNode;
}>((props, ref) => {
  const {colors} = useTheme();
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindowDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const styles = createStyles(colors, windowDimensions.width);
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
