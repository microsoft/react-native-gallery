'use strict';
import React from 'react';
import {WelcomePage} from './WelcomePage';
import {SettingsPage} from './SettingsPage';
import {ButtonExamplePage} from './examples/ButtonExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {ConfigExamplePage} from './examples/ConfigExamplePage';
import {DatePickerExamplePage} from './examples/DatePickerExamplePage';
import {TimePickerExamplePage} from './examples/TimePickerExamplePage';
import {SketchExamplePage} from './examples/SketchExamplePage';
import {SliderExamplePage} from './examples/SliderExamplePage';
import {PermissionsExamplePage} from './examples/PermissionsExamplePage';
import {PickerExamplePage} from './examples/PickerExamplePage';
import {PrintExamplePage} from './examples/PrintExamplePage';
import {DeviceInfoExamplePage} from './examples/DeviceInfoExamplePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import {TTSExamplePage} from './examples/TTSExamplePage';
import {TouchableHighlightExamplePage} from './examples/TouchableHighlightExamplePage';
import {TouchableOpacityExamplePage} from './examples/TouchableOpacityExamplePage';
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
// Disabled from #125
//import {GestureHandlerExamplePage} from './examples/GestureHandlerExamplePage';
import {XamlExamplePage} from './examples/XamlExamplePage';
import {TrackPlayerExamplePage} from './examples/TrackPlayerExamplePage';
import {ExpanderExamplePage} from './examples/ExpanderExamplePage';

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
  icon: string;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Settings',
    component: SettingsPage,
    icon: '\uE713',
  },
  {
    key: 'Welcome',
    component: WelcomePage,
    icon: '\uE80F',
  },
  {
    key: 'Button',
    component: ButtonExamplePage,
    icon: '\uE815',
  },
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
    icon: '\uE73A',
  },
  {
    key: 'Config',
    component: ConfigExamplePage,
    icon: '\uE753',
  },
  {
    key: 'DatePicker',
    component: DatePickerExamplePage,
    icon: '\uE787',
  },
  {
    key: 'DeviceInfo',
    component: DeviceInfoExamplePage,
    icon: '\uE703',
  },
  {
    key: 'Expander',
    component: ExpanderExamplePage,
    icon: '\uE8C4',
  },
  {
    key: 'FlatList ',
    component: FlatListExamplePage,
    icon: '\uE8A4',
  },
  {
    key: 'Flyout',
    component: FlyoutExamplePage,
    icon: '\uE75A',
  },
  /*{
    key: 'GestureHandler',
    component: GestureHandlerExamplePage,
  },*/
  {
    key: 'Image',
    component: ImageExamplePage,
    icon: '\uEB9F',
  },
  {
    key: 'Permissions',
    component: PermissionsExamplePage,
    icon: '\uED2C',
  },
  {
    key: 'Picker',
    component: PickerExamplePage,
    icon: '\uE7B8',
  },
  {
    key: 'Popup',
    component: PopupExamplePage,
    icon: '\uE75A',
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
    icon: '\uE815',
  },
  {
    key: 'Print',
    component: PrintExamplePage,
    icon: '\uE749',
  },
  {
    key: 'ProgressView',
    component: ProgressViewExamplePage,
    icon: '\uF16A',
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    icon: '\uEC8F',
  },
  {
    key: 'SensitiveInfo',
    component: SensitiveInfoExamplePage,
    icon: '\uE72E',
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
    icon: '\uE9E9',
  },
  {
    key: 'Sketch',
    component: SketchExamplePage,
    icon: '\uE790',
  },
  {
    key: 'Switch',
    component: SwitchExamplePage,
    icon: '\uF19E',
  },
  {
    key: 'Text',
    component: TextExamplePage,
    icon: '\uE8D2',
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
    icon: '\uE90A',
  },
  {
    key: 'TimePicker',
    component: TimePickerExamplePage,
    icon: '\uE823',
  },
  {
    key: 'TextToSpeech',
    component: TTSExamplePage,
    icon: '\uEC43',
  },
  {
    key: 'TouchableHighlight',
    component: TouchableHighlightExamplePage,
    icon: '\uEDA4',
  },
  {
    key: 'TouchableOpacity',
    component: TouchableOpacityExamplePage,
    icon: '\uEDA4',
  },
  {
    key: 'TrackPlayer',
    component: TrackPlayerExamplePage,
    icon: '\uEC4F',
  },
  {
    key: 'View',
    component: ViewExamplePage,
    icon: '\uECA5',
  },
  {
    key: 'WebView',
    component: WebViewExamplePage,
    icon: '\uE774',
  },
  {
    key: 'Xaml',
    component: XamlExamplePage,
    icon: '\uE70F',
  },
];

export default RNGalleryList;
