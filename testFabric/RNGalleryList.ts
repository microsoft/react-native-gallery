'use strict';
import React from 'react';
// import {HomePage} from './HomePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import {SwitchExamplePage} from './examples/SwitchExamplePage';
import {ViewExamplePage} from './examples/ViewExamplePage';
import {ImageExamplePage} from './examples/ImageExamplePage';
import {ScrollViewExamplePage} from './examples/ScrollViewExample';

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
  icon: string;
  type: string;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Image',
    component: ImageExamplePage,
    icon: '\uEB9F',
    type: 'Media',
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    icon: '\uEC8F',
    type: 'Layout',
  },
  {
    key: 'Switch',
    component: SwitchExamplePage,
    icon: '\uF19E',
    type: 'Basic Input',
  },
  {
    key: 'Text',
    component: TextExamplePage,
    icon: '\uE8D2',
    type: 'Text',
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
    icon: '\uE90A',
    type: 'Text',
  },
  {
    key: 'View',
    component: ViewExamplePage,
    icon: '\uECA5',
    type: 'Layout',
  },
];

export default RNGalleryList;
