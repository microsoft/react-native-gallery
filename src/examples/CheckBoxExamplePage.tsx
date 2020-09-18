'use strict';
import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const CheckBoxExamplePage: React.FunctionComponent<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Sample Checkbox</Text>
      <CheckBox />
    </View>
  );
};
