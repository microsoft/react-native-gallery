'use strict';
import {TextInput} from 'react-native';
import React from 'react';
import {Example} from './components/Example';
import {Page} from './components/Page';
import { TextInputExamplePage } from './examples/TextInputExamplePage'
import { ViewExamplePage } from './examples/ViewExamplePage'
import { ImageExamplePage } from './examples/ImageExamplePage';
import { ScrollViewExamplePage } from './examples/ScrollViewExample';
import { SwitchExamplePage } from './examples/SwitchExamplePage';
import { TextExamplePage } from './examples/TextExamplePage';


// import {useTheme} from '@react-navigation/native';

export const App: React.FunctionComponent<{}> = () => {
  return (
    <ImageExamplePage />
  )
};