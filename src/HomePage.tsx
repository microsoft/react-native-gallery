'use strict';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme, useIsFocused} from '@react-navigation/native';
import RNGalleryList, {RNGalleryCategories} from './RNGalleryList';
import {ScrollView} from 'react-native';
import {ScreenWrapper} from './components/ScreenWrapper';

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
      paddingRight: 10,
      paddingLeft: 10,
    },
  });

const HomeContainer = (props: {heading: string; children: React.ReactNode}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View accessibilityLabel={props.heading + 'components'}>
      <Text accessibilityRole="header" style={styles.heading}>
        {props.heading}
      </Text>
      <View style={styles.homeContainer}>{props.children}</View>
    </View>
  );
};

const HomeComponentTile = (props: {index: number; navigation}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        RNGalleryList[props.index].key === 'Button'
          ? 'Button1 control'
          : RNGalleryList[props.index].key + ' control'
      }
      accessibilityHint={
        'click to view the ' + RNGalleryList[props.index].key + ' sample page'
      }
      style={({pressed}) => [
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
          borderWidth: 1,
          borderBottomWidth: pressed ? 1 : 2,
          paddingTop: 5,
          paddingBottom: 5,
          borderRadius: 4,
          alignItems: 'center',
          flexDirection: 'row',
          marginRight: 5,
          marginBottom: 5,
        },
      ]}
      onPress={() => {
        props.navigation.navigate(RNGalleryList[props.index].key);
      }}>
      <Text style={styles.icon}>{RNGalleryList[props.index].icon}</Text>
      <Text style={[styles.text, {paddingRight: 10}]}>
        {RNGalleryList[props.index].key}
      </Text>
    </Pressable>
  );
};

const RenderHomeComponentTiles = (indicies: number[], navigation) => {
  var homeComponentTiles = [];
  for (var i = 0; i < indicies.length; i++) {
    homeComponentTiles.push(
      <HomeComponentTile
        key={indicies[i]}
        index={indicies[i]}
        navigation={navigation}
      />,
    );
  }
  return homeComponentTiles;
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
