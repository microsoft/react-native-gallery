'use strict';
import {StyleSheet, View, Text, Platform} from 'react-native';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const DateTimePickerExamplePage: React.FunctionComponent<{}> = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(undefined);
    
  return (
    <View style={styles.container}>
      <Text>Sample Date Picker</Text>
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        maximumDate={new Date(2050, 12, 31)}
        minimumDate={new Date(1950, 1, 1)}
        dayOfWeekFormat={'{dayofweek.abbreviated(3)}'}
      />
      <Text>Sample Time Picker</Text>
      <DateTimePicker
        mode="time"
        value={time}
        style={{width: 300, opacity: 1, height: 30}}
        is24Hour={false}
        minuteInterval={1}
      />
    </View>
  );
};
