import * as React from 'react';
import { View, Text, Button, useWindowDimensions  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Screen 1</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Text>Screen 2</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} drawerType= 'permanent'/>}>
      <Drawer.Screen name="Screen 1" component={Screen1} />
      <Drawer.Screen name="Screen 2" component={Screen2} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
