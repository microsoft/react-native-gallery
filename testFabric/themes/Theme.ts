import {createContext} from 'react';

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
