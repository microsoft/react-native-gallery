'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {TemplateExamplePage} from './examples/TemplateExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {DatePickerExamplePage} from './examples/DatePickerExamplePage';
import {TimePickerExamplePage} from './examples/TimePickerExamplePage';

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
    key: 'TimePicker',
    component: TimePickerExamplePage,
  }
];


export default RNGalleryList;
