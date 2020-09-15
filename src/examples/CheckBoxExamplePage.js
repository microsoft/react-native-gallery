'use strict';
import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import CheckBox from '@react-native-community/checkbox';

class CheckBoxExamplePage extends React.Component {
  render() {
    return (
      <View style={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Sample Checkbox</Text>
        <CheckBox/>
      </View>
    );
  }
}

export default CheckBoxExamplePage;
