import React, {createContext, useContext} from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';

// The resolved theme, light or dark
export const ThemeContext = createContext<'light' | 'dark'>('light');
if (__DEV__) {
  ThemeContext.displayName = 'ThemeContext';
}

// This will be system if the theme should follow the system, or light/dark if the user is overriding the default theme
export const RawThemeContext = createContext<ThemeMode>('system');
if (__DEV__) {
  ThemeContext.displayName = 'RawThemeContext';
}

export const ThemeSetterContext = createContext((_theme: ThemeMode) => {});
if (__DEV__) {
  ThemeSetterContext.displayName = 'ThemeSetterContext';
}

// Navigation theme context to replace @react-navigation/native
const NavigationThemeContext = createContext<any>(null);

export const ThemeProvider: React.FC<{theme: any; children: React.ReactNode}> = ({
  theme,
  children,
}) => {
  return (
    <NavigationThemeContext.Provider value={theme}>
      {children}
    </NavigationThemeContext.Provider>
  );
};

// Hook to replace useTheme from @react-navigation/native
export const useTheme = () => {
  const theme = useContext(NavigationThemeContext);
  if (!theme) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return theme;
};
