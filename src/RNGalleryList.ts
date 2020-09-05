'use strict';
import React from 'react';
import { View } from 'react-native';
const CheckBoxExamplePage = require('./examples/CheckBoxExamplePage');

interface IRNGalleryExample {
  key: string;
  component: React.Component;
}
  
export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
  },
  {
    key: 'CheckBox2',
    component: CheckBoxExamplePage,
  },
];

export default RNGalleryList;