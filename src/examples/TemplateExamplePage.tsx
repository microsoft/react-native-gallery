'use strict';
import {StyleSheet, View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';
import styles from './ExamplePageStyleSheet';
// Add import for page's component here

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const TemplateExamplePage: React.FunctionComponent<{}> = () => {
    // Replace with string version of JSX snippet used to render component for example1
    const example1jsx = "";
    // Replace with string version of JSX snippet used to render component for example2
    const example2jsx = "";

    const copyExample1ToClipboard = () => {
      Clipboard.setString(example1jsx);
    };

    const copyExample2ToClipboard = () => {
      Clipboard.setString(example2jsx);
    };
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Template</Text>
      <Text style={styles.description}>Add component description here. See XAML Controls Gallery for description contents if available.</Text>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>Example 1</Text>
        <View style={styles.exampleComponentView}>
          <Text>Add Example 1 instance of compenent here.</Text>
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample1ToClipboard}>Add Text version of JSX used to create Example 1 instance of component here.</Text>
        </View>
      </View>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>Example 2</Text>
        <View style={styles.exampleComponentView}>
            <Text>Add Example 2 instance of compenent here.</Text>
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample2ToClipboard}>Add Text version of JSX used to create Example 1 instance of component here.</Text>
        </View>
      </View>
    </View>
  );
};
