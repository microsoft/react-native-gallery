/**
 * @format
 */

import React from 'react';
import {AccessibilityInfo, View} from 'react-native';
import {act, create} from 'react-test-renderer';
import {ScreenWrapper} from '../src/components/ScreenWrapper';

test('announces when the navigation menu is expanded', () => {
  const announceSpy = jest
    .spyOn(AccessibilityInfo, 'announceForAccessibility')
    .mockImplementation(() => {});

  let tree;
  act(() => {
    tree = create(
      <ScreenWrapper>
        <View />
      </ScreenWrapper>,
    );
  });

  const navigationMenu = tree.root.findByProps({
    accessibilityLabel: 'Navigation menu',
  });

  act(() => {
    navigationMenu.props.onPress();
  });

  expect(announceSpy).toHaveBeenCalledWith('Navigation menu expanded');
});
