import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerItem,
  getDrawerStatusFromState,
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
import {AppTheme} from 'react-native-windows';
import HighContrastTheme from './themes/HighContrastTheme';

const styles = StyleSheet.create({
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

function RenderDrawerItem(props, i: number) {
  const isDrawerOpen =
    getDrawerStatusFromState(props.navigation.getState()) === 'open';
  return (
    <DrawerItem
      importantForAccessibility={isDrawerOpen ? 'auto' : 'no-hide-descendants'}
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

function CustomDrawerContent(props) {
  const isDrawerOpen =
    getDrawerStatusFromState(props.navigation.getState()) === 'open';
  return (
    <View style={styles.drawer}>
      <TouchableHighlight
        importantForAccessibility={
          isDrawerOpen ? 'auto' : 'no-hide-descendants'
        }
        accessibilityRole="button"
        accessibilityLabel="Navigation bar expanded"
        {...{tooltip: 'Collapse Menu'}}
        style={styles.menu}
        onPress={() => props.navigation.closeDrawer()}
        activeOpacity={0.5783}
        underlayColor="rgba(0, 0, 0, 0.0241);">
        <Text style={styles.icon}>&#xE700;</Text>
      </TouchableHighlight>
      <DrawerItem
        importantForAccessibility={
          isDrawerOpen ? 'auto' : 'no-hide-descendants'
        }
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
        importantForAccessibility={
          isDrawerOpen ? 'auto' : 'no-hide-descendants'
        }
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
      component={RNGalleryList[i].component}
    />
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  let screens = renderScreens();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      {screens}
    </Drawer.Navigator>
  );
}

export default function App() {
  const [rawtheme, setRawTheme] = React.useState<ThemeMode>('system');
  const colorScheme = useColorScheme();
  const theme = rawtheme === 'system' ? colorScheme! : rawtheme;

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
            <MyDrawer />
          </NavigationContainer>
        </ThemeContext.Provider>
      </RawThemeContext.Provider>
    </ThemeSetterContext.Provider>
  );
}
