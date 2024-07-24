'use strict';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  useColorScheme,
} from 'react-native';
import type {ColorValue} from 'react-native';
import React from 'react';
import {useTheme, useIsFocused} from '@react-navigation/native';
import RNGalleryList from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {TileGallery} from './components/TileGallery';
import {ListOfComponents} from './ComponentListPage';
import useHighContrastState from './hooks/useHighContrastState';

const createStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      paddingBottom: 40,
      paddingStart: 36,
      alignSelf: 'stretch',
      height: '100%',
      alignContent: 'flex-start',
    },
    scrollView: {
      paddingRight: 20,
    },
    heroGradient: {
      // position: 'absolute',
      // width: '100%',
      // height: '100%',
      flex: 1,
    },
    heroBackgroundImage: {
      position: 'absolute',
      resizeMode: 'cover',
      width: '100%',
      height: '99%',
    },
    pageHeader: {},
    pageTitleContainer: {
      // height: 204,
      height: 76,
      justifyContent: 'center',
    },
    pageTitle: {
      // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/HomePage.xaml#L82
      // TitleLargeTextBlockStyle
      fontSize: 40,
      fontWeight: '600', // SemiBold
      paddingLeft: 36,
    },
  });

const appleTypography = StyleSheet.create({
  largeTitle: {
    fontSize: 26,
    lineHeight: 32,
  },
  largeTitleEmphasized: {
    fontSize: 26,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});

interface BackgroundGradientProps {
  colorStop1: ColorValue;
  colorStop2: ColorValue;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const PageTitle = () => {
  const {colors} = useTheme();
  const colorScheme = useColorScheme();
  const styles = createStyles(colors);
  const isHighContrast = useHighContrastState();

  const colorStops = isHighContrast
    ? ['black', 'black']
    : colorScheme === 'light'
    ? ['#CED8E4', '#D5DBE3']
    : // Dark
      ['#020B20', '#020B20'];

  return (
    // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/HomePageHeaderImage.xaml#L19
    <View style={styles.heroGradient}>
      {/* <Image
        source={require('../assets/GalleryHeaderImage.png')}
        style={[
          styles.heroBackgroundImage,
          {
            opacity: colorScheme === 'light' ? 0.9 : 0.8,
            aspectRatio: 1,
            height: 330,
            // margin: 20,
          },
        ]}
      /> */}
      <View style={styles.pageHeader}>
        <View style={styles.pageTitleContainer}>
          <Text
            accessible
            accessibilityRole={'header'}
            style={[styles.pageTitle, appleTypography.largeTitle]}>
            React Native Gallery
          </Text>
        </View>
        <TileGallery />
      </View>
    </View>
  );
};

export const HomePage: React.FunctionComponent<{navigation: any}> = ({
  navigation,
}) => {
  const styles = createStyles();
  const isScreenFocused = useIsFocused();

  return isScreenFocused ? (
    <View>
      <ScreenWrapper doNotInset={true}>
        <ScrollView>
          <PageTitle />
          <View style={styles.container}>
            <ListOfComponents
              heading="Recently added samples"
              items={RNGalleryList.filter((item) => item.new)}
              navigation={navigation}
            />
            <ListOfComponents
              heading="Recently updated samples"
              items={RNGalleryList.filter((item) => item.recentlyUpdated)}
              navigation={navigation}
            />
            <ListOfComponents
              heading="All samples"
              items={RNGalleryList}
              navigation={navigation}
            />
          </View>
        </ScrollView>
      </ScreenWrapper>
    </View>
  ) : (
    <View />
  );
};
