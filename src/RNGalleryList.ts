'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {SettingsPage} from './SettingsPage';
import {TemplateExamplePage} from './examples/TemplateExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {DatePickerExamplePage} from './examples/DatePickerExamplePage';
import {TimePickerExamplePage} from './examples/TimePickerExamplePage';
import {SliderExamplePage} from './examples/SliderExamplePage';
import {PickerExamplePage} from './examples/PickerExamplePage';
import {DeviceInfoExamplePage} from './examples/DeviceInfoExamplePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import {SwitchExamplePage} from './examples/SwitchExamplePage';

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Welcome',
    component: WelcomePage,
  },
  {
    key: 'Settings',
    component: SettingsPage,
  },
  {
    key: 'Template',
    component: TemplateExamplePage,
  },
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
  },
  {
    key: 'DatePicker',
    component: DatePickerExamplePage,
  },
  {
    key: 'DeviceInfo',
    component: DeviceInfoExamplePage,
  },
  {
    key: 'Picker',
    component: PickerExamplePage,
  },
  {
    key: 'Text',
    component: TextExamplePage,
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
  },
  {
    key: 'TimePicker',
    component: TimePickerExamplePage,
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
  },
  {
    key: 'Switch',
    component: SwitchExamplePage,
  },
];

export default RNGalleryList;
