'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {SettingsPage} from './SettingsPage';
import {TemplateExamplePage} from './examples/TemplateExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {ConfigExamplePage} from './examples/ConfigExamplePage';
import {DatePickerExamplePage} from './examples/DatePickerExamplePage';
import {TimePickerExamplePage} from './examples/TimePickerExamplePage';
//import {SketchExamplePage} from './examples/SketchExamplePage';
import {SliderExamplePage} from './examples/SliderExamplePage';
import {PermissionsExamplePage} from './examples/PermissionsExamplePage';
import {PickerExamplePage} from './examples/PickerExamplePage';
import {PrintExamplePage} from './examples/PrintExamplePage';
import {DeviceInfoExamplePage} from './examples/DeviceInfoExamplePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import {SwitchExamplePage} from './examples/SwitchExamplePage';
import {ViewExamplePage} from './examples/ViewExamplePage';
import {ImageExamplePage} from './examples/ImageExamplePage';
import {PressableExamplePage} from './examples/PressableExamplePage';
import {FlatListExamplePage} from './examples/FlatListExamplePage';
import {ScrollViewExamplePage} from './examples/ScrollViewExample';
import {WebViewExamplePage} from './examples/WebViewExamplePage';
import {SensitiveInfoExamplePage} from './examples/SensitiveInfoExamplePage';
import {PopupExamplePage} from './examples/PopupExamplePage';
import {FlyoutExamplePage} from './examples/FlyoutExamplePage';
import {ProgressViewExamplePage} from './examples/ProgressViewExamplePage';
import {GestureHandlerExamplePage} from './examples/GestureHandlerExamplePage';
import {XamlExamplePage} from './examples/XamlExamplePage';

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
    key: 'Config',
    component: ConfigExamplePage,
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
    key: 'FlatList ',
    component: FlatListExamplePage,
  },
  {
    key: 'Flyout',
    component: FlyoutExamplePage,
  },
  {
    key: 'GestureHandler',
    component: GestureHandlerExamplePage,
  },
  {
    key: 'Image',
    component: ImageExamplePage,
  },
  {
    key: 'Permissions',
    component: PermissionsExamplePage,
  },
  {
    key: 'Picker',
    component: PickerExamplePage,
  },
  {
    key: 'Popup',
    component: PopupExamplePage,
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
  },
  {
    key: 'Print',
    component: PrintExamplePage,
  },
  {
    key: 'ProgressView',
    component: ProgressViewExamplePage,
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
    key: 'ScrollView',
    component: ScrollViewExamplePage,
  },
  {
    key: 'SensitiveInfo',
    component: SensitiveInfoExamplePage,
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
  },
  /*{
    key: 'Sketch',
    component: SketchExamplePage,
  },*/
  {
    key: 'Switch',
    component: SwitchExamplePage,
  },
  {
    key: 'View',
    component: ViewExamplePage,
  },
  {
    key: 'WebView',
    component: WebViewExamplePage,
  },
  {
    key: 'Xaml',
    component: XamlExamplePage,
  },
];

export default RNGalleryList;
