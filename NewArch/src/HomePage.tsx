'use strict';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  PlatformColor,
} from 'react-native';
import React from 'react';
import {useTheme, useIsFocused} from './Navigation';
import RNGalleryList from './RNGalleryList';
import {ScreenWrapper} from './components/ScreenWrapper';
import {TileGallery} from './components/TileGallery';
import {ListOfComponents} from './ComponentListPage';
import {usePageFocusManagement} from './hooks/usePageFocusManagement';
// import LinearGradient from 'react-native-linear-gradient';

const createStyles = () =>
  StyleSheet.create({
    container: {
      padding: 10,
      paddingBottom: 40,
      paddingLeft: 36,
      alignSelf: 'stretch',
      height: '100%',
      alignContent: 'flex-start',
      backgroundColor: PlatformColor('Background'),
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
      backgroundColor: '#ced8e4',
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
    },
    heroBackgroundImage: {
      position: 'absolute',
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
      borderBottomLeftRadius: 8,
    },
    pageHeader: {},
    pageTitleContainer: {
      height: 224,
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

const PageTitle = ({ firstTileRef }: { firstTileRef?: React.RefObject<any> }) => {
  const styles = createStyles();

  return (
    // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/HomePageHeaderImage.xaml#L19
    <View>
      <View style={styles.heroGradient} />
      <Image
        source={require('../assets/GalleryHeaderImage.png')}
        style={[
          styles.heroBackgroundImage,
          {
            opacity: 0.9,
          },
        ]}
      />
      <View style={styles.pageHeader}>
        <View style={styles.pageTitleContainer}>
          <Text
            accessible
            accessibilityRole={'header'}
            style={styles.pageTitle}>
            React Native Gallery
          </Text>
        </View>
        <TileGallery firstTileRef={firstTileRef} />
      </View>
    </View>
  );
};

export const HomePage: React.FunctionComponent<{route?: any; navigation?: any}> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const isScreenFocused = useIsFocused();
  
  // Use the consistent focus management hook pattern
  const firstTileRef = usePageFocusManagement(navigation);

  return isScreenFocused ? (
    <View>
      <ScreenWrapper doNotInset={true}>
        <ScrollView>
          <PageTitle firstTileRef={firstTileRef} />
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
