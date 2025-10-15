module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-windows)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  moduleNameMapper: {
    '^react-native-windows$': '<rootDir>/__mocks__/react-native-windows.js',
  },
};
