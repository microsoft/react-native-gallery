import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  PlatformColor,
  AccessibilityInfo,
} from 'react-native';
import {useNavigation, DrawerActions, getDrawerStatusFromState} from '../Navigation';

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
}: ScreenWrapperProps): JSX.Element {
  const navigation = useNavigation();
  const styles = createStyles();
  const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';

  return (
    <View style={styles.container}>
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
            tooltip={'Expand navigation menu'}
            // requires react-native-gesture-handler to be imported in order to pass testing.
            // blocked by #125
            //accessibilityState={{expanded: useIsDrawerOpen()}}
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
