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

  const HomeComponentTile = (props: {index: number}) => {
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
          },
        ]}
        /*onPress={() => {
          props.navigation.navigate(RNGalleryList[props.index].key);
        }}*/>
        <Text style={styles.icon}>{RNGalleryList[props.index].icon}</Text>
        <Text style={[styles.text, {paddingRight: 10}]}>
          {RNGalleryList[props.index].key}
        </Text>
      </Pressable>
    );
  };

  const RenderHomeComponentTiles = (indicies: number[]) => {
    var homeComponentTiles = [];
    for (var i = 0; i < indicies.length; i++) {
      homeComponentTiles.push(
        <HomeComponentTile
          key={indicies[i]}
          index={indicies[i]}
        />,
      );
    }
    return homeComponentTiles;
  };

const RenderPageContent = () => {
  var components = [];
  for (var i = 0; i < RNGalleryList.length; i++) {
    components.push(i);
  }
  return (
    <ScrollView>
      <HomeContainer heading="Components">
        {RenderHomeComponentTiles(components)}
      </HomeContainer>
    </ScrollView>
  )

}


export const HomePage: React.FunctionComponent<{}> = () => {
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
            <RenderPageContent />
          </ScreenWrapper>
        </View>
    )
}