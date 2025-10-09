import React, { useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useColorScheme,
  KeyboardEvent as RNKeyboardEvent,
  AccessibilityInfo,
} from 'react-native';
import {NavigationContainer} from './Navigation';
import {
  createDrawerNavigator,
  getDrawerStatusFromState,
} from './Navigation';
import RNGalleryList, {RNGalleryCategories} from './RNGalleryList';
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';
import {
  ThemeMode,
  RawThemeContext,
  ThemeContext,
  ThemeSetterContext,
} from './themes/Theme';
import {PlatformColor} from 'react-native';
import HighContrastTheme from './themes/HighContrastTheme';
import useHighContrastState from './hooks/useHighContrastState';
import {InteractionManager} from 'react-native';

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
  drawerDivider: {
    backgroundColor: PlatformColor('CardStrokeColorDefaultBrush'),
    height: 1,
  },
  indentContainer: {
    width: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  category: {
    gap: 4,
  },
  expandedChevron: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  navigationItemPill: {
    backgroundColor: PlatformColor('SystemControlHighlightBaseMediumHighBrush'),
    borderRadius: 2,
    right: 6,
    width: 3,
    height: 16,
    alignSelf: 'flex-start',
  },
});

const createDrawerListItemStyles = (isHovered: boolean, isPressed: boolean) =>
  StyleSheet.create({
    drawerListItem: {
      backgroundColor: isPressed
        ? PlatformColor('ControlAltFillColorSecondaryBrush')
        : isHovered
        ? PlatformColor('ControlAltFillColorTertiaryBrush')
        : 'transparent',
      borderColor: isHovered
        ? PlatformColor('ControlStrokeColorSecondary')
        : PlatformColor('ControlStrokeColorDefaultBrush'),
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 10,
      paddingVertical: 8,
      gap: 4,
    },
  });

type SelectedNavigationItemPillProps = {
  currentRoute: string;
  itemRoute: string;
};
const SelectedNavigationItemPill = ({
  currentRoute,
  itemRoute,
}: SelectedNavigationItemPillProps) => {
  if (currentRoute !== itemRoute) {
    return <View />;
  }

  return <View style={styles.navigationItemPill} />;
};

