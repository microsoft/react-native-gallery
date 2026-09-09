/**
 * @format
 */

import React from 'react';
import {act, create} from 'react-test-renderer';
import {BackButton} from '../src/components/BackButton';

let mockCanGoBack = false;

jest.mock('../src/Navigation', () => ({
  useNavigation: () => ({navigate: jest.fn()}),
}));
jest.mock('../src/hooks/useNavigationHistory', () => ({
  useNavigationHistory: () => ({
    canGoBack: mockCanGoBack,
    goBack: jest.fn(() => 'Home'),
    pushRoute: jest.fn(),
  }),
}));

describe('BackButton', () => {
  beforeEach(() => {
    mockCanGoBack = false;
  });

  test('is skipped by keyboard focus when navigation history is empty', async () => {
    let tree;
    await act(async () => {
      tree = create(<BackButton />);
    });

    const button = tree.root.find(
      node => node.props.accessibilityLabel === 'Back',
    );
    expect(button.props.disabled).toBe(true);
    expect(button.props.focusable).toBe(false);
  });

  test('is keyboard focusable when navigation history is available', async () => {
    mockCanGoBack = true;

    let tree;
    await act(async () => {
      tree = create(<BackButton />);
    });

    const button = tree.root.find(
      node => node.props.accessibilityLabel === 'Back',
    );
    expect(button.props.disabled).toBe(false);
    expect(button.props.focusable).toBe(true);
  });
});
