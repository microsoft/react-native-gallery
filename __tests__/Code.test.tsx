/**
 * @format
 */

import React from 'react';
import {act, create, ReactTestRenderer} from 'react-test-renderer';
import {Code} from '../src/components/Code';

test('does not add selectable source text to the keyboard tab order', async () => {
  let tree!: ReactTestRenderer;

  await act(async () => {
    tree = create(<Code>{'<Button title="Button" />'}</Code>);
  });

  expect(tree.root.findAll(node => node.props.selectable === true)).toHaveLength(
    0,
  );
});
