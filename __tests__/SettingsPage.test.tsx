/**
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import {SettingsPage} from '../src/SettingsPage';

const mockPageFocusRef = {
  current: null as any,
};
let receivedNavigation: any;

jest.mock('../src/hooks/usePageFocusManagement', () => ({
  usePageFocusManagement: (navigation: any) => {
    receivedNavigation = navigation;
    return mockPageFocusRef;
  },
}));

test('uses the Settings heading as the page focus target', async () => {
  mockPageFocusRef.current = null;
  receivedNavigation = undefined;
  const navigation = {
    parameters: {
      shouldFocus: true,
      focusTimestamp: 1,
    },
  };
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<SettingsPage navigation={navigation} />);
  });

  const settingsHeading = tree.root.find(
    (node: ReactTestInstance) =>
      node.type === View &&
      node.props.accessibilityRole === 'header' &&
      node.props.accessibilityLevel === 1,
  );
  const settingsHeadingText = settingsHeading.findByType(Text);

  expect(receivedNavigation).toBe(navigation);
  expect(settingsHeading.props.accessibilityLabel).toBe('Settings');
  expect(settingsHeading.props.focusable).toBe(true);
  expect(mockPageFocusRef.current).toBe(settingsHeading.instance);
  expect(settingsHeadingText.props.accessible).toBe(false);
  expect(settingsHeadingText.props.children).toBe('Settings');
});
