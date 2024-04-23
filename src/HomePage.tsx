'use strict';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useTheme, useIsFocused} from '@react-navigation/native';
import RNGalleryList, {RNGalleryCategories} from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {HomeComponentTile} from './components/ControlItem';

const createStyles = (colors: any) =>
  StyleSheet.create({
    heading: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 23,
      color: colors.text,
    },
    text: {
      paddingTop: 5,
      paddingBottom: 5,
      color: colors.text,
    },
    container: {
      padding: 10,
      alignSelf: 'stretch',
      height: '100%',
      alignContent: 'flex-start',
      paddingBottom: 40,
    },
    title: {
      fontWeight: '200',
      fontSize: 26,
      marginTop: 20,
      marginBottom: 10,
      color: colors.text,
    },
    description: {
      paddingRight: 20,
      color: colors.text,
    },
    scrollView: {
      paddingRight: 20,
    },
    homeContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    icon: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
    },
    controlItems: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
  });

const HomeContainer = (props: {heading: string; children: React.ReactNode}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View
      accessibilityLabel={props.heading + 'components'}
      accessible={true}
      accessibilityRole="none">
      <Text accessibilityRole="header" style={styles.heading}>
        {props.heading}
      </Text>
      <View style={styles.homeContainer}>{props.children}</View>
    </View>
  );
};

const RenderHomeComponentTiles = (indicies: number[], navigation) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  var homeComponentTiles = [];
  for (var i = 0; i < indicies.length; i++) {
    let index = indicies[i];
    homeComponentTiles.push(
      <HomeComponentTile
        key={indicies[i]}
        pageKey={RNGalleryList[index].key}
        subtitle={RNGalleryList[index].subtitle}
        textIcon={RNGalleryList[index].textIcon}
        imageIcon={RNGalleryList[index].imageIcon}
        navigation={navigation}
      />,
    );
  }

  return <View style={styles.controlItems}>{homeComponentTiles}</View>;
};

const RenderPageContent = ({navigation}) => {
  let categoryMap = new Map();
  RNGalleryCategories.forEach((category) => {
    categoryMap.set(category, []);
  });

  RNGalleryList.forEach((item, index) => {
    let category = item.type;
    let categoryList = categoryMap.get(category);
    categoryList?.push(index);
  });

  return (
    <ScrollView>
      {RNGalleryCategories.map((category) => (
        <HomeContainer key={category} heading={category}>
          {RenderHomeComponentTiles(categoryMap.get(category), navigation)}
        </HomeContainer>
      ))}
    </ScrollView>
  );
};

export const HomePage: React.FunctionComponent<{}> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const isScreenFocused = useIsFocused();

  return isScreenFocused ? (
    <View>
      <ScreenWrapper style={styles.container}>
        <Text accessible accessibilityRole={'header'} style={styles.title}>
          Welcome to React Native Gallery!
        </Text>
        <Text style={styles.description}>
          React Native Gallery is a React Native Windows application which
          displays the range of React Native components with Windows support.
        </Text>
        <RenderPageContent navigation={navigation} />
      </ScreenWrapper>
    </View>
  ) : (
    <View />
  );
};
