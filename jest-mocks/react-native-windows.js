// Mock for react-native-windows when running Jest tests.
// RNW 1.0.0 is a NuGet-based package with no JS exports;
// these stubs satisfy imports used by HighContrastTheme and useHighContrastState.

const highContrastColors = {
  HighlightColor: '#0000FF',
  WindowColor: '#FFFFFF',
  WindowTextColor: '#000000',
  ButtonTextColor: '#000000',
  HotlightColor: '#0000FF',
};

module.exports = {
  AppTheme: {
    isHighContrast: false,
    currentHighContrastColors: highContrastColors,
    addListener: () => ({remove: () => {}}),
  },
};
