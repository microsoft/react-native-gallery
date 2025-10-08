import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  PlatformColor,
  AccessibilityInfo,
} from 'react-native';
import {useNavigation, DrawerActions, getDrawerStatusFromState} from '../Navigation';
import {AccessibilityNavigationHelper} from './AccessibilityNavigationHelper';

const createStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: PlatformColor('Background'),
    },
    navBar: {
      backgroundColor: PlatformColor('Background'),
      width: 48,
      height: '100%',
      paddingBottom: 20,
    },
    navItem: {
      flexGrow: 1,
      flexShrink: 1,
      height: '100%',
      alignSelf: 'stretch',
      borderTopLeftRadius: 8,
      borderColor: 'rgba(233, 233, 233, 0.47)',
      borderLeftWidth: 1,
    },
    insetNavItem: {
      paddingLeft: 36,
    },
    menu: {
      margin: 5,
      height: 34,
      width: 38,
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    icon: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
      color: PlatformColor('TextControlForeground'),
    },
  });

type ScreenWrapperProps = React.PropsWithChildren<{
  doNotInset?: boolean;
}>;
export function ScreenWrapper({
  children,
  doNotInset,
}: ScreenWrapperProps): React.JSX.Element {
  const navigation = useNavigation();
  const styles = createStyles();
  const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';
  
  const navigationRef = useRef<View>(null);
  const mainContentRef = useRef<View>(null);

  // Announce page structure to screen readers
  useEffect(() => {
    const timer = setTimeout(() => {
      AccessibilityInfo.announceForAccessibility(
        'Page loaded. Press M to open navigation menu. Use heading navigation to move between sections.'
      );
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSkipToMain = () => {
    if (mainContentRef.current) {
      // @ts-ignore - React Native Windows accessibility focus
      mainContentRef.current.focus?.();
      AccessibilityInfo.announceForAccessibility('Navigated to main content');
    }
  };

  const handleSkipToNavigation = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    AccessibilityInfo.announceForAccessibility('Navigation menu opened');
  };

  return (
    <View style={styles.container}>
      {/* Screen reader instructions */}
      <View
        accessible={true}
        accessibilityRole="none"
        accessibilityLabel="Navigation instructions: Press M to open menu, use H key to navigate headers, or Tab to move through controls"
        accessibilityLiveRegion="polite"
        style={{position: 'absolute', left: -1000, top: -1000, width: 1, height: 1}}
      />
      
      <AccessibilityNavigationHelper
        onSkipToMain={handleSkipToMain}
        onSkipToNavigation={handleSkipToNavigation}
      />
      <View
        ref={navigationRef}
        accessibilityLabel="Navigation toolbar"
        accessibilityState={{ expanded: isDrawerOpen }}
        accessibilityLiveRegion='assertive'
        accessible={true}
        accessibilityRole="toolbar"
        focusable={true}
        importantForAccessibility="yes"
        style={styles.navBar}
       >
        <View>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="Navigation menu"
            style={styles.menu}
            accessibilityHint={'Tap to expand navigation menu'}
            onPress={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
              if (!isDrawerOpen) {
                AccessibilityInfo.announceForAccessibility('Navigation menu expanded');
              }
            }}
            onAccessibilityTap={() => {
              navigation.dispatch(DrawerActions.toggleDrawer());
              if (!isDrawerOpen) {
                AccessibilityInfo.announceForAccessibility('Navigation menu expanded');
              }
            }}
            activeOpacity={0.5783}
            underlayColor="rgba(0, 0, 0, 0.0241);">
            <Text style={styles.icon} accessibilityLabel="Navigation bar hamburger icon text">&#xE700;</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View 
        ref={mainContentRef}
        style={[styles.navItem, doNotInset ? {} : styles.insetNavItem]}
        accessible={true}
        accessibilityRole="none"
        accessibilityLabel="Main content"
        nativeID="main-content-landmark"
        focusable={true}
        importantForAccessibility="yes">
        {children}
      </View>
    </View>
  );
}
