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
  DrawerItem,
  getIsDrawerOpenFromState,
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
    color: PlatformColor('TextControlForeground'),
  },
  drawer: {
    backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
    height: '100%',
  },
  drawerText: {
    color: PlatformColor('TextControlForeground'),
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
function RNGalleryScreenWrapper({navigation}) {
  const state = useNavigationState((newState) => newState);
  const Component = RNGalleryList[state.index].component;
  const isDrawerOpen = getIsDrawerOpenFromState(navigation.getState());

  return (
    <View style={styles.container}>
      <TouchableHighlight
        accessibilityRole="button"
        accessibilityLabel="Navigation bar"
        accessibilityState={{expanded: isDrawerOpen}}
        style={{
          backgroundColor: PlatformColor('NavigationViewDefaultPaneBackground'),
          width: 48,
        }}
        underlayColor={PlatformColor('NavigationViewDefaultPaneBackground')}
        onPress={() => navigation.openDrawer()}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel="Navigation bar hambuger icon"
          accessibilityState={{expanded: isDrawerOpen}}
          style={styles.menu}
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.5783}
          underlayColor="rgba(0, 0, 0, 0.0241);">
          <Text style={styles.icon}>&#xE700;</Text>
        </TouchableHighlight>
      </TouchableHighlight>
      <View style={styles.navItem}>
        <Component appVersion={appVersion} navigation={navigation} />
      </View>
    </View>
  );
}

function RenderDrawerItem(props, i: number) {
  return (
    <DrawerItem
      key={RNGalleryList[i].key}
      label={() => {
        return <Text style={styles.drawerText}>{RNGalleryList[i].key}</Text>;
      }}
      onPress={() => props.navigation.navigate(RNGalleryList[i].key)}
      icon={() => {
        return <Text style={styles.icon}>{RNGalleryList[i].icon}</Text>;
      }}
      accessibilityLabel={RNGalleryList[i].key}
    />
  );
}

function RenderDrawer(props) {
  var items = [];
  // Begin iteration at index 2 because Home and
  // Settings drawer items have already been manually loaded.
  for (var i = 2; i < RNGalleryList.length; i++) {
    items.push(RenderDrawerItem(props, i));
  }
  return items;
}

// @ts-ignore
function CustomDrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <TouchableHighlight
        accessibilityRole="button"
        accessibilityLabel="Navigation bar expanded"
        style={styles.menu}
        onPress={() => props.navigation.closeDrawer()}
        activeOpacity={0.5783}
        underlayColor="rgba(0, 0, 0, 0.0241);">
        <Text style={styles.icon}>&#xE700;</Text>
      </TouchableHighlight>
      <DrawerItem
        label={() => {
          return <Text style={styles.drawerText}>Home</Text>;
        }}
        onPress={() => props.navigation.navigate('Home')}
        icon={() => {
          return <Text style={styles.icon}>&#xE80F;</Text>;
        }}
        style={styles.drawerBottomDivider}
        accessibilityLabel={'home'}
      />
      <ScrollView {...props}>{RenderDrawer(props)}</ScrollView>
      <DrawerItem
        label={() => {
          return <Text style={styles.drawerText}>Settings</Text>;
        }}
        onPress={() => props.navigation.navigate('Settings')}
        icon={() => {
          return <Text style={styles.icon}>&#xE713;</Text>;
        }}
        style={styles.drawerTopDivider}
        accessibilityLabel={'settings'}
      />
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
