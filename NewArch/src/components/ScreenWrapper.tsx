import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  PlatformColor,
  AccessibilityInfo,
  Dimensions,
} from 'react-native';
import {useNavigation, DrawerActions, getDrawerStatusFromState} from '../Navigation';
import {AccessibilityNavigationHelper} from './AccessibilityNavigationHelper';


const createStyles = (windowWidth: number) => {
  const isSmallScreen = windowWidth < 600;
  const navBarWidth = isSmallScreen ? 40 : 48;
  
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: PlatformColor('Background'),
    },
    navBar: {
      backgroundColor: PlatformColor('Background'),
      width: navBarWidth,
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
      paddingLeft: isSmallScreen ? 20 : 36,
    },
    menu: {
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
      color: PlatformColor('TextControlForeground'),
    },
  });
};

type ScreenWrapperProps = React.PropsWithChildren<{
  doNotInset?: boolean;
}>;

export function ScreenWrapper({
  children,
  doNotInset,
}: ScreenWrapperProps) {
  const navigation = useNavigation();
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setWindowDimensions(window);
    });

    return () => subscription?.remove();
  }, []);

  const styles = createStyles(windowDimensions.width);
  const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';

  const handleSkipToMain = () => {
    // Focus management for skip to main content
    AccessibilityInfo.announceForAccessibility('Navigated to main content');
  };

  const handleSkipToNavigation = () => {
    navigation.dispatch(DrawerActions.openDrawer());
    AccessibilityInfo.announceForAccessibility('Navigation menu opened');
  };

  return (
    <View style={styles.container}>
      
      <AccessibilityNavigationHelper
        onSkipToMain={handleSkipToMain}
        onSkipToNavigation={handleSkipToNavigation}
      />
      <View
        // accessibilityRole="button"
        accessibilityLabel="Navigation bar"
        accessibilityState={{ expanded: isDrawerOpen }}
        accessibilityLiveRegion='assertive'
        // accessibilityHint={isDrawerOpen ? 'Tap to collapse navigation menu' : 'Tap to expand navigation menu'}
        // tooltip={isDrawerOpen ? 'Tap to collapse navigation menu' : 'Tap to expand navigation menu'}
        // requires react-native-gesture-handler to be imported in order to pass testing.
        // blocked by #125
        /*accessibilityState={{
          expanded: useIsDrawerOpen(),
        }}*/
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
      <View style={[styles.navItem, doNotInset ? {} : styles.insetNavItem]}>
        {children}
      </View>
    </View>
  );
}
