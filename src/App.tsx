import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
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
  container: {flexDirection: 'row', width: '100%', height: '100%'},
  navItem: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

function RNGalleryScreenWrapper({navigation}) {
  const state = useNavigationState(state => state);
  const Component = RNGalleryList[state.index].component;
  return (
    <View style={styles.container}>
      <Button title="Menu" onPress={() => navigation.openDrawer()} />
      <View style={styles.navItem}>
        <Component />
      </View>
    </View>
  );
}

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
      drawerContent={props => (
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

function renderScreen(i) {
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
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
