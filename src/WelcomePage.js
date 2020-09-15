'use strict';
import {StyleSheet, View, Text} from 'react-native';
import React, {Component} from 'react';
import CheckBox from '@react-native-community/checkbox';

class WelcomPage extends React.Component {
  render() {
    return (
        <View style={{height:'100%', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize:24}}>Welcome to the RN Gallery!</Text>
          <Text></Text>
          <Text>To view an example page, click the Menu button and choose from the list in the drawer.</Text>
        </View>
    );
  }
}

export default WelcomPage;
