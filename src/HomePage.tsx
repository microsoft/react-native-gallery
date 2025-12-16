'use strict';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {useTheme, useIsFocused} from '@react-navigation/native';
import RNGalleryList from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {TileGallery} from './components/TileGallery';
import {ListOfComponents} from './ComponentListPage';
import LinearGradient from 'react-native-linear-gradient';

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
    scrollView: {
      paddingRight: 20,
    },
    icon: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
    },
    heroGradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    heroBackgroundImage: {
      position: 'absolute',
      resizeMode: 'cover',
      width: '100%',
      height: '99%',
    },
    pageHeader: {},
    pageTitleContainer: {
      height: 204,
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

const PageTitle = () => {
  const {colors} = useTheme();
  const colorScheme = useColorScheme();
  const styles = createStyles(colors);

  return (
    // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/HomePageHeaderImage.xaml#L19
    <View>
      <LinearGradient
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        colors={
          colorScheme === 'light'
            ? ['#CED8E4', '#D5DBE3']
            : ['#020B20', '#020B20']
        }
        style={styles.heroGradient}
      />
      <Image
        source={require('../assets/GalleryHeaderImage.png')}
        style={[
          styles.heroBackgroundImage,
          {
            opacity: colorScheme === 'light' ? 0.9 : 0.8,
          },
        ]}
      />
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 0, y: 1.5}}
        colors={
          colorScheme === 'light'
            ? ['#f9f9f900', '#f9f9f9FF']
            : ['#26262600', '#262626FF']
        }
        style={styles.heroGradient}
      />
      <View style={styles.pageHeader}>
        <View style={styles.pageTitleContainer}>
          <Text
            accessible
            accessibilityRole={'header'}
            style={styles.pageTitle}
            allowFontScaling={true}>
            React Native Gallery
          </Text>
        </View>
        <TileGallery />
      </View>
    </View>
  );
};

export const HomePage: React.FunctionComponent<{}> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
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
          </View>
        </ScrollView>
      </ScreenWrapper>
    </View>
  ) : (
    <View />
  );
};
