/* eslint-disable no-undef */
import {NativeModules} from 'react-native';

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
jest.mock('@react-native-clipboard/clipboard', () =>
  require('@react-native-clipboard/clipboard/jest/clipboard-mock'),
);

process.env.NODE_ENV = 'test';

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
