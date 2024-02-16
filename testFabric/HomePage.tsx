import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {ScreenWrapper} from './components/ScreenWrapper';
import RNGalleryList from './RNGalleryList';

const createStyles = () =>
  StyleSheet.create({
    heading: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 23,
      color: 'rgb(28, 28, 30)',
    },
    text: {
      paddingTop: 5,
      paddingBottom: 5,
      color: 'rgb(28, 28, 30)',
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
      color: 'rgb(28, 28, 30)',
    },
    description: {
      paddingRight: 20,
      color: 'rgb(28, 28, 30)',
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
    disabledButton: {
      color: '#007AFF',
      opacity: 0.5,
    }
  });

  const HomeContainer = (props: {heading: string; children: React.ReactNode}) => {
    const styles = createStyles();
    return (
      <View accessibilityLabel={props.heading + 'components'}>
        <Text accessibilityRole="header" style={styles.heading}>
          {props.heading}
        </Text>
        <View style={styles.homeContainer}>{props.children}</View>
      </View>
    );
  };

  const HomeComponentTile = (props: {index: number; navigation: any}) => {
    const styles = createStyles();
  
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
            backgroundColor: 'rgb(242, 242, 242)',
            borderColor: 'rgb(216, 216, 216)',
            borderWidth: 1,
            borderBottomWidth: pressed ? 1 : 2,
            paddingTop: 5,
            paddingBottom: 5,
            borderRadius: 4,
            alignItems: 'center',
            flexDirection: 'row',
            marginRight: 5,
            marginBottom: 5,
            opacity: RNGalleryList[props.index].component ? 1 : 0.5,
          },
        ]}
        onPress={() => {
          if (RNGalleryList[props.index].component) {
            props.navigation.push(RNGalleryList[props.index].key)
          }
        }}
        disabled={!RNGalleryList[props.index].component}>
        <Text style={styles.icon}>{RNGalleryList[props.index].icon}</Text>
        <Text style={[styles.text, {paddingRight: 10}]}>
          {RNGalleryList[props.index].key}
        </Text>
      </Pressable>
    );
  };

  const RenderHomeComponentTiles = (indicies: number[], navigation: any) => {
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
  var basicInput = [];
  var dateAndTime = [];
  var dialogsAndFlyouts = [];
  var layout = [];
  var text = [];
  var statusAndInfo = [];
  var media = [];
  for (var i = 0; i < RNGalleryList.length; i++) {
    if (RNGalleryList[i].type === 'Basic Input') {
      basicInput.push(i);
    } else if (RNGalleryList[i].type === 'Date and Time') {
      dateAndTime.push(i);
    } else if (RNGalleryList[i].type === 'Dialogs and Flyouts') {
      dialogsAndFlyouts.push(i);
    } else if (RNGalleryList[i].type === 'Layout') {
      layout.push(i);
    } else if (RNGalleryList[i].type === 'Text') {
      text.push(i);
    } else if (RNGalleryList[i].type === 'Status and Info') {
      statusAndInfo.push(i);
    } else if (RNGalleryList[i].type === 'Media') {
      media.push(i);
    }
  }
  return (
    <ScrollView>
      <HomeContainer heading="Basic Input">
        {RenderHomeComponentTiles(basicInput, navigation)}
      </HomeContainer>
      <HomeContainer heading="Date and Time">
        {RenderHomeComponentTiles(dateAndTime, navigation)}
      </HomeContainer>
      <HomeContainer heading="Dialogs and Flyouts">
        {RenderHomeComponentTiles(dialogsAndFlyouts, navigation)}
      </HomeContainer>
      <HomeContainer heading="Layout">
        {RenderHomeComponentTiles(layout, navigation)}
      </HomeContainer>
      <HomeContainer heading="Text">
        {RenderHomeComponentTiles(text, navigation)}
      </HomeContainer>
      <HomeContainer heading="Status and Info">
        {RenderHomeComponentTiles(statusAndInfo, navigation)}
      </HomeContainer>
      <HomeContainer heading="Media">
        {RenderHomeComponentTiles(media, navigation)}
      </HomeContainer>
    </ScrollView>
  );

}


export const HomePage: React.FunctionComponent<{navigation: any}> = ({navigation}) => {
    const styles = createStyles()

    return (
        <View>
          <ScreenWrapper>
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
    )
}