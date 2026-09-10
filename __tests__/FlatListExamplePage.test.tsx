/**
 * @format
 */

import React from 'react';
import {FlatList} from 'react-native';
import {
  act,
  create,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer';
import {FlatListExamplePage} from '../src/examples/FlatListExamplePage';

const mockPageFocusRef = {
  current: null as any,
};

jest.mock('../src/hooks/usePageFocusManagement', () => ({
  usePageFocusManagement: () => mockPageFocusRef,
}));

test('uses the first list item as the page focus target', async () => {
  mockPageFocusRef.current = null;
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<FlatListExamplePage />);
  });

  const containsFocusTarget = (node: ReactTestInstance) =>
    node.instance === mockPageFocusRef.current ||
    node.findAll(child => child.instance === mockPageFocusRef.current).length >
      0;

  const firstItems = tree.root.findAll(
    node => node.props.accessibilityLabel === 'Item 1',
  );
  const copyButtons = tree.root.findAll(
    node => node.props.accessibilityLabel === 'Copy to clipboard',
  );
  const flatLists = tree.root.findAllByType(FlatList);

  expect(firstItems.some(containsFocusTarget)).toBe(true);
  expect(flatLists.map(containsFocusTarget)).toEqual([
    true,
    false,
    false,
    false,
    false,
  ]);
  expect(copyButtons.some(containsFocusTarget)).toBe(false);
});
