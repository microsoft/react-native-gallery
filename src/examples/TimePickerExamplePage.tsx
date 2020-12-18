'use strict';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const TimePickerExamplePage: React.FunctionComponent<{}> = () => {
  const [time, _setTime] = useState(new Date(0));
  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx = `import DateTimePicker from '@react-native-community/datetimepicker';

<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 30}}
/>`;
// Replace with string version of JSX snippet used to render component for example2  
const example2jsx = `import DateTimePicker from '@react-native-community/datetimepicker';

<DateTimePicker
  mode="time"
  value={time}
  style={{width: 300, opacity: 1, height: 30}}
  is24Hour={true}
  minuteInterval={5}
/>`;

  return (
    <Page
      title="TimePicker"
      description={
        'Use a TimePicker to let users set a time in your app, for example to set a reminder. The TimePicker displays three controls month, day, and AM/PM. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.'
      }>
      <Example title="A simple TimePicker." code={example1jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 30}}
        />
      </Example>
      <Example
        title="A 24 hour clock TimePicker with 5 minute intervals."
        code={example2jsx}>
        <DateTimePicker
          mode="time"
          value={time}
          style={{width: 300, opacity: 1, height: 30}}
          is24Hour={true}
          minuteInterval={5}
        />
      </Example>
    </Page>
  );
};
