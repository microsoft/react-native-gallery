/**
 * @format
 */

import * as React from 'react';
import {create, act} from 'react-test-renderer';
import {ButtonExamplePage} from '../src/examples/ButtonExamplePage';
import {ClipboardExamplePage} from '../src/examples/ClipboardExamplePage';
import {ImageExamplePage} from '../src/examples/ImageExamplePage';
import {PressableExamplePage} from '../src/examples/PressableExamplePage';
import {ScrollViewExamplePage} from '../src/examples/ScrollViewExample';
import {SwitchExamplePage} from '../src/examples/SwitchExamplePage';
import {TextExamplePage} from '../src/examples/TextExamplePage';
import {TextInputExamplePage} from '../src/examples/TextInputExamplePage';
import {TouchableHighlightExamplePage} from '../src/examples/TouchableHighlightExamplePage';
import {TouchableOpacityExamplePage} from '../src/examples/TouchableOpacityExamplePage';
import {ViewExamplePage} from '../src/examples/ViewExamplePage';
import {VirtualizedListExamplePage} from '../src/examples/VirtualizedListExamplePage';
import {View} from 'react-native';

jest.useFakeTimers();

// Increase timeout for CI agents which may be slower
jest.setTimeout(30000);

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

test('Clipboard Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ClipboardExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

// FlatList snapshot is too large to serialize
/*test('FlatList Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<FlatListExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});*/

test('Image Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ImageExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

// Modal uses native components unavailable in test renderer
/*test('Modal Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ModalExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});*/

test('Pressable Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<PressableExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('ScrollView Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ScrollViewExamplePage />);
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

// TouchableWithoutFeedback uses native components unavailable in test renderer
/*test('TouchableWithoutFeedback Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<TouchableWithoutFeedbackExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});*/

test('View Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<ViewExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});

test('VirtualizedList Example Page', async () => {
  let tree;
  await act(async () => {
    tree = create(<VirtualizedListExamplePage />);
  });
  expect(tree.toJSON()).toMatchSnapshot();
});
