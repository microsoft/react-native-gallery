/**
 * @format
 */

import React from 'react';
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import {PressableExamplePage} from '../src/examples/PressableExamplePage';

jest.mock('../src/components/Example', () => ({Example: 'Example'}));
jest.mock('../src/components/Page', () => ({Page: 'Page'}));
jest.mock('../src/Navigation', () => ({
  useTheme: () => ({
    colors: {
      background: 'white',
      border: 'gray',
      primary: 'blue',
      text: 'black',
    },
  }),
}));
jest.mock('../src/hooks/usePageFocusManagement', () => ({
  usePageFocusManagement: () => ({current: null}),
}));

const textContent = (node: ReactTestInstance): string =>
  node.children
    .map(child => (typeof child === 'string' ? child : textContent(child)))
    .join('');

test('keeps Pressable names and hints synchronized with their visible state', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<PressableExamplePage />);
  });

  const findSimplePressable = () =>
    tree.root.find(
      (node) =>
        node.props.accessibilityRole === 'button' &&
        node.props.accessibilityHint?.includes('change text from'),
    );

  expect(findSimplePressable().props.accessibilityLabel).toBe('Press Me');
  expect(findSimplePressable().props.accessibilityHint).toBe(
    'Tap to change text from Press Me to Pressed',
  );
  expect(textContent(findSimplePressable())).toBe('Press Me');

  await act(async () => {
    findSimplePressable().props.onPress();
  });

  expect(findSimplePressable().props.accessibilityLabel).toBe('Pressed');
  expect(findSimplePressable().props.accessibilityHint).toBe(
    'Tap to change text from Pressed to Press Me',
  );
  expect(textContent(findSimplePressable())).toBe('Pressed!');

  await act(async () => {
    findSimplePressable().props.onAccessibilityTap();
  });

  expect(findSimplePressable().props.accessibilityLabel).toBe('Press Me');
  expect(findSimplePressable().props.accessibilityHint).toBe(
    'Tap to change text from Press Me to Pressed',
  );
  expect(textContent(findSimplePressable())).toBe('Press Me');
});

test('exposes counter and feedback changes through accessible names', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<PressableExamplePage />);
  });

  const findCounterPressable = () =>
    tree.root.find(
      (node) =>
        node.props.accessibilityRole === 'button' &&
        node.props.accessibilityHint === 'Tap to increase the counter',
    );
  const findFeedbackPressable = () =>
    tree.root.find(
      (node) =>
        node.props.accessibilityRole === 'button' &&
        node.props.accessibilityHint?.includes('different events'),
    );

  await act(async () => {
    findCounterPressable().props.onPress();
  });
  expect(findCounterPressable().props.accessibilityLabel).toBe(
    'Pressed 1 time',
  );
  expect(textContent(findCounterPressable())).toBe('Pressed 1 time!');

  await act(async () => {
    findCounterPressable().props.onAccessibilityTap();
  });
  expect(findCounterPressable().props.accessibilityLabel).toBe(
    'Pressed 2 times',
  );
  expect(textContent(findCounterPressable())).toBe('Pressed 2 times!');

  await act(async () => {
    findFeedbackPressable().props.onAccessibilityTap();
  });
  expect(findFeedbackPressable().props.accessibilityLabel).toBe(
    'Most recent event: press',
  );
  expect(textContent(findFeedbackPressable())).toBe('Most recent event: press');
});
