import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  PlatformColor,
  Pressable,
  useColorScheme,
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
  const colorScheme = useColorScheme();
  const styles = createStyles();
  
  const isDrawerOpen = getDrawerStatusFromState(navigation.getState()) === 'open';

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Navigation menu"
        accessibilityState={{ expanded: isDrawerOpen }}
        accessibilityHint={isDrawerOpen ? 'Tap to collapse navigation menu' : 'Tap to expand navigation menu'}
        style={styles.navBar}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}>
        <View>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="Navigation menu"
            accessibilityState={{ expanded: isDrawerOpen }}
            style={styles.menu}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            onAccessibilityTap={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            activeOpacity={0.5783}
            underlayColor="rgba(0, 0, 0, 0.0241);">
            <Text style={styles.icon}>&#xE700;</Text>
          </TouchableHighlight>
        </View>
      </Pressable>
      <View style={[styles.navItem, doNotInset ? {} : styles.insetNavItem]}>
        {children}
      </View>
    </View>
  );
}
