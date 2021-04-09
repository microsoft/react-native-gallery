import * as React from 'react';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';
import {AppTheme} from 'react-native-windows';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import RNGalleryList from './RNGalleryList';

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
  },
  menu: {
    margin: 10,
    height: 34,
    width: 38,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 16,
  },
});

// @ts-ignore
function RNGalleryScreenWrapper({navigation}) {
  const state = useNavigationState((state) => state);
  const Component = RNGalleryList[state.index].component;
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.menu}
        onPress={() => navigation.openDrawer()}
        activeOpacity={0.5783}
        underlayColor="rgba(0, 0, 0, 0.0241);">
        <Text style={styles.icon}>&#xE700;</Text>
      </TouchableHighlight>
      <View style={styles.navItem}>
        <Component />
      </View>
    </View>
  );
}

// @ts-ignore
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  let screens = renderScreens();
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} drawerType="permanent" />
      )}>
      {screens}
    </Drawer.Navigator>
  );
}

function renderScreens() {
  const items = [];
  for (var i = 0; i < RNGalleryList.length; i++) {
    items.push(renderScreen(i));
  }

  return items;
}

function renderScreen(i: number) {
  return (
    <Drawer.Screen
      name={RNGalleryList[i].key}
      key={RNGalleryList[i].key}
      component={RNGalleryScreenWrapper}
    />
  );
}

export default function App() {
  return (
    <NavigationContainer
      theme={AppTheme.currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}
