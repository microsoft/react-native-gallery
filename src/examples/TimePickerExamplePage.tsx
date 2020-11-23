'use strict';
import {StyleSheet, View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-community/clipboard';
import styles from './ExamplePageStyleSheet';
import DateTimePicker from '@react-native-community/datetimepicker';

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const TimePickerExamplePage: React.FunctionComponent<{}> = () => {
    const [time, setTime] = useState(new Date(0));
    // Replace with string version of JSX snippet used to render component for example1
    const example1jsx = "<DateTimePicker mode=\"time\" value={time} style={{width: 300, opacity: 1, height: 30}}\/>";
    // Replace with string version of JSX snippet used to render component for example2
    const example2jsx = "<DateTimePicker mode=\"time\" value={time} style={{width: 300, opacity: 1, height: 30}} is24Hour={true} minuteInterval={5}\/>";

    const copyExample1ToClipboard = () => {
      Clipboard.setString(example1jsx);
    };

    const copyExample2ToClipboard = () => {
      Clipboard.setString(example2jsx);
    };
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TimePicker</Text>
      <Text style={styles.description}>Use a TimePicker to let users set a time in your app, for example to set a reminder. The TimePicker displays three controls month, day, and AM/PM. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.</Text>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>A simple TimePicker.</Text>
        <View style={styles.exampleComponentView}>
          <DateTimePicker
            mode="time"
            value={time}
            style={{width: 300, opacity: 1, height: 30}}
          />
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample1ToClipboard}>&lt;DateTimePicker mode="time" value=&#123;time&#125; style=&#123;&#123;width: 300, opacity: 1, height: 30&#125;&#125;/&gt;</Text>
        </View>
      </View>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>A 24 hour clock TimePicker with 5 minute intervals.</Text>
        <View style={styles.exampleComponentView}>
          <DateTimePicker
            mode="time"
            value={time}
            style={{width: 300, opacity: 1, height: 30}}
            //@ts-ignore
            is24Hour={true}
            //@ts-ignore
            minuteInterval={5}
          />
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample2ToClipboard}>&lt;DateTimePicker mode="time" value=&#123;time&#125; style=&#123;&#123;width: 300, opacity: 1, height: 30&#125;&#125; is24hour=&#123;true&#125; minuteInterval=&#123;5&#125;/&gt;</Text>
        </View>
      </View>
    </View>
  );
};