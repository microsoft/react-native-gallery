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
  indentContainer: {
    width: 30,
  },
  category: {
    gap: 4,
  },
  expandedChevron: {
    flexGrow: 1,
    alignItems: 'flex-end',
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
      paddingHorizontal: 20,
      paddingVertical: 8,
      gap: 4,
    },
  });

type DrawerListItemProps = {
  route: string;
  label: string;
  icon?: string;
  navigation: any;
};
const DrawerListItem = ({
  route,
  label,
  icon,
  navigation,
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
      accessibilityLabel={label}
      style={localStyles.drawerListItem}>
      <View style={styles.indentContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.drawerText}>{label}</Text>
    </Pressable>
  );
};

type DrawerCollapsibleCategoryProps = {
  categoryLabel: string;
  categoryIcon: string;
  items: any;
  navigation: any;
};
const DrawerCollapsibleCategory = ({
  categoryLabel,
  categoryIcon,
  items,
  navigation,
}: DrawerCollapsibleCategoryProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const localStyles = createDrawerListItemStyles(isHovered, isPressed);

  return (
    <View style={styles.category}>
      <Pressable
        style={localStyles.drawerListItem}
        onPress={() => setIsExpanded(!isExpanded)}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onHoverIn={() => setIsHovered(true)}
        onHoverOut={() => setIsHovered(false)}>
        <View style={styles.indentContainer}>
          <Text style={styles.icon}>{categoryIcon}</Text>
        </View>
        <Text style={styles.drawerText}>{categoryLabel}</Text>
        <View style={styles.expandedChevron}>
          <Text style={styles.icon}>{isExpanded ? '\uE971' : '\uE972'}</Text>
        </View>
      </Pressable>
      {isExpanded &&
        items.map((item) => (
          <DrawerListItem
            key={item.label}
            route={item.label}
            label={item.label}
            navigation={navigation}
          />
        ))}
    </View>
  );
};

const DrawerListView = (props) => {
  // Home and Settings drawer items have already been manually loaded.
  const filterPredicate = (item) => item.type !== '';
  const filteredList = RNGalleryList.filter(filterPredicate);

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
  });

  return (
    <View>
      {RNGalleryCategories.map((category) => (
        <DrawerCollapsibleCategory
          categoryLabel={category.label}
          categoryIcon={category.icon}
          items={categoryMap.get(category.label)}
          navigation={props.navigation}
        />
      ))}
    </View>
  );
};

function CustomDrawerContent({navigation}) {
  const isDrawerOpen =
    getDrawerStatusFromState(navigation.getState()) === 'open';

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
      />
      <ScrollView>
        <DrawerListView navigation={navigation} />
      </ScrollView>
      <DrawerListItem
        route="Settings"
        label="Settings"
        icon="&#xE713;"
        navigation={navigation}
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
      {RNGalleryList.map((item, i) => (
        <Drawer.Screen
          name={RNGalleryList[i].key}
          key={RNGalleryList[i].key}
          component={RNGalleryList[i].component}
        />
      ))}
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
