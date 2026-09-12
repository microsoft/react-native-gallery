/**
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import {act, create} from 'react-test-renderer';
import {TouchableWithoutFeedbackExamplePage} from '../src/examples/TouchableWithoutFeedbackExamplePage';

const mockTouchableChildTypes = new Map<string, React.ElementType>();

jest.mock('react-native-windows', () => {
  const ReactModule = require('react');

  return {
    AppTheme: {
      isHighContrast: false,
      currentHighContrastColors: {},
      addListener: () => ({remove: () => {}}),
    },
    TouchableWithoutFeedback: ReactModule.forwardRef(
      ({children, ...props}: any, ref: any) => {
        mockTouchableChildTypes.set(props.accessibilityLabel, children.type);
        return ReactModule.cloneElement(
          ReactModule.Children.only(children),
          {...props, ref},
        );
      },
    ),
  };
});

test('uses View-backed targets for controls that receive keyboard focus', async () => {
  mockTouchableChildTypes.clear();

  await act(async () => {
    create(<TouchableWithoutFeedbackExamplePage />);
  });

  const focusableLabels = [
    'simple example TouchableWithoutFeedback',
    'Decrease counter. Current value is 0',
    'Increase counter. Current value is 0',
  ];

  for (const accessibilityLabel of focusableLabels) {
    expect(mockTouchableChildTypes.get(accessibilityLabel)).toBe(View);
  }
});