type DrawerListItemProps = {
  route: string;
  label: string;
  icon?: string;
  navigation: any;
  currentRoute: string;
  onKeyDown?: (e: RNKeyboardEvent) => void;
  ref?: React.Ref<Pressable>;
};
const DrawerListItem = React.forwardRef<Pressable, DrawerListItemProps>(
  (
    { route, label, icon, navigation, currentRoute, onKeyDown },
    ref,
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isPressed, setIsPressed] = React.useState(false);

    const localStyles = createDrawerListItemStyles(isHovered, isPressed);
    return (
      <Pressable
        ref={ref}
        onPress={() => navigation.navigate(route, { shouldFocus: true, focusTimestamp: Date.now() })}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={localStyles.drawerListItem}
        onAccessibilityTap={() => navigation.navigate(route, { shouldFocus: true, focusTimestamp: Date.now() })}
        {...({
          onKeyDown: onKeyDown,
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <View style={styles.indentContainer}>
          <SelectedNavigationItemPill
            currentRoute={currentRoute}
            itemRoute={route}
          />
          <Text accessible={false} style={styles.icon}>
            {icon}
          </Text>
        </View>
        <Text
        accessible={false}
        style={styles.drawerText}
        maxFontSizeMultiplier={1.5}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {label}
      </Text>
      </Pressable>
    );
  },
);

type DrawerCollapsibleCategoryProps = {
  categoryLabel: string;
  categoryIcon: string;
  items: any;
  navigation: any;
  currentRoute: string;
  containsCurrentRoute: boolean;
  positionInSet?: number;
  setSize?: number;
};
const DrawerCollapsibleCategory = ({
  categoryLabel,
  categoryIcon,
  items,
  navigation,
  currentRoute,
  containsCurrentRoute,
  positionInSet,
  setSize,
}: DrawerCollapsibleCategoryProps) => {
  const categoryRoute = `Category: ${categoryLabel}`;
  const isCurrentRoute = currentRoute === categoryRoute;
  const [isExpanded, setIsExpanded] = React.useState(
    containsCurrentRoute || isCurrentRoute,
  );
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const localStyles = createDrawerListItemStyles(isHovered, isPressed);

  const onPress = () => {
    if (isExpanded && containsCurrentRoute) {
      // Drawer will automatically close when navigating to a new route, by design:
      // https://github.com/react-navigation/react-navigation/pull/4394
      // As a workaround, we allow you to get a category page when the category
      // is expanded but you aren't on the category page now.
      navigation.navigate(categoryRoute, {category: categoryLabel});
    } else {
      setIsExpanded(!isExpanded);
    }
  };

  const handleKeyDown = (e: any) => {
    
    // Handle Left Arrow to collapse if expanded
    if (e.nativeEvent.key === 'ArrowLeft' && isExpanded) {
      e.preventDefault();
      setIsExpanded(false);
      return;
    }
    
    // Handle Right Arrow to expand if collapsed
    if (e.nativeEvent.key === 'ArrowRight' && !isExpanded) {
      e.preventDefault();
      setIsExpanded(true);
      return;
    }
  };

  return (
    <View style={styles.category}>
      <Pressable
        style={localStyles.drawerListItem}
        onPress={() => onPress()}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        accessibilityRole="button"
        accessibilityLabel={`${categoryLabel}, ${isExpanded ? 'expanded' : 'collapsed'}`}
        accessibilityState={{expanded: isExpanded}}
        {...(positionInSet && setSize ? {accessibilityPosInSet: positionInSet, accessibilitySetSize: setSize} : {})}
        accessibilityActions={[
          {name: isExpanded ? 'collapse' : 'expand', label: isExpanded ? 'Collapse' : 'Expand'},
        ]}
        onAccessibilityAction={(event) => {
          if (event.nativeEvent.actionName === 'expand' || event.nativeEvent.actionName === 'collapse') {
            setIsExpanded(!isExpanded);
          }
        }}
        onAccessibilityTap={() => onPress()}
        {...({
          onKeyDown: handleKeyDown,
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <View style={styles.indentContainer}>
          <SelectedNavigationItemPill
            currentRoute={currentRoute}
            itemRoute={categoryRoute}
          />
          <Text accessible={false} style={styles.icon}>
            {categoryIcon}
          </Text>
        </View>
        <Text accessible={false} style={styles.drawerText}>
          {categoryLabel}
        </Text>
        <View style={styles.expandedChevron}>
          <Text accessible={false} style={styles.icon}>
            {isExpanded ? '\uE971' : '\uE972'}
          </Text>
        </View>
      </Pressable>
      {isExpanded &&
        items.map((item: any) => (
          <DrawerListItem
            key={item.label}
            route={item.label}
            label={item.label}
            navigation={navigation}
            currentRoute={currentRoute}
          />
        ))}
    </View>
  );
};

const DrawerListView = (props: {
  navigation: any;
  currentRoute: string;
}) => {
  const filterPredicate = (item: any) => item.type !== '';
  const filteredList = RNGalleryList.filter(filterPredicate);

  let categoryWithCurrentRoute = '';

  let categoryMap = new Map<string, Array<{ label: string; icon: string }>>();
  RNGalleryCategories.forEach((category) => {
    categoryMap.set(category.label, []);
  });

  filteredList.forEach((item) => {
    let category = item.type;
    let categoryList = categoryMap.get(category);
    categoryList?.push({label: item.key, icon: item.icon});
    if (item.key === props.currentRoute) {
      categoryWithCurrentRoute = category;
    }
  });

  return (
    <View>
      {RNGalleryCategories.map((category, index) => (
        <DrawerCollapsibleCategory
          key={category.label}
          categoryLabel={category.label}
          categoryIcon={category.icon}
          items={categoryMap.get(category.label)}
          navigation={props.navigation}
          currentRoute={props.currentRoute}
          containsCurrentRoute={categoryWithCurrentRoute === category.label}
          positionInSet={index + 1}
          setSize={RNGalleryCategories.length}
        />
      ))}
    </View>
  );
};

function CustomDrawerContent({ navigation }: { navigation: any }) {
  const isDrawerOpen =
    getDrawerStatusFromState(navigation.getState()) === 'open';

  const navigationState = navigation.getState();
  const currentRoute = navigationState.routeNames[navigationState.index];

  // Refs for main navigation items
  const hamburgerRef = useRef<View>(null);
  const homeRef = useRef<View>(null);
  const allSamplesRef = useRef<any>(null);
  const settingsRef = useRef<View>(null);

  // Simple keyboard handler that just handles arrow keys for basic navigation
  const handleKeyDown = (e: any) => {
    // Let the default behavior handle most navigation
    // This is a minimal implementation to support arrow keys
    if (e.nativeEvent.key === 'ArrowDown' || e.nativeEvent.key === 'ArrowUp') {
      // Allow default focus management
      return;
    }
  };

  // When drawer opens, focus the Home menu item
  useEffect(() => {
    if (isDrawerOpen && homeRef.current) {
      InteractionManager.runAfterInteractions(() => {
        homeRef.current?.focus();
      });
    }
  }, [isDrawerOpen]);

  return (
    <View style={styles.drawer}>
      <Pressable
        ref={hamburgerRef}
        accessibilityRole="button"
        accessibilityLabel="Navigation menu"
        style={styles.menu}
        onPress={() => {
          if (isDrawerOpen) {
            navigation.closeDrawer();
            AccessibilityInfo.announceForAccessibility('Navigation menu collapsed');
          } else {
            navigation.openDrawer();
          }
        }}
        onAccessibilityTap={() => {
          if (isDrawerOpen) {
            navigation.closeDrawer();
            AccessibilityInfo.announceForAccessibility('Navigation menu collapsed');
          } else {
            navigation.openDrawer();
          }
        }}
        {...({
          onKeyDown: handleKeyDown,
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <Text style={styles.icon}>&#xE700;</Text>
      </Pressable>

      {isDrawerOpen && (
        <>
          <DrawerListItem
            ref={homeRef}
            route="Home"
            label="Home"
            icon="&#xE80F;"
            navigation={navigation}
            currentRoute={currentRoute}
            onKeyDown={handleKeyDown}
            keyboardEvents={['keyDown']}
            focusable={true}
          />
          <DrawerListItem
            ref={allSamplesRef}
            route="All samples"
            label="All samples"
            icon="&#xE71D;"
            navigation={navigation}
            currentRoute={currentRoute}
            onKeyDown={handleKeyDown}
            keyboardEvents={['keyDown']}
            focusable={true}
          />
          <View style={styles.drawerDivider} />
          <DrawerListView 
            navigation={navigation} 
            currentRoute={currentRoute}
          />
          <View style={styles.drawerDivider} />

          <DrawerListItem
            ref={settingsRef}
            route="Settings"
            label="Settings"
            icon="&#xE713;"
            navigation={navigation}
            currentRoute={currentRoute}
            onKeyDown={handleKeyDown}
            keyboardEvents={['keyDown']}
            focusable={true}
          />
        </>
      )}
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
      defaultStatus="closed"
      initialRouteName="Home">
      {RNGalleryList.map((item) => (
        <Drawer.Screen
          name={item.key}
          key={item.key}
          component={item.component as any}
        />
      ))}
    </Drawer.Navigator>
  );
}

export default function App() {
  const [rawtheme, setRawTheme] = React.useState<ThemeMode>('system');
  const colorScheme = useColorScheme();
  const theme = rawtheme === 'system' ? colorScheme! : rawtheme;

  const isHighContrast = useHighContrastState();

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
