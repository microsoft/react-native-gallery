/**
 * @format
 */

import React from 'react';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {PressableExamplePage} from '../src/examples/PressableExamplePage';

// Increase timeout for CI agents which may be slower
jest.setTimeout(30000);

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

  await act(async () => {
    findSimplePressable().props.onPress();
  });

  expect(findSimplePressable().props.accessibilityLabel).toBe('Pressed');
  expect(findSimplePressable().props.accessibilityHint).toBe(
    'Tap to change text from Pressed to Press Me',
  );

  await act(async () => {
    findSimplePressable().props.onPress();
  });

  expect(findSimplePressable().props.accessibilityLabel).toBe('Press Me');
  expect(findSimplePressable().props.accessibilityHint).toBe(
    'Tap to change text from Press Me to Pressed',
  );
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

  await act(async () => {
    findCounterPressable().props.onPress();
  });
  expect(findCounterPressable().props.accessibilityLabel).toBe(
    'Pressed 2 times',
  );

  await act(async () => {
    findFeedbackPressable().props.onAccessibilityTap();
  });
  expect(findFeedbackPressable().props.accessibilityLabel).toBe(
    'Most recent event: press',
  );
});
