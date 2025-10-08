'use strict';
import {StyleSheet, View, Text, ScrollView, PlatformColor} from 'react-native';
import React from 'react';
import {useIsFocused, useTheme} from './Navigation';
import RNGalleryList, {RNGalleryCategories} from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {HomeComponentTile} from './components/ControlItem';
import {usePageFocusManagement} from './hooks/usePageFocusManagement';

const createStyles = (colors: any) =>
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
      color: colors.text,
    },
    heading: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: '600',
      color: PlatformColor('TextFillColorPrimary'),
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
  firstTileRef?: React.RefObject<View>;
};
const ListOfComponents = ({
  navigation,
  heading,
  items,
  firstTileRef,
}: ListOfComponentsProps) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View
      accessibilityLabel={heading + ' components'}
      accessible={true}
      accessibilityRole="list"
      importantForAccessibility="yes">
      <Text accessibilityRole="header" style={styles.heading}>
        {heading}
      </Text>
      <View style={styles.controlItems}>
        {items.map((item, index) => (
          <HomeComponentTile
            key={item.key}
            ref={index === 0 ? firstTileRef : undefined}
            item={item}
            navigation={navigation}
          />
        ))}
      </View>
    </View>
  );
};

type GroupedListOfAllComponentsProps = {
  navigation: any;
  firstTileRef?: React.RefObject<View>;
};
const GroupedListOfAllComponents = ({
  navigation,
  firstTileRef,
}: GroupedListOfAllComponentsProps) => {
  return (
    <View>
      {RNGalleryCategories.map((category, categoryIndex) => {
        const items = RNGalleryList.filter((item) => item.type === category.label);
        if (items.length === 0) {
          return null;
        }
        
        return (
          <ListOfComponents
            key={category.label}
            navigation={navigation}
            heading={category.label}
            items={items}
            firstTileRef={categoryIndex === 0 ? firstTileRef : undefined}
          />
        );
      })}
    </View>
  );
};

type ComponentListPageProps = {
  route: any;
  navigation: any;
};
const ComponentListPage = ({route, navigation}: ComponentListPageProps) => {
  const firstTileRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();
  const styles = createStyles(colors);
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
                firstTileRef={firstTileRef}
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
                firstTileRef={firstTileRef}
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
