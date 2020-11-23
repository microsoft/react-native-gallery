'use strict';
import {StyleSheet, View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Clipboard from '@react-native-community/clipboard';
import styles from './ExamplePageStyleSheet';

export const DatePickerExamplePage: React.FunctionComponent<{}> = () => {
    const [date1, setDate1] = useState(new Date());
    const [date2, setDate2] = useState(new Date());

    const textExample1 = "<DateTimePicker value={date} mode=\"date\">";
    const textExample2 = "<DateTimePicker value={date} mode=\"date\" dayOfWeekFormat={\'{dayofweek.abbreviated(3)}\'} firstDayOfWeek={1}\/>";
    
    const copyExample1ToClipboard = () => {
      Clipboard.setString(textExample1);
    };

    const copyExample2ToClipboard = () => {
      Clipboard.setString(textExample2);
    };
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DatePicker</Text>
      <Text style={styles.description}>Use a DatePicker to let users set a date in your app, for example to schedule an appointment. The DatePicker displays three controls for month, date, and year. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.</Text>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>A simple DatePicker.</Text>
        <View style={styles.exampleComponentView}>
          <DateTimePicker
            value={date1}
            mode="date"
          />
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample1ToClipboard} >&lt;DateTimePicker value=&#123;date&#125; mode="date"/&gt;</Text>
        </View>
      </View>
      <View style={styles.exampleView}>
        <Text style={styles.exampleHeader}>A DatePicker with day of week formatted and first day of week adjusted.</Text>
        <View style={styles.exampleComponentView}>
          <DateTimePicker
            value={date2}
            mode="date"
            //@ts-ignore
            dayOfWeekFormat={'{dayofweek.abbreviated(3)}'}
            //@ts-ignore
            firstDayOfWeek={1}
          />
        </View>
        <View style={styles.exampleTextView}>
          <Text style={styles.exampleText} onPress={copyExample2ToClipboard}>&lt;DateTimePicker value=&#123;date&#125; mode="date" dayOfWeekFormat=&#123;'&#123;dayofweek.abbreviated(3)&#125;'&#125; firstDayOfWeek=&#123;1&#125;/&gt;</Text>
        </View>
      </View>
    </View>
  );
};
