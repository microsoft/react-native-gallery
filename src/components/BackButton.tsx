'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  PlatformColor,
  Pressable,
  Dimensions,
} from 'react-native';
import {useNavigation} from '../Navigation';
import {useNavigationHistory} from '../hooks/useNavigationHistory';

const createStyles = (windowWidth: number) => {
  const isSmallScreen = windowWidth < 600;

  return StyleSheet.create({
    button: {
      margin: isSmallScreen ? 3 : 5,
      height: isSmallScreen ? 30 : 34,
      width: isSmallScreen ? 34 : 38,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: isSmallScreen ? 14 : 16,
    },
  });
};

/**
 * A theme-aware back button that navigates through the custom history stack.
 * When history is exhausted, it navigates to Home.
 * Matches the existing nav-bar button style used by the hamburger menu.
 */
export function BackButton() {
  const navigation = useNavigation();
  const {goBack, canGoBack} = useNavigationHistory();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(
    Dimensions.get('window').width,
  );

  React.useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindowWidth(window.width);
    });
    return () => subscription?.remove();
  }, []);

  const styles = createStyles(windowWidth);

  const handlePress = () => {
    const target = goBack();
    navigation.navigate(target, {});
  };

  // Dynamic background: mirrors the hover/press pattern in DrawerListItem (App.tsx)
  const dynamicBackground = isPressed
    ? PlatformColor('ControlAltFillColorSecondaryBrush')
    : isHovered
      ? PlatformColor('ControlAltFillColorTertiaryBrush')
      : 'transparent';

  // Icon color: use system foreground, dim when disabled
  const iconColor = canGoBack
    ? PlatformColor('TextControlForeground')
    : PlatformColor('TextFillColorDisabledBrush');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Back"
      accessibilityHint={
        canGoBack ? 'Go back to previous page' : 'No history to go back'
      }
      accessibilityState={{disabled: !canGoBack}}
      style={[styles.button, {backgroundColor: dynamicBackground}]}
      onPress={handlePress}
      onAccessibilityTap={handlePress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      disabled={!canGoBack}>
      {/* E72B = ChevronLeft / Back arrow in Segoe MDL2 Assets */}
      <Text style={[styles.icon, {color: iconColor}]}>{'\uE72B'}</Text>
    </Pressable>
  );
}
