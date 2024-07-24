'use strict';
import React from 'react';
import type {ImageSourcePropType} from 'react-native';
import {HomePage} from './HomePage';
import {SettingsPage} from './SettingsPage';
import {ComponentListPage} from './ComponentListPage';
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
import {SvgExamplePage} from './examples/SvgExamplePage';
import {LottieAnimationsExamplePage} from './examples/LottieAnimationsExamplePage';
import {
  ArrowBidirectionalUpDown16Regular,
  Button16Regular,
  Calendar16Regular,
  CalendarAdd16Regular,
  CheckboxChecked16Regular,
  Clipboard16Regular,
  Cloud16Regular,
  Comment16Regular,
  ContentView16Regular,
  Desktop16Regular,
  DualScreenVerticalScrollRegular,
  Eye16Regular,
  FormRegular,
  Globe16Regular,
  Grid16Regular,
  HandPoint16Regular,
  Home16Regular,
  Image16Regular,
  LayoutColumnTwoSplitLeft16Regular,
  LineFlowDiagonalUpRight16Regular,
  LineFlowDiagonalUpRightFilled,
  List16Regular,
  ListBar16Regular,
  LockClosed16Regular,
  MoviesAndTv16Regular,
  NetworkAdapter16Regular,
  NetworkCheckRegular,
  Password16Regular,
  PlayCircle16Regular,
  Print16Regular,
  RadioButton16Filled,
  RadioButton16Regular,
  RadioButtonOff16Regular,
  Save16Regular,
  Settings16Regular,
  Star16Regular,
  Status16Regular,
  Text16Regular,
  TextBulletList16Regular,
  TextChangeCaseRegular,
  TimePicker20Regular,
  TimePickerRegular,
  Timer16Regular,
  ToggleLeft16Regular,
} from '@fluentui/react-native-icons';

// https://github.com/microsoft/WinUI-Gallery/blob/c8f04135579c08c9a80711dcad7247f259891c79/WinUIGallery/DataModel/ControlInfoData.json#L803
let RNGalleryCategories = [
  {
    label: 'Basic Input',
    icon: '\uE73A',
    fluentIcon: <CheckboxChecked16Regular />,
  },
  {label: 'Collections', icon: '\uE80A', fluentIcon: <Grid16Regular />},
  {label: 'Date & time', icon: '\uEC92', fluentIcon: <Calendar16Regular />},
  // {
  //   label: 'Dialogs & flyouts',
  //   icon: '\uE8BD',
  //   fluentIcon: <Comment16Regular />,
  // },
  {
    label: 'Layout',
    icon: '\uE8A1',
    fluentIcon: <LayoutColumnTwoSplitLeft16Regular />,
  },
  {label: 'Media', icon: '\uE786', fluentIcon: <PlayCircle16Regular />},
  {
    label: 'Scrolling',
    icon: '\uE8CB',
    // fluentIcon: <ArrowBidirectionalUpDownRegular />,
    fluentIcon: <DualScreenVerticalScrollRegular />,
  },
  {label: 'Status and Info', icon: '\uE8F2', fluentIcon: <Status16Regular />},
  {label: 'Text', icon: '\uE8D2', fluenticon: <TextChangeCaseRegular />},
  {label: 'System', icon: '\uE7F8', fluentIcon: <Desktop16Regular />},
  {label: 'Legacy', icon: '\uE96A', fluentIcon: <Save16Regular />},
];

interface IRNGalleryExample {
  key: string;
  component: React.ElementType;
  textIcon: string;
  imageIcon?: ImageSourcePropType;
  fluentIcon?: React.ReactElement;
  type: string;
  subtitle?: string;
  new?: boolean;
  recentlyUpdated?: boolean;
}

