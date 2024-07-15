import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
  Platform,
  PlatformColor,
  Pressable,
  useColorScheme,
  ScrollView,
  I18nManager,
} from 'react-native';
import type {ColorValue} from 'react-native';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import {VibrancyView} from '@fluentui-react-native/vibrancy-view';
import {getDrawerStatusFromState} from '@react-navigation/drawer';
import RNGalleryList, {RNGalleryCategories} from '../RNGalleryList';
import {ColorWithSystemEffectMacOS} from 'react-native-macos';
import {
  ChevronDown12Filled,
  ChevronDown12Regular,
  ChevronDown16Filled,
  ChevronDown16Regular,
  ChevronLeft12Filled,
  ChevronLeft12Regular,
  ChevronLeft16Filled,
  ChevronLeft16Regular,
  ChevronRight12Filled,
  ChevronRight12Regular,
  ChevronRight16Filled,
  ChevronRight16Regular,
  Home16Regular,
  List16Regular,
  TextBulletList16Regular,
} from '@fluentui/react-native-icons';

const textForegroundColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextControlForeground'),
  macos: PlatformColor('labelColor'),
  default: 'black',
});

const accentColor = Platform.select<ColorValue>({
  windows: PlatformColor('AccentFillColorDefaultBrush'),
  macos: PlatformColor('controlAccentColor'),
  default: 'black',
});

const drawerDividerColor = Platform.select<ColorValue>({
  windows: PlatformColor('CardStrokeColorDefaultBrush'),
  macos: PlatformColor('gridColor'),
  default: 'black',
});

const drawerBackgroundColor = Platform.select<ColorValue>({
  windows: PlatformColor('NavigationViewDefaultPaneBackground'),
  macos: 'transparent',
  default: 'white',
});

const navBarBackgroundColor = Platform.select<ColorValue>({
  windows: PlatformColor('NavigationViewDefaultPaneBackground'),
  macos: PlatformColor('controlBackgroundColor'),
  default: 'white',
});

const navItemBorderColor = Platform.select<ColorValue>({
  windows: PlatformColor('SurfaceStrokeColorFlyoutBrush'),
  macos: PlatformColor('separatorColor'),
  default: 'black',
});

const iconColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextControlForeground'),
  macos: PlatformColor('labelColor'),
  default: 'black',
});

const createStyles = (colorScheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      backgroundColor: colorScheme === 'light' ? '#f9f9f9' : '#262626',
      // backgroundColor: 'transparent',
    },
    navBar: {
      backgroundColor: 'transparent',
      height: '100%',
    },
    navItem: {
      flexGrow: 1,
      flexShrink: 1,
      height: '100%',
      alignSelf: 'stretch',
      // borderTopLeftRadius: 8,
      borderColor: navItemBorderColor,
      borderLeftWidth: 1,
    },
    insetNavItem: {
      paddingLeft: 36,
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
      color: iconColor,
    },
  });

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
    color: textForegroundColor,
  },
  chevronIcon: {
    fontFamily: 'Segoe MDL2 Assets',
    fontSize: 13,
    color: textForegroundColor,
  },
  drawer: {
    backgroundColor: drawerBackgroundColor,
    // borderRadius: 8,
    paddingTop: 53,
    // padding: 10,
    height: '100%',
  },
  drawerText: {
    fontSize: 13,
    color: textForegroundColor,
  },
  drawerDivider: {
    backgroundColor: drawerDividerColor,
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
    backgroundColor: accentColor,
    borderRadius: 2,
    right: 6,
    width: 3,
    height: 16,
    alignSelf: 'flex-start',
  },
});

const drawerListItemRest = 'transparent';
const drawerListItemPressed = Platform.select<ColorValue>({
  windows: PlatformColor('ControlAltFillColorSecondaryBrush'),
  macos: 'transparent',
  default: 'white',
});
const drawerListItemHovered = Platform.select<ColorValue>({
  windows: PlatformColor('ControlAltFillColorTertiaryBrush'),
  macos: 'trasparent',
  default: 'white',
});

const drawerListItemBorderRest = Platform.select<ColorValue>({
  windows: PlatformColor('ControlStrokeColorDefaultBrush'),
  default: 'transparent',
});

const drawerListItemBorderHovered = Platform.select<ColorValue>({
  windows: PlatformColor('ControlStrokeColorSecondary'),
  default: 'transparent',
});

const createDrawerListItemStyles = (isHovered: boolean, isPressed: boolean) =>
  StyleSheet.create({
    drawerListItem: {
      backgroundColor: isPressed
        ? drawerListItemPressed
        : isHovered
        ? drawerListItemHovered
        : drawerListItemRest,
      borderColor: isHovered
        ? drawerListItemBorderHovered
        : drawerListItemBorderRest,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      borderRadius: 4,
      borderCurve: 'continuous',
      gap: 4,
    },
  });

