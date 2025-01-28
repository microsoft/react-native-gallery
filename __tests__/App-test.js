import React from 'react';
import {create, act} from 'react-test-renderer';
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
import {ClipboardExamplePage} from '../src/examples/ClipboardExamplePage';
import {ConfigExamplePage} from '../src/examples/ConfigExamplePage';
import {DatePickerExamplePage} from '../src/examples/DatePickerExamplePage';
import {TimePickerExamplePage} from '../src/examples/TimePickerExamplePage';
// Issue: Usage of UIManager.getViewManangerConfig returning undefined
//import {SketchExamplePage} from '../src/examples/SketchExamplePage';
import {SliderExamplePage} from '../src/examples/SliderExamplePage';
//import {PermissionsExamplePage} from '../src/examples/PermissionsExamplePage';
import {PickerExamplePage} from '../src/examples/PickerExamplePage';
import {PrintExamplePage} from '../src/examples/PrintExamplePage';
import {DeviceInfoExamplePage} from '../src/examples/DeviceInfoExamplePage';
import {TTSExamplePage} from '../src/examples/TTSExamplePage';
import {WebViewExamplePage} from '../src/examples/WebViewExamplePage';
import {SensitiveInfoExamplePage} from '../src/examples/SensitiveInfoExamplePage';
import {ProgressViewExamplePage} from '../src/examples/ProgressViewExamplePage';
import {XamlExamplePage} from '../src/examples/XamlExamplePage';
// Issue: Usage of UIManager.getViewManangerConfig returning undefined
//import {TrackPlayerExamplePage} from '../src/examples/TrackPlayerExamplePage';
import {WindowsHelloExamplePage} from '../src/examples/WindowsHelloExamplePage';
import {ExpanderExamplePage} from '../src/examples/ExpanderExamplePage';
// https://github.com/microsoft/react-native-gallery/issues/420
// Unable to import: {export * from './types'; SyntaxError: Unexpected token 'export'
//import {RadioButtonsExamplePage} from '../src/examples/RadioButtonsExamplePage';
import {NetworkExamplePage} from '../src/examples/NetworkExamplePage';
import {SvgExamplePage} from '../src/examples/SvgExamplePage';
import {View} from 'react-native';

jest.useFakeTimers();

function Control() {
  return <View />;
}

test('Control', () => {
  const tree = create(<Control />).toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button Example Page', () => {
  const tree = create(<ButtonExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('CheckBox Example Page', () => {
  const tree = create(<CheckBoxExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Clipboard Example Page', () => {
  const tree = create(<ClipboardExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Config Example Page', () => {
  const tree = create(<ConfigExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('DatePicker Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<DatePickerExamplePage />).toJSON();
  });
  expect(tree).toMatchSnapshot();
});

test('DeviceInfo Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<DeviceInfoExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Expander Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<ExpanderExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

// Issue: Tests hang when this test is enabled
/*test('Permissions Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<PermissionsExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});*/

test('FlatList Example Page', () => {
  const tree = create(<FlatListExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Flyout Example Page', () => {
  const tree = create(<FlyoutExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Image Example Page', () => {
  const tree = create(<ImageExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Networking Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<NetworkExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Picker Example Page', () => {
  const tree = create(<PickerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Popup Example Page', () => {
  const tree = create(<PopupExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Pressable Example Page', () => {
  const tree = create(<PressableExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Print Example Page', () => {
  const tree = create(<PrintExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('ProgressView Example Page', () => {
  const tree = create(<ProgressViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('Radio Buttons Example Page', () => {
  const tree = create(<RadioButtonsExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('ScrollView Example Page', () => {
  const tree = create(<ScrollViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SensitiveInfo Example Page', () => {
  const tree = create(<SensitiveInfoExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('SketchCanvas Example Page', () => {
  const tree = create(<SketchExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('Slider Example Page', () => {
  const tree = create(<SliderExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('SVG Example Page', () => {
  const tree = create(<SvgExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Switch Example Page', () => {
  const tree = create(<SwitchExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Text Example Page', () => {
  const tree = create(<TextExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextInput Example Page', () => {
  const tree = create(<TextInputExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TimePicker Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<TimePickerExamplePage />).toJSON();
  });
  expect(tree).toMatchSnapshot();
});

test('TextToSpeech Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TTSExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('TouchableHighlight Example Page', () => {
  const tree = create(<TouchableHighlightExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TouchableOpacity Example Page', () => {
  const tree = create(<TouchableOpacityExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

/*test('TrackPlayer Example Page', () => {
  const tree = create(<TrackPlayerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('View Example Page', () => {
  const tree = create(<ViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('WebView Example Page', () => {
  const tree = create(<WebViewExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Hello Example Page', () => {
  const tree = create(<WindowsHelloExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Xaml Example Page', () => {
  const tree = create(<XamlExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
