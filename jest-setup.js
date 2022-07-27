/* eslint-disable no-undef */
import {NativeModules} from 'react-native';
jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('react-native-device-info', () =>
  require('react-native-device-info/jest/react-native-device-info-mock'),
);

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
