import React, {useState, useEffect} from 'react';
import {
  Animated,
  Easing,
  PlatformColor,
  Pressable,
  ScrollView,
  View,
  useAnimatedValue,
} from 'react-native';
import type { PropsWithChildren } from 'react';
import { ThemeContext } from './themes/Theme';
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';
import HighContrastTheme from './themes/HighContrastTheme';
import useHighContrastState from './hooks/useHighContrastState';

type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
};

type NavigationAction = {
  type: string,
  payload?: any,
}

type NavigationContextType = {
  push: (screen: string, parameters : any, navigateFrom: string) => void,
  pop: () => void,
  navigate: (screen: string, parameters : any) => void,
  dispatch: (op: NavigationAction) => void,
  getState: () => any,
  currentScreen: string,
  routes: any[],
  parameters: any,
}
const NavigationContext = React.createContext<NavigationContextType>({
  push: () => {},
  pop: () => {},
  navigate: () => {},
  dispatch: () => {},
  getState: () => {},
  currentScreen: '',
  routes: [],
  parameters: [],
});

type RouteType = {
  name: string,
  key: string,
  params: any,
}

type NavigationContainerProps = PropsWithChildren<{
  theme?: Theme;
}>;
const NavigationContainer = ({children}: NavigationContainerProps) => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [routes, setRoutes] = useState<RouteType[]>([{name: 'Home', key: 'Home', params: {}}]);
  const [parameters, setParameters] = useState({} as any);

  const navigationContext = {
    push: (screen: string, parameters: any, _navigateFrom: string) => {
      setRoutes([...routes, {name: screen, key: screen, params: parameters}]);
      setCurrentScreen(screen);
      setParameters(parameters);
    },
    pop: () => {
      if (routes.length > 1) {
        routes.pop();
        setRoutes(routes);
        setCurrentScreen(routes[routes.length - 1].name);
      }
    },
    navigate: (screen: string, parameters: any) => {
      setRoutes([...routes, {name: screen, key: screen, params: parameters}]);
      setCurrentScreen(screen);
      setParameters(parameters);
    },
    dispatch: (op: () => void) => {
      console.warn('unhandled dispatch', op);
    },
    getState: () => {return {routes: routes, routeNames: routes, params: parameters};},
    currentScreen: currentScreen,
    routes: routes,
    parameters: parameters,
  };
  return (
    <NavigationContext.Provider value={navigationContext}>
      {children}
    </NavigationContext.Provider>
  );
};

type StackNavigatorProps = PropsWithChildren<{
    initialRouteName?: string;
}>;
const StackNavigator = ({children}: StackNavigatorProps) => {
  const navigationContext = React.useContext(NavigationContext);

  return (
    <View>
      {React.Children.map(children, child => {
        const name = child.props.name;
        if (name !== navigationContext.currentScreen) {
          return null;
        }
        return (
          <View key={name} style={{alignItems: name === 'Search' ? 'center' : 'stretch'}}>
            {child}
          </View>
        );
      })}
    </View>
  );
};

type StackScreenProps = PropsWithChildren<{
  name: string,
  component: ({ navigation, route }: { navigation: any; route: any; }) => JSX.Element,
  options: ({navigation}: {navigation: any}) => any,
}>;
const StackScreen = ({ name, component, options}: StackScreenProps) => {
  const navigationContext = React.useContext(NavigationContext);

  let myRoute = navigationContext.routes.find((route) => route.name === name);

  const navigation = {
    params: navigationContext.parameters ?? myRoute.parameters,
    push: (screen: string, parameters: any) => {navigationContext.push(screen, parameters, name);},
    pop: () => {navigationContext.pop();},
    getState: () => {return {routes: navigationContext.routes, params: navigationContext.parameters};},
  };

  let header = null;
  if (options) {
    const optionsResult = options({navigation});
    header = optionsResult.header();
  }
  const content = component({navigation: navigation, route: navigation});

  return (
    <View>
      {header}
      {content}
    </View>
  );
};

const createNativeStackNavigator = () => {
  return {};
};

