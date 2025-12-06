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
    useTheme: () => ({
      colors: {
        primary: '#007AFF',
        background: '#F2F2F7',
        card: '#FFFFFF',
        text: '#000000',
        border: '#C6C6C8',
        notification: '#FF3B30',
      },
    }),
  };
});

// For NetworkExamplePage.tsx
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        title: 'The Basics - Networking',
        description: 'Your app fetched this from a remote endpoint!',
        movies: [
          {
            id: '1',
            title: 'Star Wars',
            releaseYear: '1977',
          },
          {
            id: '2',
            title: 'Back to the Future',
            releaseYear: '1985',
          },
          {
            id: '3',
            title: 'The Matrix',
            releaseYear: '1999',
          },
          {
            id: '4',
            title: 'Inception',
            releaseYear: '2010',
          },
          {
            id: '5',
            title: 'Interstellar',
            releaseYear: '2014',
          },
        ],
      }),
  }),
);
