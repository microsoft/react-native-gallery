'use strict';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  PlatformColor,
  Platform,
  ColorValue,
} from 'react-native';
import React from 'react';
import {useIsFocused} from '@react-navigation/native';
import RNGalleryList, {RNGalleryCategories} from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {HomeComponentTile} from './components/ControlItem';

const textColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextFillColorPrimaryBrush'),
  default: 'black',
});

const createStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      paddingBottom: 40,
      paddingLeft: 36,
      alignSelf: 'stretch',
      height: '100%',
      alignContent: 'flex-start',
    },
    controlItems: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    title: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
    },
    heading: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: '600',
      color: textColor,
    },
    homeContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  });

type ListOfComponentsProps = {
  navigation: any;
  heading: string;
  items: any[];
};
const ListOfComponents = ({
  navigation,
  heading,
  items,
}: ListOfComponentsProps) => {
  const styles = createStyles();
  return (
    <View
      accessibilityLabel={heading + 'components'}
      accessible={true}
      accessibilityRole="none">
      <Text accessibilityRole="header" style={styles.heading}>
        {heading}
      </Text>
      <View style={styles.controlItems}>
        {items.map((item) => (
          <HomeComponentTile
            key={item.key}
            item={item}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

type GroupedListOfAllComponentsProps = {
  route: any;
  navigation: any;
};
const GroupedListOfAllComponents = ({
  route,
  navigation,
}: GroupedListOfAllComponentsProps) => {
  return (
    <View>
      {RNGalleryCategories.map((category) => (
        <ListOfComponents
          key={category.label}
          navigation={navigation}
          heading={category.label}
          items={RNGalleryList.filter((item) => item.type === category.label)}
        />
      ))}
    </View>
  );
};

type ComponentListPageProps = {
  route: any;
  navigation: any;
};
const ComponentListPage = ({route, navigation}: ComponentListPageProps) => {
  const styles = createStyles();
  const isScreenFocused = useIsFocused();

  const category = route.params?.category;

  return isScreenFocused ? (
    <View>
      <ScreenWrapper doNotInset={true}>
        <ScrollView>
          {category !== undefined ? (
            <View style={styles.container}>
              <ListOfComponents
                navigation={navigation}
                heading={category}
                items={RNGalleryList.filter((item) => item.type === category)}
              />
            </View>
          ) : (
            <View style={styles.container}>
              <Text accessibilityRole={'header'} style={styles.title}>
                All samples
              </Text>
              <GroupedListOfAllComponents
                route={route}
                navigation={navigation}
              />
            </View>
          )}
        </ScrollView>
      </ScreenWrapper>
    </View>
  ) : (
    <View />
  );
};

export {ComponentListPage, ListOfComponents};
