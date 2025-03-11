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

test('Control', async () => {
  let tree;
  await act(async () => {
    tree = create(<Control />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
test('Button Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ButtonExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('CheckBox Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<CheckBoxExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Clipboard Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ClipboardExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Config Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ConfigExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
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
});

// Issue: https://github.com/microsoft/react-native-windows/issues/13436
test('FlatList Example Page', async() => {
  let tree;
  await act(() => {
    tree = create(<FlatListExamplePage />);
  });
  expect(tree).toMatchSnapshot();
});
*/

test('Flyout Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<FlyoutExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Image Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<ImageExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Networking Example Page', async () => {
  let tree;
  await act(() => {
    tree = create(<NetworkExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Picker Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<PickerExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Popup Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<PopupExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Pressable Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<PressableExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Print Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<PrintExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('ProgressView Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ProgressViewExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

/*test('Radio Buttons Example Page', () => {
  const tree = create(<RadioButtonsExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('ScrollView Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ScrollViewExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('SensitiveInfo Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<SensitiveInfoExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

/*test('SketchCanvas Example Page', () => {
  const tree = create(<SketchExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('Slider Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<SliderExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('SVG Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<SvgExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Switch Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<SwitchExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Text Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TextExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('TextInput Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TextInputExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
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

test('TouchableHighlight Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TouchableHighlightExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('TouchableOpacity Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TouchableOpacityExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

/*test('TrackPlayer Example Page', () => {
  const tree = create(<TrackPlayerExamplePage />).toJSON();
  expect(tree).toMatchSnapshot();
});*/

test('View Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ViewExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('WebView Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<WebViewExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Hello Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<WindowsHelloExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('Xaml Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<XamlExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