type DrawerNavigatorProps = PropsWithChildren<{
  drawerContent: any,
  screenOptions: any,
  defaultStatus: string,
}>;
const DrawerNavigator = ({drawerContent, defaultStatus, children} : DrawerNavigatorProps) => {
  const navigationContext = React.useContext(NavigationContext);

  // Separately keep track of whether the drawer is open (visible) and whether it wants to be
  // (toggle state) so that the animation can only hide the content when it's done sliding out of view
  const [drawerDesiredOpen, setDrawerDesiredOpen] = React.useState(defaultStatus === 'open');
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  // Drawer slide animation
  const DEFAULT_DRAWER_WIDTH = 360;
  const slideAnim = useAnimatedValue(0);
  useEffect(() => {
    if (drawerDesiredOpen) {
      setDrawerIsOpen(true);
    }
    Animated.timing(slideAnim, {
      toValue: drawerDesiredOpen ? 0 : -DEFAULT_DRAWER_WIDTH,
      easing: Easing.in(Easing.linear),
      duration: drawerDesiredOpen ? 200 : 100,
      useNativeDriver: true,
    }).start(() => {
      // Only when the animation is completed should we actually hide the content
      if (!drawerDesiredOpen) {
        setDrawerIsOpen(false);
      }
    });
  }, [slideAnim, drawerDesiredOpen]);
  // For animating the overlay
  const fadeAnim = useAnimatedValue(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: drawerDesiredOpen ? 1 : 0,
      easing: Easing.in(Easing.linear),
      duration: drawerDesiredOpen ? 200 : 100,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, drawerDesiredOpen]);

  const dispatch = (op: NavigationAction) => {
    switch (op.type) {
      case 'OPEN_DRAWER':
        setDrawerDesiredOpen(true);
        return true;
      case 'CLOSE_DRAWER':
        setDrawerDesiredOpen(false);
        return true;
      case 'TOGGLE_DRAWER':
        setDrawerDesiredOpen(!drawerIsOpen);
        return true;
    }
    return false;
  };

  // Extend the navigation context with drawer-specific functions
  const navigation = {
    ...navigationContext,
    params: navigationContext.parameters,
    navigate: (screen: string, parameters: any) => {
      navigationContext.navigate(screen, parameters);
      setDrawerDesiredOpen(false);
    },
    dispatch: (op: NavigationAction) => {
      if (!dispatch(op)) {
        navigationContext.dispatch(op);
      }
    },
    getState: () => {
      let state = navigationContext.getState();
      return {
        ...state,
        drawerIsOpen: drawerIsOpen,
      };
    },
    openDrawer: () => {setDrawerDesiredOpen(true);},
    closeDrawer: () => {setDrawerDesiredOpen(false);},
  };

  // Create the drawer content
  const drawer = drawerIsOpen && (
    <ScrollView
      style={{
        flex: 1,
        maxWidth: DEFAULT_DRAWER_WIDTH,
        paddingLeft: 16,
        paddingRight: 6,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      {drawerContent({navigation})}
    </ScrollView>
  );

  return (
    <NavigationContext.Provider value={navigation}>
      <View style={{backgroundColor: PlatformColor('Background'), flex: 1}}>
          <View>
            { drawerIsOpen &&
              <Animated.View
                style={{opacity: fadeAnim}}>
                <Pressable
                  style={{
                    backgroundColor: PlatformColor('Background'),
                    maxWidth: DEFAULT_DRAWER_WIDTH,
                    height: '100%',
                    width: '100%'}}
                    onPress={() => setDrawerDesiredOpen(false)}
                    onAccessibilityTap={() => setDrawerDesiredOpen(false)}
                    />
              </Animated.View>
            }
            <Animated.View
              style={{
                position: 'absolute',
                maxWidth: DEFAULT_DRAWER_WIDTH,
                height: '100%',
                width: '100%',
                transform: [{translateX: slideAnim}]}}
              >
              {drawer}
            </Animated.View>
          </View>
        {React.Children.map(children, child => {
          const name = child.props.name;
          if (name !== navigationContext.currentScreen) {
            return null;
          }
          return (
            <View key={name} style={{alignItems: 'stretch', backgroundColor: PlatformColor('Background')}}>
              {child}
            </View>
          );
        })}
      </View>
    </NavigationContext.Provider>
  );
};

type DrawerScreenProps = {
  name: string,
  component: ({ navigation, route }: { navigation: any; route: any; }) => JSX.Element,
};
const DrawerScreen = ({name, component}: DrawerScreenProps) => {
  const navigationContext = React.useContext(NavigationContext);

  const content = component({navigation: navigationContext, route: navigationContext});

  return (
    <View key={name}>
      {content}
    </View>
  );
};

const createDrawerNavigator = () => {
  return {
    Navigator: ({drawerContent, screenOptions, defaultStatus, children} : DrawerNavigatorProps) => {
      return (
        <DrawerNavigator drawerContent={drawerContent} screenOptions={screenOptions} defaultStatus={defaultStatus}>
          {children}
        </DrawerNavigator>
      );
    },
    Screen: ({component, name}: DrawerScreenProps) => {
      return (
        <DrawerScreen key={name} name={name} component={component} />
      );
    },
  };
};

const getDrawerStatusFromState = (state: any) => {
  return state.drawerIsOpen ? 'open' : 'closed';
};

const useIsFocused = () => {
  return true;
};

const useTheme = () => {
  const themeMode = React.useContext(ThemeContext);
  const isHighContrast = useHighContrastState();
  
  // Return the appropriate theme based on the context and high contrast state
  if (isHighContrast) {
    return HighContrastTheme;
  }
  
  if (themeMode === 'dark') {
    return DarkTheme;
  }
  
  // Default to light theme
  return LightTheme;
};

const Theme = {
  colors: {
    primary: '#0066cc',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#505050',
    border: '#E6E6E6',
    notification: 'rgb(255, 59, 48)',
  },
  dark: false,
};

const useNavigation = () => {
  const navigationContext = React.useContext(NavigationContext);
  return navigationContext;
};

const DrawerActions = {
  openDrawer: () => {console.log('openDrawer'); return { type: 'OPEN_DRAWER' };},
  closeDrawer: () => {console.log('closeDrawer'); return { type: 'CLOSE_DRAWER' };},
  toggleDrawer: () => {console.log('toggleDrawer'); return { type: 'TOGGLE_DRAWER' };},
};

export { NavigationContainer, StackNavigator, StackScreen, createNativeStackNavigator, createDrawerNavigator, getDrawerStatusFromState, useIsFocused, useTheme, Theme, useNavigation, DrawerActions };
export type { Theme };