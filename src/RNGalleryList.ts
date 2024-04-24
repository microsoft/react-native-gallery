'use strict';
import React from 'react';
import type {ImageSourcePropType} from 'react-native';
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
import {RadioButtonsExamplePage} from './examples/RadioButtonsExamplePage';
import {XamlExamplePage} from './examples/XamlExamplePage';
import {TrackPlayerExamplePage} from './examples/TrackPlayerExamplePage';
import {WindowsHelloExamplePage} from './examples/WindowsHelloExamplePage';
import {ExpanderExamplePage} from './examples/ExpanderExamplePage';
import {VirtualizedListExamplePage} from './examples/VirtualizedListExamplePage';
import {LinearGradientExamplePage} from './examples/LinearGradientExamplePage';
import {NetworkExamplePage} from './examples/NetworkExamplePage';

// https://github.com/microsoft/WinUI-Gallery/blob/c8f04135579c08c9a80711dcad7247f259891c79/WinUIGallery/DataModel/ControlInfoData.json#L803
let RNGalleryCategories = [
  {label: 'Basic Input', icon: '\uE73A'},
  {label: 'Collections', icon: '\uE80A'},
  {label: 'Date & time', icon: '\uEC92'},
  {label: 'Dialogs & flyouts', icon: '\uE8BD'},
  {label: 'Layout', icon: '\uE8A1'},
  {label: 'Media', icon: '\uE786'},
  {label: 'Scrolling', icon: '\uE8CB'},
  {label: 'Status and Info', icon: '\uE8F2'},
  {label: 'Text', icon: '\uE8D2'},
  {label: 'System', icon: '\uE7F8'},
  {label: 'Legacy', icon: '\uE96A'},
];

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
  textIcon: string;
  imageIcon?: ImageSourcePropType;
  type: string;
  subtitle?: string;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Home',
    component: HomePage,
    textIcon: '\uE80F',
    type: '',
  },
  {
    key: 'Settings',
    component: SettingsPage,
    textIcon: '\uE713',
    type: '',
  },
  {
    key: 'Button',
    component: ButtonExamplePage,
    textIcon: '\uE815',
    imageIcon: require('../assets/ControlImages/Button.png'),
    subtitle: 'A control that responds to user input and raises a Click event.',
    type: 'Basic Input',
  },
  {
    key: 'CheckBox',
    component: CheckBoxExamplePage,
    textIcon: '\uE73A',
    imageIcon: require('../assets/ControlImages/Checkbox.png'),
    subtitle: 'A control that a user can select or clear.',
    type: 'Basic Input',
  },
  {
    key: 'Clipboard',
    component: ClipboardExamplePage,
    textIcon: '\uE8C8',
    imageIcon: require('../assets/ControlImages/Clipboard.png'),
    type: 'System',
  },
  {
    key: 'Config',
    component: ConfigExamplePage,
    textIcon: '\uE753',
    type: 'Status and Info',
  },
  {
    key: 'DatePicker',
    component: DatePickerExamplePage,
    textIcon: '\uE787',
    imageIcon: require('../assets/ControlImages/DatePicker.png'),
    subtitle: 'A control that lets a user pick a date value.',
    type: 'Date & time',
  },
  {
    key: 'DeviceInfo',
    component: DeviceInfoExamplePage,
    textIcon: '\uE703',
    type: 'Status and Info',
  },
  {
    key: 'Expander',
    component: ExpanderExamplePage,
    textIcon: '\uE8C4',
    imageIcon: require('../assets/ControlImages/Expander.png'),
    subtitle:
      'A container with a header that can be expanded to show a body with more content.',
    type: 'Layout',
  },
  {
    key: 'FlatList ',
    component: FlatListExamplePage,
    textIcon: '\uE8A4',
    imageIcon: require('../assets/ControlImages/ListView.png'),
    type: 'Collections',
  },
  {
    key: 'Flyout',
    component: FlyoutExamplePage,
    textIcon: '\uE75A',
    imageIcon: require('../assets/ControlImages/Flyout.png'),
    subtitle: 'Shows contextual information and enables user interaction.',
    type: 'Dialogs & flyouts',
  },
  {
    key: 'Image',
    component: ImageExamplePage,
    textIcon: '\uEB9F',
    imageIcon: require('../assets/ControlImages/Image.png'),
    subtitle: 'A control to display image content.',
    type: 'Media',
  },
  {
    key: 'Linear Gradient',
    component: LinearGradientExamplePage,
    textIcon: '\uE790',
    type: 'Media',
  },
  {
    key: 'Networking',
    component: NetworkExamplePage,
    textIcon: '\uE704',
    type: 'Status and Info',
  },
  {
    key: 'Permissions',
    component: PermissionsExamplePage,
    textIcon: '\uED2C',
    type: 'Status and Info',
  },
  {
    key: 'Picker',
    component: PickerExamplePage,
    textIcon: '\uE7B8',
    imageIcon: require('../assets/ControlImages/ComboBox.png'),
    subtitle: 'A drop-down list of items a user can select from.',
    type: 'Basic Input',
  },
  {
    key: 'Popup',
    component: PopupExamplePage,
    textIcon: '\uE75A',
    imageIcon: require('../assets/ControlImages/Flyout.png'),
    type: 'Dialogs & flyouts',
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
    textIcon: '\uE815',
    imageIcon: require('../assets/ControlImages/Button.png'),
    type: 'Basic Input',
  },
  {
    key: 'Print',
    component: PrintExamplePage,
    textIcon: '\uE749',
    type: 'Media',
  },
  {
    key: 'ProgressView',
    component: ProgressViewExamplePage,
    textIcon: '\uF16A',
    imageIcon: require('../assets/ControlImages/ProgressBar.png'),
    subtitle:
      "Shows the apps progress on a task, or that the app is performing ongoing work that doesn't block user interaction.",
    type: 'Basic Input',
  },
  {
    key: 'Radio Buttons',
    component: RadioButtonsExamplePage,
    textIcon: '\uECCB',
    imageIcon: require('../assets/ControlImages/RadioButtons.png'),
    subtitle:
      'A control that allows the user to select a single option from a group of options.',
    type: 'Basic Input',
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    textIcon: '\uEC8F',
    imageIcon: require('../assets/ControlImages/ScrollView.png'),
    subtitle:
      'A container control that lets the user pan and zoom its content.',
    type: 'Scrolling',
  },
  {
    key: 'SensitiveInfo',
    component: SensitiveInfoExamplePage,
    textIcon: '\uE72E',
    type: 'Status and Info',
  },
  {
    key: 'Slider',
    component: SliderExamplePage,
    textIcon: '\uE9E9',
    imageIcon: require('../assets/ControlImages/Slider.png'),
    subtitle:
      'A control that lets the user select from a range of values by moving a Thumb control along a track.',
    type: 'Basic Input',
  },
  {
    key: 'Sketch',
    component: SketchExamplePage,
    textIcon: '\uE790',
    type: 'Media',
  },
  {
    key: 'Switch',
    component: SwitchExamplePage,
    textIcon: '\uF19E',
    imageIcon: require('../assets/ControlImages/ToggleSwitch.png'),
    subtitle:
      'A button that can be switched between two states like a CheckBox.',
    type: 'Basic Input',
  },
  {
    key: 'Text',
    component: TextExamplePage,
    textIcon: '\uE8D2',
    imageIcon: require('../assets/ControlImages/TextBlock.png'),
    subtitle: 'A lightweight control for displaying small amounts of text.',
    type: 'Text',
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
    textIcon: '\uE90A',
    imageIcon: require('../assets/ControlImages/TextBox.png'),
    subtitle: 'A single-line or multi-line plain text field.',
    type: 'Text',
  },
  {
    key: 'TimePicker',
    component: TimePickerExamplePage,
    textIcon: '\uE823',
    imageIcon: require('../assets/ControlImages/TimePicker.png'),
    subtitle: 'A configurable control that lets a user pick a time value.',
    type: 'Date & time',
  },
  {
    key: 'TextToSpeech',
    component: TTSExamplePage,
    textIcon: '\uEC43',
    imageIcon: require('../assets/ControlImages/Sound.png'),
    type: 'Media',
  },
  {
    key: 'TouchableHighlight',
    component: TouchableHighlightExamplePage,
    textIcon: '\uEDA4',
    type: 'Legacy',
  },
  {
    key: 'TouchableOpacity',
    component: TouchableOpacityExamplePage,
    textIcon: '\uEDA4',
    type: 'Legacy',
  },
  {
    key: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackExamplePage,
    textIcon: '\uEDA4',
    type: 'Legacy',
  },
  {
    key: 'TrackPlayer',
    component: TrackPlayerExamplePage,
    textIcon: '\uEC4F',
    imageIcon: require('../assets/ControlImages/Sound.png'),
    type: 'Media',
  },
  {
    key: 'View',
    component: ViewExamplePage,
    textIcon: '\uECA5',
    imageIcon: require('../assets/ControlImages/Canvas.png'),
    type: 'Layout',
  },
  {
    key: 'WebView',
    component: WebViewExamplePage,
    textIcon: '\uE774',
    imageIcon: require('../assets/ControlImages/WebView.png'),
    subtitle:
      'A Microsoft Edge (Chromium) based control that hosts HTML content in an app.',
    type: 'Media',
  },
  {
    key: 'WindowsHello',
    component: WindowsHelloExamplePage,
    textIcon: '\uE890',
    type: 'Status and Info',
  },
  {
    key: 'VirtualizedList',
    component: VirtualizedListExamplePage,
    textIcon: '\uE8A4',
    imageIcon: require('../assets/ControlImages/ListView.png'),
    type: 'Collections',
  },
  {
    key: 'Xaml',
    component: XamlExamplePage,
    textIcon: '\uE70F',
    type: 'Layout',
  },
];

export default RNGalleryList;
export {RNGalleryCategories};
