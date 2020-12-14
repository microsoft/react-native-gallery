'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {TemplateExamplePage} from './examples/TemplateExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {DatePickerExamplePage} from './examples/DatePickerExamplePage';
import {TimePickerExamplePage} from './examples/TimePickerExamplePage';
import {SliderExamplePage} from './examples/SliderExamplePage';
import {PickerExamplePage} from './examples/PickerExamplePage';

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
    key: 'Picker',
    component: PickerExamplePage,
  },
  {
    key: 'TimePicker',
    component: TimePickerExamplePage,
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
  },
];

export default RNGalleryList;
