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
import {
  NavigationContainer,
  useNavigationState,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  getIsDrawerOpenFromState,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
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
import {AppTheme} from 'react-native-windows';
import HighContrastTheme from './themes/HighContrastTheme';

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
function RNGalleryScreenWrapper({navigation}) {
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
          {RenderDrawer({navigation}, isDrawerOpen)}
        </View>
      </Pressable>
      <View style={styles.navItem}>
        <Component appVersion={appVersion} navigation={navigation} />
      </View>
    </View>
  );
}

function RenderDrawerItem({navigation}, i: number) {
  //const isDrawerOpen = getIsDrawerOpenFromState(props.navigation.getState());
  return (
    <Pressable
      //importantForAccessibility={isDrawerOpen ? 'auto' : 'no-hide-descendants'}
      key={RNGalleryList[i].key}
      onPress={() => navigation.navigate(RNGalleryList[i].key)}
      accessibilityLabel={RNGalleryList[i].key}
      style={styles.drawerItem}>
      <Text style={styles.icon}>{RNGalleryList[i].icon}</Text>
      <Text style={styles.drawerText}>{RNGalleryList[i].key}</Text>
    </Pressable>
  );
}

function RenderDrawer({navigation}, isDrawerOpen: boolean) {
  if (!isDrawerOpen) {
    return [];
  }
  var items = [];
  // Begin iteration at index 2 because Home and
  // Settings drawer items have already been manually loaded.
  for (var i = 2; i < RNGalleryList.length; i++) {
    items.push(RenderDrawerItem({navigation}, i));
  }
  return (
    <View>
      {RenderDrawerItem({navigation}, 0)}
      <ScrollView style={styles.drawer}>{items}</ScrollView>
      {RenderDrawerItem({navigation}, 1)}
    </View>
  );
}

const Stack = createStackNavigator();

function renderScreens() {
  const items = [];
  for (var i = 0; i < RNGalleryList.length; i++) {
    items.push(renderScreen(i));
  }

  return items;
}

function renderScreen(i: number) {
  return (
    <Stack.Screen
      name={RNGalleryList[i].key}
      key={RNGalleryList[i].key}
      component={RNGalleryScreenWrapper}
    />
  );
}

function MyStack() {
  let screens = renderScreens();
  return <Stack.Navigator headerMode="none">{screens}</Stack.Navigator>;
}

export default function App(props) {
  const [rawtheme, setRawTheme] = React.useState<ThemeMode>('system');
  const colorScheme = useColorScheme();
  const theme = rawtheme === 'system' ? colorScheme! : rawtheme;
  appVersion = `${props.MajorVersion}.${props.MinorVersion}.${props.BuildVersion}.${props.RevisionVersion}`;
  const state = useNavigationState((newState) => newState);
  const entry = RNGalleryList.find(
    (entry) => entry.key === state.routes[state.index].name,
  );
  console.log(state);
  const Component = entry?.component;
  //const Component = RNGalleryList[state.routes[state.index].name].component;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isHighContrast, setHighContrast] = React.useState(
    AppTheme.isHighContrast,
  );

  React.useEffect(() => {
    const subscription = AppTheme.addListener('highContrastChanged', () => {
      setHighContrast(AppTheme.isHighContrast);
    });

    return () => subscription.remove();
  });

  return (
    <ThemeSetterContext.Provider value={setRawTheme}>
      <RawThemeContext.Provider value={rawtheme}>
        <ThemeContext.Provider value={theme}>
          <NavigationContainer
            theme={
              isHighContrast
                ? HighContrastTheme
                : theme === 'dark'
                ? DarkTheme
                : LightTheme
            }>
            <View style={styles.container}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Navigation bar"
                accessibilityState={{expanded: isDrawerOpen}}
                style={{
                  backgroundColor: PlatformColor(
                    'NavigationViewDefaultPaneBackground',
                  ),
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
                      isDrawerOpen
                        ? setIsDrawerOpen(false)
                        : setIsDrawerOpen(true)
                    }
                    activeOpacity={0.5783}
                    underlayColor="rgba(0, 0, 0, 0.0241);">
                    <Text style={styles.icon}>&#xE700;</Text>
                  </TouchableHighlight>
                </View>
              </Pressable>
              <View style={styles.navItem} />
            </View>
            <MyStack />
          </NavigationContainer>
        </ThemeContext.Provider>
      </RawThemeContext.Provider>
    </ThemeSetterContext.Provider>
  );
}
