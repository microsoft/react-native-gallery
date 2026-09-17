/**
 * @format
 */

import React from 'react';
import {VirtualizedList} from 'react-native';
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import {VirtualizedListExamplePage} from '../src/examples/VirtualizedListExamplePage';

const mockPageFocusRef = {
  current: null as any,
};

jest.mock('../src/hooks/usePageFocusManagement', () => ({
  usePageFocusManagement: () => mockPageFocusRef,
}));

test('uses the first item in the first VirtualizedList as the page focus target', async () => {
  mockPageFocusRef.current = null;
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<VirtualizedListExamplePage />);
  });

  const containsFocusTarget = (node: ReactTestInstance) =>
    node.instance === mockPageFocusRef.current ||
    node.findAll(child => child.instance === mockPageFocusRef.current).length >
      0;

  const firstItems = tree.root.findAll(
    node => node.props.accessibilityLabel === 'Item 1',
  );
  const virtualizedLists = tree.root.findAllByType(VirtualizedList);

  expect(firstItems.some(containsFocusTarget)).toBe(true);
  expect(virtualizedLists.map(containsFocusTarget)).toEqual([
    true,
    false,
    false,
  ]);
});

test('provides set position metadata for single-selection items', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<VirtualizedListExamplePage />);
  });

  const singleSelectionList = tree.root.findAllByType(VirtualizedList)[1];
  const item2 = singleSelectionList.find(
    node =>
      node.props.accessibilityLabel === 'Item 2' &&
      node.props.accessibilityRole === 'listitem',
  );

  expect(item2.props.accessibilityPosInSet).toBe(2);
  expect(item2.props.accessibilitySetSize).toBe(10);
});