export const RNGalleryList: Array<IRNGalleryExample> = [
  {
    key: 'Home',
    component: HomePage,
    textIcon: '\uE80F',
    fluentIcon: <Home16Regular />,
    type: '',
  },
  {
    key: 'Settings',
    component: SettingsPage,
    textIcon: '\uE713',
    fluentIcon: <Settings16Regular />,
    type: '',
  },
  {
    key: 'All samples',
    component: ComponentListPage,
    textIcon: '\uE71D',
    fluentIcon: <TextBulletList16Regular />,
    type: '',
  },
  {
    key: 'Button',
    component: ButtonExamplePage,
    textIcon: '\uE815',
    imageIcon: require('../assets/ControlImages/Button.png'),
    fluentIcon: <Button16Regular />,
    subtitle: 'A control that responds to user input and raises a Click event.',
    type: 'Basic Input',
  },
  // {
  //   key: 'CheckBox',
  //   component: CheckBoxExamplePage,
  //   textIcon: '\uE73A',
  //   imageIcon: require('../assets/ControlImages/Checkbox.png'),
  //   fluentIcon: <CheckboxChecked16Regular />,
  //   subtitle: 'A control that a user can select or clear.',
  //   type: 'Basic Input',
  // },
  {
    key: 'Clipboard',
    component: ClipboardExamplePage,
    textIcon: '\uE8C8',
    imageIcon: require('../assets/ControlImages/Clipboard.png'),
    fluentIcon: <Clipboard16Regular />,
    subtitle: 'Copy and paste to and from the system Clipboard.',
    type: 'System',
    new: true,
  },
  {
    key: 'Config',
    component: ConfigExamplePage,
    textIcon: '\uE753',
    fluentIcon: <Cloud16Regular />,
    type: 'Status and Info',
  },
  {
    key: 'DatePicker',
    component: DatePickerExamplePage,
    textIcon: '\uE787',
    imageIcon: require('../assets/ControlImages/DatePicker.png'),
    fluentIcon: <CalendarAdd16Regular />,
    subtitle: 'A control that lets a user pick a date value.',
    type: 'Date & time',
  },
  // {
  //   key: 'DeviceInfo',
  //   component: DeviceInfoExamplePage,
  //   textIcon: '\uE703',
  //   type: 'Status and Info',
  // },
  // {
  //   key: 'Expander',
  //   component: ExpanderExamplePage,
  //   textIcon: '\uE8C4',
  //   imageIcon: require('../assets/ControlImages/Expander.png'),
  //   subtitle:
  //     'A container with a header that can be expanded to show a body with more content.',
  //   type: 'Layout',
  // },
  {
    key: 'FlatList ',
    component: FlatListExamplePage,
    textIcon: '\uE8A4',
    imageIcon: require('../assets/ControlImages/ListView.png'),
    fluentIcon: <List16Regular />,
    subtitle:
      'A performant interface for rendering basic, flat lists, supporting the most handy features.',
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
    fluentIcon: <Image16Regular />,
    subtitle: 'A control to display image content.',
    type: 'Media',
  },
  // {
  //   key: 'Linear Gradient',
  //   component: LinearGradientExamplePage,
  //   textIcon: '\uE790',
  //   type: 'Media',
  //   subtitle: 'Render a horizontal or vertical color gradient.',
  //   new: true,
  // },
  {
    key: 'Networking',
    component: NetworkExamplePage,
    textIcon: '\uE704',
    fluentIcon: <NetworkAdapter16Regular />,
    type: 'Status and Info',
    subtitle: 'Load resources from a remote URL.',
    new: true,
  },
  // {
  //   key: 'Permissions',
  //   component: PermissionsExamplePage,
  //   textIcon: '\uED2C',
  //   fluentIcon: <Password16Regular />,
  //   type: 'Status and Info',
  // },
  {
    key: 'Picker',
    component: PickerExamplePage,
    textIcon: '\uE7B8',
    imageIcon: require('../assets/ControlImages/ComboBox.png'),
    fluentIcon: <ListBar16Regular />,
    subtitle: 'A drop-down list of items a user can select from.',
    type: 'Basic Input',
  },
  {
    key: 'Popup',
    component: PopupExamplePage,
    textIcon: '\uE75A',
    imageIcon: require('../assets/ControlImages/Flyout.png'),
    subtitle: 'Displays content on top of existing content.',
    type: 'Dialogs & flyouts',
  },
  {
    key: 'Pressable',
    component: PressableExamplePage,
    textIcon: '\uE815',
    imageIcon: require('../assets/ControlImages/Button.png'),
    fluentIcon: <HandPoint16Regular />,
    subtitle:
      'A component that can detect various stages of press interactions on any of its defined children.',
    type: 'Basic Input',
  },
  {
    key: 'Print',
    component: PrintExamplePage,
    textIcon: '\uE749',
    fluentIcon: <Print16Regular />,
    type: 'Media',
  },
  {
    key: 'ProgressView',
    component: ProgressViewExamplePage,
    textIcon: '\uF16A',
    imageIcon: require('../assets/ControlImages/ProgressBar.png'),
    fluentIcon: <LineFlowDiagonalUpRight16Regular />,
    subtitle:
      "Shows the apps progress on a task, or that the app is performing ongoing work that doesn't block user interaction.",
    type: 'Basic Input',
  },
  {
    key: 'Radio Buttons',
    component: RadioButtonsExamplePage,
    textIcon: '\uECCB',
    imageIcon: require('../assets/ControlImages/RadioButtons.png'),
    fluentIcon: <RadioButton16Filled />,
    subtitle:
      'A control that allows the user to select a single option from a group of options.',
    type: 'Basic Input',
    new: true,
  },
  {
    key: 'ScrollView',
    component: ScrollViewExamplePage,
    textIcon: '\uEC8F',
    imageIcon: require('../assets/ControlImages/ScrollView.png'),
    fluentIcon: <ArrowBidirectionalUpDown16Regular />,
    subtitle:
      'A container control that lets the user pan and zoom its content.',
    type: 'Scrolling',
  },
  // {
  //   key: 'SensitiveInfo',
  //   component: SensitiveInfoExamplePage,
  //   textIcon: '\uE72E',
  //   fluentIcon: <LockClosed16Regular />,
  //   type: 'Status and Info',
  // },
  // {
  //   key: 'Slider',
  //   component: SliderExamplePage,
  //   textIcon: '\uE9E9',
  //   imageIcon: require('../assets/ControlImages/Slider.png'),
  //   subtitle:
  //     'A control that lets the user select from a range of values by moving a Thumb control along a track.',
  //   type: 'Basic Input',
  // },
  // {
  //   key: 'Sketch',
  //   component: SketchExamplePage,
  //   textIcon: '\uE790',
  //   type: 'Media',
  // },
  {
    key: 'Switch',
    component: SwitchExamplePage,
    textIcon: '\uF19E',
    imageIcon: require('../assets/ControlImages/ToggleSwitch.png'),
    fluentIcon: <ToggleLeft16Regular />,
    subtitle:
      'A button that can be switched between two states like a CheckBox.',
    type: 'Basic Input',
  },
  {
    key: 'Svg',
    component: SvgExamplePage,
    textIcon: '\uE734',
    fluentIcon: <Star16Regular />,
    subtitle: 'Rendering of vector graphics.',
    type: 'Media',
    new: true,
  },
  {
    key: 'Text',
    component: TextExamplePage,
    textIcon: '\uE8D2',
    imageIcon: require('../assets/ControlImages/TextBlock.png'),
    subtitle: 'A lightweight control for displaying small amounts of text.',
    fluentIcon: <Text16Regular />,
    type: 'Text',
  },
  {
    key: 'TextInput',
    component: TextInputExamplePage,
    textIcon: '\uE90A',
    imageIcon: require('../assets/ControlImages/TextBox.png'),
    fluentIcon: <Comment16Regular />,
    subtitle: 'A single-line or multi-line plain text field.',
    type: 'Text',
  },
  {
    key: 'TimePicker',
    component: TimePickerExamplePage,
    textIcon: '\uE823',
    imageIcon: require('../assets/ControlImages/TimePicker.png'),
    fluentIcon: <Timer16Regular />,
    subtitle: 'A configurable control that lets a user pick a time value.',
    type: 'Date & time',
  },
  // {
  //   key: 'TextToSpeech',
  //   component: TTSExamplePage,
  //   textIcon: '\uEC43',
  //   imageIcon: require('../assets/ControlImages/Sound.png'),
  //   type: 'Media',
  // },
  {
    key: 'TouchableHighlight',
    component: TouchableHighlightExamplePage,
    textIcon: '\uEDA4',
    fluentIcon: <HandPoint16Regular />,
    subtitle: 'A legacy wrapper for making views respond to touches.',
    type: 'Legacy',
  },
  {
    key: 'TouchableOpacity',
    component: TouchableOpacityExamplePage,
    textIcon: '\uEDA4',
    fluentIcon: <HandPoint16Regular />,
    subtitle: 'A legacy wrapper for making views respond to touches.',
    type: 'Legacy',
  },
  {
    key: 'TouchableWithoutFeedback',
    component: TouchableWithoutFeedbackExamplePage,
    textIcon: '\uEDA4',
    fluentIcon: <HandPoint16Regular />,
    subtitle:
      'A legacy wrapper for making views respond to touches without any visual feedback (not recommended).',
    type: 'Legacy',
  },
  // {
  //   key: 'TrackPlayer',
  //   component: TrackPlayerExamplePage,
  //   textIcon: '\uEC4F',
  //   imageIcon: require('../assets/ControlImages/Sound.png'),
  //   type: 'Media',
  // },
  {
    key: 'View',
    component: ViewExamplePage,
    textIcon: '\uECA5',
    imageIcon: require('../assets/ControlImages/Canvas.png'),
    fluentIcon: <ContentView16Regular />,
    subtitle: 'The most fundamental component for building a UI',
    type: 'Layout',
  },
  {
    key: 'WebView',
    component: WebViewExamplePage,
    textIcon: '\uE774',
    imageIcon: require('../assets/ControlImages/WebView.png'),
    fluentIcon: <Globe16Regular />,
    subtitle:
      'A Microsoft Edge (Chromium) based control that hosts HTML content in an app.',
    type: 'Media',
  },
  // {
  //   key: 'WindowsHello',
  //   component: WindowsHelloExamplePage,
  //   textIcon: '\uE890',
  //   fluentIcon: <Eye16Regular />,
  //   type: 'Status and Info',
  // },
  {
    key: 'VirtualizedList',
    component: VirtualizedListExamplePage,
    textIcon: '\uE8A4',
    imageIcon: require('../assets/ControlImages/ListView.png'),
    fluentIcon: <ListBar16Regular />,
    subtitle:
      'The base implementation for FlatList and SectionList, which can be used as alternative if you need more flexibility.',
    type: 'Collections',
  },
  // {
  //   key: 'Xaml',
  //   component: XamlExamplePage,
  //   textIcon: '\uE70F',
  //   subtitle: 'Directly access any native XAML control.',
  //   type: 'Layout',
  //   recentlyUpdated: true,
  // },
  {
    key: 'LottieAnimations',
    component: LottieAnimationsExamplePage,
    textIcon: '\uE78A',
    imageIcon: require('../assets/ControlImages/AnimatedVisualPlayer.png'),
    fluentIcon: <MoviesAndTv16Regular />,
    type: 'Media',
    subtitle: 'An element to render and control playback of motion graphics.',
    new: true,
  },
  ...RNGalleryCategories.map((category) => ({
    key: `Category: ${category.label}`,
    component: ComponentListPage,
    textIcon: category.icon,
    type: '',
  })),
];

export default RNGalleryList;
export {RNGalleryCategories};
