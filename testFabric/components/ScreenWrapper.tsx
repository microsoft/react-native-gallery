import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Pressable,
} from 'react-native';
import {PlatformColor} from 'react-native';
// import {useNavigation, DrawerActions} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  navItem: {
    flexGrow: 1,
    flexShrink: 1,
    height: '100%',
    alignSelf: 'stretch',
    paddingLeft: 15,
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

// @ts-ignore
export function ScreenWrapper({children}) {
  // const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Navigation bar"
        // requires react-native-gesture-handler to be imported in order to pass testing.
        // blocked by #125
        /*accessibilityState={{
          expanded: useIsDrawerOpen(),
        }}*/
        style={{
          backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
          width: 48,
          height: '100%',
          paddingBottom: 20,
        }}
        /*onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}*/>
        <View>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="Navigation bar hamburger icon"
            {...{tooltip: 'Expand Menu'}}
            // requires react-native-gesture-handler to be imported in order to pass testing.
            // blocked by #125
            //accessibilityState={{expanded: useIsDrawerOpen()}}
            style={styles.menu}
            //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            activeOpacity={0.5783}
            underlayColor="rgba(0, 0, 0, 0.0241);">
            <Text style={styles.icon}>&#xE700;</Text>
          </TouchableHighlight>
        </View>
      </Pressable>
      <View style={styles.navItem}>{children}</View>
    </View>
  );
}
