/**
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {
  AppTitleBar,
  getAppTitleBarHeight,
} from '../src/components/AppTitleBar';

test('uses the tall caption only when text scaling is enabled', () => {
  expect(getAppTitleBarHeight(false)).toBe(32);
  expect(getAppTitleBarHeight(true)).toBe(48);
});

test('allows the visible app title to follow the system text scale', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<AppTitleBar />);
  });

  const title = tree.root.findByType(Text);

  expect(title.props.children).toBe('React Native Gallery');
  expect(title.props.allowFontScaling).toBe(true);
  expect(title.props.accessibilityRole).toBe('header');
});

test('updates the title bar height when the rendered title scale changes', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<AppTitleBar />);
  });

  const title = tree.root.findByType(Text);
  const getContainerHeight = () =>
    StyleSheet.flatten(tree.root.findByType(View).props.style).height;

  await act(async () => {
    title.props.onLayout({
      nativeEvent: {layout: {height: 16}},
    });
  });
  expect(getContainerHeight()).toBe(32);

  await act(async () => {
    title.props.onLayout({
      nativeEvent: {layout: {height: 32}},
    });
  });
  expect(getContainerHeight()).toBe(48);

  await act(async () => {
    title.props.onLayout({
      nativeEvent: {layout: {height: 16}},
    });
  });
  expect(getContainerHeight()).toBe(32);
});
