import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  useColorScheme,
  ScrollView,
  Pressable,
} from 'react-native';
import RNGalleryList from '../RNGalleryList';
import {PlatformColor} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';

let appVersion = '';

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
    paddingLeft: 10,
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
  drawer: {
    backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
    height: '100%',
  },
  drawerItem: {
    padding: 10,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 15,
  },
  drawerText: {
    color: PlatformColor('TextControlForeground'),
    paddingLeft: 10,
  },
  drawerTopDivider: {
    borderTopWidth: 0.5,
    borderColor: PlatformColor('TextControlForeground'),
    borderRadius: 0,
  },
  drawerBottomDivider: {
    borderBottomWidth: 0.5,
    borderColor: PlatformColor('TextControlForeground'),
    borderRadius: 0,
  },
});

// @ts-ignore
export function ScreenWrapper({children}) {
  //const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Navigation bar"
        accessibilityState={{expanded: isDrawerOpen}}
        style={{
          backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
          width: isDrawerOpen ? 200 : 48,
          height: '100%',
        }}
        onPress={() => {
          isDrawerOpen ? setIsDrawerOpen(false) : setIsDrawerOpen(true);
        }}>
        <View>
          <TouchableHighlight
            accessibilityRole="button"
            accessibilityLabel="Navigation bar hamburger icon"
            {...{tooltip: 'Expand Menu'}}
            accessibilityState={{expanded: isDrawerOpen}}
            style={styles.menu}
            onPress={() =>
              isDrawerOpen ? setIsDrawerOpen(false) : setIsDrawerOpen(true)
            }
            activeOpacity={0.5783}
            underlayColor="rgba(0, 0, 0, 0.0241);">
            <Text style={styles.icon}>&#xE700;</Text>
          </TouchableHighlight>
          {RenderDrawer(isDrawerOpen)}
        </View>
      </Pressable>
      <View style={styles.navItem}>{children}</View>
    </View>
  );
}

function RenderDrawerItem(i: number) {
  //const isDrawerOpen = getIsDrawerOpenFromState(props.navigation.getState());
  const navigation = useNavigation();
  return (
    <Pressable
      //importantForAccessibility={isDrawerOpen ? 'auto' : 'no-hide-descendants'}
      key={RNGalleryList[i].key}
      onPress={() => {
        navigation.navigate(RNGalleryList[i].key);
      }}
      accessibilityLabel={RNGalleryList[i].key}
      style={styles.drawerItem}>
      <Text style={styles.icon}>{RNGalleryList[i].icon}</Text>
      <Text style={styles.drawerText}>{RNGalleryList[i].key}</Text>
    </Pressable>
  );
}

function RenderDrawer(isDrawerOpen: boolean) {
  if (!isDrawerOpen) {
    return [];
  }
  var items = [];
  // Begin iteration at index 2 because Home and
  // Settings drawer items have already been manually loaded.
  for (var i = 2; i < RNGalleryList.length; i++) {
    items.push(RenderDrawerItem(i));
  }
  return (
    <View>
      {RenderDrawerItem(0)}
      <ScrollView style={styles.drawer}>{items}</ScrollView>
      {RenderDrawerItem(1)}
    </View>
  );
}
