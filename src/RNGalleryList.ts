'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {DateTimePickerExamplePage} from './examples/DateTimePickerExamplePage';

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
    key: 'CheckBox',
    component: CheckBoxExamplePage,
  },
  {
    key: 'DateTimePicker',
    component: DateTimePickerExamplePage,
  }
];

export default RNGalleryList;
