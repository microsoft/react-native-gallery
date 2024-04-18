/* eslint-disable no-undef */
import {NativeModules} from 'react-native';
jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);
jest.mock('@react-native-clipboard/clipboard', () =>
  require('@react-native-clipboard/clipboard/jest/clipboard-mock'),
);

process.env.NODE_ENV = 'test';

// Workaround for https://github.com/react-native-webview/react-native-webview/issues/2934
jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => {
  const turboModuleRegistry = jest.requireActual(
    'react-native/Libraries/TurboModule/TurboModuleRegistry',
  );
  return {
    ...turboModuleRegistry,
    getEnforcing: (name) => {
      if (name === 'RNCWebView') {
        return null;
      }
      return turboModuleRegistry.getEnforcing(name);
    },
  };
});

NativeModules.RNDateTimePickerManager = {};

NativeModules.RNDateTimePickerManager.getDefaultDisplayValue = jest.fn(() =>
  Promise.resolve({
    determinedDisplayValue: 'spinner',
  }),
);

NativeModules.TextToSpeech = {};

NativeModules.TextToSpeech.voices = jest.fn(() =>
  Promise.resolve({
    voices: [],
  }),
);

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useNavigationState: jest.fn(),
    useIsFocused: () => {
      return true;
    },
  };
});
