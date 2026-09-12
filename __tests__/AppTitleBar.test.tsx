/**
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {
  AppTitleBar,
  getAppTitleBarHeight,
} from '../src/components/AppTitleBar';

test('uses the tall caption only when text scaling is enabled', () => {
  expect(getAppTitleBarHeight(1)).toBe(32);
  expect(getAppTitleBarHeight(2)).toBe(48);
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
