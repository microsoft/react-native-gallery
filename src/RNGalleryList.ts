'use strict';
import React from 'react';
import {HomePage} from './HomePage';
import {SettingsPage} from './SettingsPage';
import {ButtonExamplePage} from './examples/ButtonExamplePage';
import {CheckBoxExamplePage} from './examples/CheckBoxExamplePage';
import {ClipboardExamplePage} from './examples/ClipboardExamplePage';
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
import {TouchableWithoutFeedbackExamplePage} from './examples/TouchableWithoutFeedbackExamplePage';
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
import {XamlExamplePage} from './examples/XamlExamplePage';
import {TrackPlayerExamplePage} from './examples/TrackPlayerExamplePage';
import {WindowsHelloExamplePage} from './examples/WindowsHelloExamplePage';
import {ExpanderExamplePage} from './examples/ExpanderExamplePage';
import {VirtualizedListExamplePage} from './examples/VirtualizedListExamplePage';

// https://github.com/microsoft/WinUI-Gallery/blob/c8f04135579c08c9a80711dcad7247f259891c79/WinUIGallery/DataModel/ControlInfoData.json#L803
let RNGalleryCategories = [
  {label: 'Basic Input', icon: ''},
  {label: 'Date and Time', icon: ''},
  {label: 'Dialogs and Flyouts', icon: ''},
  {label: 'Layout', icon: ''},
  {label: 'Status and Info', icon: ''},
  {label: 'Media', icon: ''},
  {label: 'Text', icon: ''},
  {label: 'System', icon: ''},
];

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
  icon: string;
  type: string;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Home',
    component: HomePage,
    icon: '\uE80F',
    type: '',
  },
  {
    key: 'Settings',
    component: SettingsPage,
    icon: '\uE713',
    type: '',
  },
  {
    key: 'Button',
    component: ButtonExamplePage,
    icon: '\uE815',
    type: 'Basic Input',
  },
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
    icon: '\uE73A',
    type: 'Basic Input',
  },
  {
    key: 'Clipboard',
    component: ClipboardExamplePage,
    icon: '\uE8C8',
    type: 'System',
  },
  {
    key: 'Config',
    component: ConfigExamplePage,
    icon: '\uE753',
    type: 'Status and Info',
  },
  {
    key: 'DatePicker',
    component: DatePickerExamplePage,
    icon: '\uE787',
    type: 'Date and Time',
  },
  {
    key: 'DeviceInfo',
    component: DeviceInfoExamplePage,
    icon: '\uE703',
    type: 'Status and Info',
  },
  {
    key: 'Expander',
    component: ExpanderExamplePage,
    icon: '\uE8C4',
    type: 'Layout',
  },
  {
    key: 'FlatList ',
    component: FlatListExamplePage,
    icon: '\uE8A4',
    type: 'Layout',
  },
  {
    key: 'Flyout',
    component: FlyoutExamplePage,
    icon: '\uE75A',
    type: 'Dialogs and Flyouts',
  },
  {
    key: 'Image',
    component: ImageExamplePage,
    icon: '\uEB9F',
    type: 'Media',
  },
  {
    key: 'Permissions',
    component: PermissionsExamplePage,
    icon: '\uED2C',
    type: 'Status and Info',
  },
  {
    key: 'Picker',
    component: PickerExamplePage,
    icon: '\uE7B8',
    type: 'Basic Input',
  },
  {
    key: 'Popup',
    component: PopupExamplePage,
    icon: '\uE75A',
    type: 'Layout',
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
    icon: '\uE815',
    type: 'Basic Input',
  },
  {
    key: 'Print',
    component: PrintExamplePage,
    icon: '\uE749',
    type: 'Media',
  },
  {
    key: 'ProgressView',
    component: ProgressViewExamplePage,
    icon: '\uF16A',
    type: 'Basic Input',
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    icon: '\uEC8F',
    type: 'Layout',
  },
  {
    key: 'SensitiveInfo',
    component: SensitiveInfoExamplePage,
    icon: '\uE72E',
    type: 'Status and Info',
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
    icon: '\uE9E9',
    type: 'Basic Input',
  },
  {
    key: 'Sketch',
    component: SketchExamplePage,
    icon: '\uE790',
    type: 'Media',
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
    key: 'TimePicker',
    component: TimePickerExamplePage,
    icon: '\uE823',
    type: 'Date and Time',
  },
  {
    key: 'TextToSpeech',
    component: TTSExamplePage,
    icon: '\uEC43',
    type: 'Media',
  },
  {
    key: 'TouchableHighlight',
    component: TouchableHighlightExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TouchableOpacity',
    component: TouchableOpacityExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackExamplePage,
    icon: '\uEDA4',
    type: 'Basic Input',
  },
  {
    key: 'TrackPlayer',
    component: TrackPlayerExamplePage,
    icon: '\uEC4F',
    type: 'Media',
  },
  {
    key: 'View',
    component: ViewExamplePage,
    icon: '\uECA5',
    type: 'Layout',
  },
  {
    key: 'WebView',
    component: WebViewExamplePage,
    icon: '\uE774',
    type: 'Media',
  },
  {
    key: 'WindowsHello',
    component: WindowsHelloExamplePage,
    icon: '\uE890',
    type: 'Status and Info',
  },
  {
    key: 'VirtualizedList',
    component: VirtualizedListExamplePage,
    icon: '\uE8A4',
    type: 'Layout',
  },
  {
    key: 'Xaml',
    component: XamlExamplePage,
    icon: '\uE70F',
    type: 'Layout',
  },
];

export default RNGalleryList;
export {RNGalleryCategories};
