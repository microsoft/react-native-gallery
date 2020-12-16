import React from 'react';
import {Code} from './Code';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 23,
  },
  box: {
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#555',
  },
  exampleContainer: {
    padding: 15,
  },
  codeContainer: {
    borderWidth: 0,
    borderTopWidth: 1,
    borderColor: '#555',
  },
});

export function Example(props: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <View>
      <Text style={styles.title}>{props.title}</Text>
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
