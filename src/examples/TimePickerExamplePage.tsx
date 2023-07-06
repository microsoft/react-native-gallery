'use strict';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const TimePickerExamplePage: React.FunctionComponent<{}> = () => {
  const [time] = useState(new Date(0));
  const example1jsx = `<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 50}} />`;
  const example2jsx = `<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 50}}
  is24Hour={true}
  minuteInterval={5} />`;

  return (
    <Page
      title="TimePicker"
      description={
        'Use a TimePicker to let users set a time in your app, for example to set a reminder. The TimePicker displays three controls month, day, and AM/PM. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.'
      }
      wrappedNativeControl={{
        control: 'TimePicker',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.timepicker?view=winrt-19041',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
      documentation={[
        {
          label: 'DateTimePicker',
          url: 'https://github.com/react-native-datetimepicker/datetimepicker',
        },
      ]}>
      <Example title="A simple TimePicker." code={example1jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 50}}
        />
      </Example>
      <Example
        title="A 24 hour clock TimePicker with 5 minute intervals."
        code={example2jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 50}}
          is24Hour={true}
          minuteInterval={5}
        />
      </Example>
    </Page>
  );
};