type DrawerCollapsibleCategoryProps = {
  categoryLabel: string;
  categoryIcon: string;
  categoryFluentIcon?: JSX.Element;
  items: any;
  navigation: any;
  currentRoute: string;
  containsCurrentRoute: boolean;
};
const DrawerCollapsibleCategory = ({
  categoryLabel,
  categoryIcon,
  categoryFluentIcon,
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

  const renderedIcon = categoryFluentIcon ? (
    categoryFluentIcon
  ) : (
    <Text accessible={false} style={styles.icon}>
      {categoryIcon}
    </Text>
  );

  let chevron = null;
  if (isExpanded) {
    if (isPressed) {
      chevron = <ChevronDown12Filled />;
    } else {
      chevron = <ChevronDown12Regular />;
    }
  } else {
    const isRTL = I18nManager.isRTL;
    if (isPressed) {
      if (isRTL) {
        chevron = <ChevronLeft12Filled />;
      } else {
        chevron = <ChevronRight12Filled />;
      }
    } else {
      if (isRTL) {
        chevron = <ChevronLeft12Regular />;
      } else {
        chevron = <ChevronRight12Regular />;
      }
    }
  }

  return (
    <View
      style={styles.category}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={categoryLabel}
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
          {renderedIcon}
        </View>
        <Text accessible={false} style={styles.drawerText}>
          {categoryLabel}
        </Text>
        <View style={[styles.expandedChevron, !isHovered && {opacity: 0}]}>
          {/* <Text
            accessible={false}
            style={[styles.chevronIcon, }]}>
            {isExpanded ? '\uE971' : '\uE972'}
          </Text> */}
          {chevron}
        </View>
      </Pressable>
      {isExpanded &&
        items.map((item) => (
          <DrawerListItem
            key={item.label}
            route={item.label}
            label={item.label}
            icon={item.icon}
            fluentIcon={item.fluentIcon}
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
    categoryList?.push({
      label: item.key,
      icon: item.textIcon,
      fluentIcon: item.fluentIcon,
    });
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
          categoryFluentIcon={category.fluentIcon}
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
  // const isDrawerOpen =
  //   getDrawerStatusFromState(navigation.getState()) === 'open';
  const isDrawerOpen = true;

  const navigationState = navigation.getState();
  const currentRoute = navigationState.routeNames[navigationState.index];

  if (!isDrawerOpen) {
    return <View />;
  }
  return (
    <View style={styles.drawer}>
      <DrawerListItem
        route="Home"
        label="Home"
        icon="&#xE80F;"
        fluentIcon={<Home16Regular />}
        navigation={navigation}
        currentRoute={currentRoute}
      />
      <DrawerListItem
        route="All samples"
        label="All samples"
        icon="&#xE71D;"
        fluentIcon={<TextBulletList16Regular />}
        navigation={navigation}
        currentRoute={currentRoute}
      />
      <View style={styles.drawerDivider} />
      {/* TODO: Rectify Scroller padding */}
      <ScrollView style={{paddingEnd: 15}}>
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
  fluentIcon?: JSX.Element;
  navigation: any;
  currentRoute: string;
};
const DrawerListItem = ({
  route,
  label,
  icon,
  fluentIcon,
  navigation,
  currentRoute,
}: DrawerListItemProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  const localStyles = createDrawerListItemStyles(isHovered, isPressed);

  const renderedIcon = fluentIcon ? (
    fluentIcon
  ) : (
    <Text accessible={false} style={styles.icon}>
      {icon}
    </Text>
  );

  const isSelected = currentRoute === route;
  const selectedStyle = {backgroundColor: 'lightgrey'};

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
        {renderedIcon}
      </View>
      <Text accessible={false} style={styles.drawerText}>
        {label}
      </Text>
    </Pressable>
  );
};

type ScreenWrapperProps = React.PropsWithChildren<{
  doNotInset?: boolean;
}>;
export function ScreenWrapper({
  children,
  doNotInset,
}: ScreenWrapperProps): JSX.Element {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const styles = createStyles(colorScheme);

  return (
    <View style={styles.container}>
      <VibrancyView
        blendingMode="behindWindow"
        state="followsWindowActiveState"
        material="sidebar"
        style={styles.navBar}>
        <CustomDrawerContent navigation={navigation} />
      </VibrancyView>
      <View style={[styles.navItem, doNotInset ? {} : styles.insetNavItem]}>
        {children}
      </View>
    </View>
  );
}
