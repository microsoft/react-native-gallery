import * as React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  useColorScheme,
  ScrollView,
} from 'react-native';
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
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';
import {
  ThemeMode,
  RawThemeContext,
  ThemeContext,
  ThemeSetterContext,
} from './themes/Theme';
import {PlatformColor} from 'react-native';

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
  },
});

// @ts-ignore
function RNGalleryScreenWrapper({navigation}) {
  const state = useNavigationState((newState) => newState);
  const Component = RNGalleryList[state.index].component;
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
          width: 48,
        }}>
        <TouchableHighlight
          style={[styles.menu, {alignSelf: 'flex-end'}]}
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.5783}
          underlayColor="rgba(0, 0, 0, 0.0241);">
          <Text style={styles.icon}>&#xE700;</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.navItem}>
        <Component appVersion={appVersion} />
      </View>
    </View>
  );
}

function renderDrawerItem(props, i: number) {
  return (
    <DrawerItem
      label={() => {
        return <Text>{RNGalleryList[i].key}</Text>;
      }}
      onPress={() => props.navigation.navigate(RNGalleryList[i].key)}
      styles={{height: 30}}
    />
  );
}

function RenderDrawer(props) {
  var items = [];
  for (var i = 1; i < RNGalleryList.length; i++) {
    items.push(renderDrawerItem(props, i));
  }
  return items;
}

// @ts-ignore
function CustomDrawerContent(props) {
  return (
    <View>
      <TouchableHighlight
        style={styles.menu}
        onPress={() => props.navigation.closeDrawer()}
        activeOpacity={0.5783}
        underlayColor="rgba(0, 0, 0, 0.0241);">
        <Text style={styles.icon}>&#xE700;</Text>
      </TouchableHighlight>
      <DrawerItem
        label={() => {
          return <Text>Settings</Text>;
        }}
        onPress={() => props.navigation.navigate('Settings')}
        icon={() => {
          return <Text style={styles.icon}>&#xE713;</Text>;
        }}
      />
      <ScrollView style={{height: '80%'}} {...props}>
        {RenderDrawer(props)}
      </ScrollView>
    </View>
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

export default function App(props) {
  const [rawtheme, setRawTheme] = React.useState<ThemeMode>('system');
  const colorScheme = useColorScheme();
  const theme = rawtheme === 'system' ? colorScheme! : rawtheme;
  appVersion = `${props.MajorVersion}.${props.MinorVersion}.${props.BuildVersion}.${props.RevisionVersion}`;

  return (
    <ThemeSetterContext.Provider value={setRawTheme}>
      <RawThemeContext.Provider value={rawtheme}>
        <ThemeContext.Provider value={theme}>
          <NavigationContainer
            theme={theme === 'dark' ? DarkTheme : LightTheme}>
            <MyDrawer />
          </NavigationContainer>
        </ThemeContext.Provider>
      </RawThemeContext.Provider>
    </ThemeSetterContext.Provider>
  );
}
