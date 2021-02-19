'use strict';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const DatePickerExamplePage: React.FunctionComponent<{}> = () => {
  const [date1, _setDate1] = useState(new Date());
  const [date2, _setDate2] = useState(new Date());

  const textExample1 = '<DateTimePicker value={date} mode="date" />';
  const textExample2 = `<DateTimePicker
  value={date2}
  mode="date"
  dayOfWeekFormat={'{dayofweek.abbreviated(3)}'}
  firstDayOfWeek={1} />`;

  return (
    <Page
      title="DatePicker"
      description={
        'Use a DatePicker to let users set a date in your app, for example to schedule an appointment. The DatePicker displays three controls for month, date, and year. These controls are easy to use with touch or mouse, and they can be styled and configured in several different ways.'
      }
      wrappedNativeControl={{
        control: 'CalendarDatePicker',
        url:
          'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.calendardatepicker?view=winrt-19041',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/DatePickerExamplePage.tsx"
      documentation={[
        {
          label: 'DateTimePicker',
          url: 'https://github.com/react-native-datetimepicker/datetimepicker',
        },
      ]}>
      <Example title="A simple DatePicker." code={textExample1}>
        <DateTimePicker value={date1} mode="date" />
      </Example>
      <Example
        title="A DatePicker with day of week formatted and first day of week adjusted"
        code={textExample2}>
        <DateTimePicker
          value={date2}
          mode="date"
          dayOfWeekFormat={'{dayofweek.abbreviated(3)}'}
          firstDayOfWeek={1}
        />
      </Example>
    </Page>
  );
};
