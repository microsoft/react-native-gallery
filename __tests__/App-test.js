import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonExamplePage} from '../src/examples/ButtonExamplePage';
import {TextExamplePage} from '../src/examples/TextExamplePage';
import {TextInputExamplePage} from '../src/examples/TextInputExamplePage';
import {TouchableHighlightExamplePage} from '../src/examples/TouchableHighlightExamplePage';
import {TouchableOpacityExamplePage} from '../src/examples/TouchableOpacityExamplePage';
import {SwitchExamplePage} from '../src/examples/SwitchExamplePage';
import {ViewExamplePage} from '../src/examples/ViewExamplePage';
import {ImageExamplePage} from '../src/examples/ImageExamplePage';
import {PressableExamplePage} from '../src/examples/PressableExamplePage';
import {FlatListExamplePage} from '../src/examples/FlatListExamplePage';
import {ScrollViewExamplePage} from '../src/examples/ScrollViewExample';
import {PopupExamplePage} from '../src/examples/PopupExamplePage';
import {FlyoutExamplePage} from '../src/examples/FlyoutExamplePage';
import {CheckBoxExamplePage} from '../src/examples/CheckBoxExamplePage';
import {ConfigExamplePage} from '../src/examples/ConfigExamplePage';
import {DatePickerExamplePage} from '../src/examples/DatePickerExamplePage';
import {TimePickerExamplePage} from '../src/examples/TimePickerExamplePage';
//import {SketchExamplePage} from '../src/examples/SketchExamplePage';
import {SliderExamplePage} from '../src/examples/SliderExamplePage';
//import {PermissionsExamplePage} from '../src/examples/PermissionsExamplePage';
import {PickerExamplePage} from '../src/examples/PickerExamplePage';
import {PrintExamplePage} from '../src/examples/PrintExamplePage';
//import {DeviceInfoExamplePage} from '../src/examples/DeviceInfoExamplePage';
//import {TTSExamplePage} from '../src/examples/TTSExamplePage';
import {WebViewExamplePage} from '../src/examples/WebViewExamplePage';
import {SensitiveInfoExamplePage} from '../src/examples/SensitiveInfoExamplePage';
import {ProgressViewExamplePage} from '../src/examples/ProgressViewExamplePage';
import {XamlExamplePage} from '../src/examples/XamlExamplePage';
//import {TrackPlayerExamplePage} from '../src/examples/TrackPlayerExamplePage';
import {WindowsHelloExamplePage} from '../src/examples/WindowsHelloExamplePage';
import {ExpanderExamplePage} from '../src/examples/ExpanderExamplePage';

test('Button Example Page', () => {
  const tree = renderer.create(<ButtonExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CheckBox Example Page', () => {
  const tree = renderer.create(<CheckBoxExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Config Example Page', () => {
  const tree = renderer.create(<ConfigExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DatePicker Example Page', () => {
  const tree = renderer.create(<DatePickerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Expander Example Page', () => {
  const tree = renderer.create(<ExpanderExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('DeviceInfo Example Page', () => {
  const tree = renderer.create(<DeviceInfoExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('FlatList Example Page', () => {
  const tree = renderer.create(<FlatListExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Flyout Example Page', () => {
  const tree = renderer.create(<FlyoutExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Image Example Page', () => {
  const tree = renderer.create(<ImageExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('Permissions Example Page', () => {
  const tree = renderer.create(<PermissionsExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('Picker Example Page', () => {
  const tree = renderer.create(<PickerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popup Example Page', () => {
  const tree = renderer.create(<PopupExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pressable Example Page', () => {
  const tree = renderer.create(<PressableExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Print Example Page', () => {
  const tree = renderer.create(<PrintExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ProgressView Example Page', () => {
  const tree = renderer.create(<ProgressViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ScrollView Example Page', () => {
  const tree = renderer.create(<ScrollViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SensitiveInfo Example Page', () => {
  const tree = renderer.create(<SensitiveInfoExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('SketchCanvas Example Page', () => {
  const tree = renderer.create(<SketchExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('Slider Example Page', () => {
  const tree = renderer.create(<SliderExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Switch Example Page', () => {
  const tree = renderer.create(<SwitchExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Text Example Page', () => {
  const tree = renderer.create(<TextExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextInput Example Page', () => {
  const tree = renderer.create(<TextInputExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TimePicker Example Page', () => {
  const tree = renderer.create(<TimePickerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('TextToSpeech Example Page', () => {
  const tree = renderer.create(<TTSExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('TouchableHighlight Example Page', () => {
  const tree = renderer.create(<TouchableHighlightExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TouchableOpacity Example Page', () => {
  const tree = renderer.create(<TouchableOpacityExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('TrackPlayer Example Page', () => {
  const tree = renderer.create(<TrackPlayerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('View Example Page', () => {
  const tree = renderer.create(<ViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('WebView Example Page', () => {
  const tree = renderer.create(<WebViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('WindowsHello Example Page', () => {
  const tree = renderer.create(<WindowsHelloExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Xaml Example Page', () => {
  const tree = renderer.create(<XamlExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
