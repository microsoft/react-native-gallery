import React from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  useColorScheme,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  getDrawerStatusFromState,
} from '@react-navigation/drawer';
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
};
const DrawerListItem = ({
  route,
  label,
  icon,
  navigation,
  currentRoute,
}: DrawerListItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const localStyles = createDrawerListItemStyles(isHovered, isPressed);
  return (
    <Pressable
      onPress={() => navigation.navigate(route)}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={localStyles.drawerListItem}>
      <View style={styles.indentContainer}>
        <SelectedNavigationItemPill
          currentRoute={currentRoute}
          itemRoute={route}
        />
        <Text accessible={false} style={styles.icon}>
          {icon}
        </Text>
      </View>
      <Text accessible={false} style={styles.drawerText} allowFontScaling={true}>
        {label}
      </Text>
    </Pressable>
  );
};

type DrawerCollapsibleCategoryProps = {
  categoryLabel: string;
  categoryIcon: string;
  items: any;
  navigation: any;
  currentRoute: string;
  containsCurrentRoute: boolean;
};
const DrawerCollapsibleCategory = ({
  categoryLabel,
  categoryIcon,
  items,
  navigation,
  currentRoute,
  containsCurrentRoute,
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

  return (
    <View
      style={styles.category}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={categoryLabel}
      accessibilityState={{expanded: isExpanded}}
      onAccessibilityTap={() => setIsExpanded(!isExpanded)}>
      <Pressable
        style={localStyles.drawerListItem}
        onPress={() => onPress()}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}
        accessible={false}>
        <View style={styles.indentContainer}>
          <SelectedNavigationItemPill
            currentRoute={currentRoute}
            itemRoute={categoryRoute}
          />
          <Text accessible={false} style={styles.icon}>
            {categoryIcon}
          </Text>
        </View>
        <Text accessible={false} style={styles.drawerText} allowFontScaling={true}>
          {categoryLabel}
        </Text>
        <View style={styles.expandedChevron}>
          <Text accessible={false} style={styles.icon}>
            {isExpanded ? '\uE971' : '\uE972'}
          </Text>
        </View>
      </Pressable>
      {isExpanded &&
        items.map((item) => (
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

const DrawerListView = (props) => {
  // Home and Settings drawer items have already been manually loaded.
  const filterPredicate = (item) => item.type !== '';
  const filteredList = RNGalleryList.filter(filterPredicate);

  let categoryWithCurrentRoute = '';

  // Create an array for each category
  let categoryMap = new Map();
  RNGalleryCategories.forEach((category) => {
    categoryMap.set(category.label, []);
  });

  // Populate the category arrays
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
      {RNGalleryCategories.map((category) => (
        <DrawerCollapsibleCategory
          categoryLabel={category.label}
          categoryIcon={category.icon}
          items={categoryMap.get(category.label)}
          navigation={props.navigation}
          currentRoute={props.currentRoute}
          containsCurrentRoute={categoryWithCurrentRoute === category.label}
        />
      ))}
    </View>
  );
};

function CustomDrawerContent({navigation}) {
  const isDrawerOpen =
    getDrawerStatusFromState(navigation.getState()) === 'open';

  const navigationState = navigation.getState();
  const currentRoute = navigationState.routeNames[navigationState.index];

  if (!isDrawerOpen) {
    return <View />;
  }
  return (
    <View style={styles.drawer}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Navigation bar expanded"
        {...{tooltip: 'Collapse Menu'}}
        style={styles.menu}
        onPress={() => navigation.closeDrawer()}>
        <Text style={styles.icon}>&#xE700;</Text>
      </Pressable>
      <DrawerListItem
        route="Home"
        label="Home"
        icon="&#xE80F;"
        navigation={navigation}
        currentRoute={currentRoute}
      />
      <DrawerListItem
        route="All samples"
        label="All samples"
        icon="&#xE71D;"
        navigation={navigation}
        currentRoute={currentRoute}
      />
      <View style={styles.drawerDivider} />
      <ScrollView>
        <DrawerListView navigation={navigation} currentRoute={currentRoute} />
      </ScrollView>
      <View style={styles.drawerDivider} />
      <DrawerListItem
        route="Settings"
        label="Settings"
        icon="&#xE713;"
        navigation={navigation}
        currentRoute={currentRoute}
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      {RNGalleryList.map((item) => (
        <Drawer.Screen
          name={item.key}
          key={item.key}
          component={item.component}
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
