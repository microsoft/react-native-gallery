import React from 'react';
import {Code} from './Code';
import {StyleSheet, Text, View} from 'react-native';
// import {useTheme} from '@react-navigation/native';

const createStyles = () =>
  StyleSheet.create({
    title: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      color: 'grey',
    },
    box: {
      borderRadius: 2,
      borderWidth: 1,
      borderColor: 'black',
    },
    exampleContainer: {
      padding: 15,
    },
    codeContainer: {
      borderWidth: 0,
      borderTopWidth: 1,
      borderColor: 'black',
    },
  });

export function Example(props: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  // const {colors} = useTheme();
  const styles = createStyles();
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
