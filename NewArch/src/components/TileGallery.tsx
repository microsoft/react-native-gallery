'use strict';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking,
  PlatformColor,
  Image,
} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
//import {PathIcon, FontIcon} from 'react-native-xaml';
import {HorizontalListWithPageNavigation} from './PageScroller';

const createStyles = (isHovered: boolean, _isPressing: boolean) =>
  StyleSheet.create({
    headerTile: {
      // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/HeaderTile.xaml#L12
      // Should use 'AcrylicInAppFillColorDefaultBrush', blocked on https://github.com/microsoft/react-native-windows/issues/8861
      // (The acrylic does work, but does not update when the theme changes)
      backgroundColor: isHovered
        ? '#f3f3f3'
        : '#f9f9f9',
      borderColor: isHovered
        ? '#b6b9bc'
        : '#b7babd',
      borderWidth: 1,
      borderRadius: 8,
      padding: 24,
      gap: 4,
      width: 198,
      height: 220,
      alignItems: 'flex-start',
    },
    tileIconContent: {
      height: 56,
      marginBottom: 16,
    },
    tileTitle: {
      // BodyTextBlockStyle: https://github.com/microsoft/microsoft-ui-xaml/blob/winui3/release/1.4-stable/dxaml/xcp/dxaml/themes/generic.xaml#L13278
      fontSize: 18,
      color: PlatformColor('TextFillColorPrimaryBrush'),
    },
    tileDescription: {
      // CaptionTextBlockStyle: https://github.com/microsoft/microsoft-ui-xaml/blob/d4c4e539c55b562e78e7f026195d5b6c8af234ea/dxaml/xcp/dxaml/themes/generic.xaml#L13282
      color: PlatformColor('TextFillColorSecondaryBrush'),
      fontSize: 12,
      flexGrow: 1,
    },
    tileLinkIcon: {
      fontFamily: 'Segoe MDL2 Assets',
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      fontSize: 18,
      color: PlatformColor('TextFillColorPrimaryBrush'),
    },
    tileGalleryContainer: {
      flexDirection: 'row',
      gap: 12,
    },
  });

type HeaderTileType = PropsWithChildren<{
  title: string;
  description: string;
  link: string;
}>;
const HeaderTile = (props: HeaderTileType): JSX.Element => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const styles = createStyles(isHovered, isPressing);

  const openInNewWindowIcon = '\uE8A7';
  return (
    <Pressable
      style={styles.headerTile}
      onPress={() => Linking.openURL(props.link)}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      accessibilityRole="button"
      accessibilityLabel={props.title}>
      <View style={styles.tileIconContent}>{props.children}</View>
      <Text style={styles.tileTitle}>{props.title}</Text>
      <Text style={styles.tileDescription}>{props.description}</Text>
      <Text style={styles.tileLinkIcon} accessible={false}>
        {openInNewWindowIcon}
      </Text>
    </Pressable>
  );
};

const TileGallery = () => {
  const items = [
    <HeaderTile
      title="Getting started"
      description="An overview of app development options, tools, and samples."
      link="https://learn.microsoft.com/windows/apps/get-started/">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={require('../../assets/HomeHeaderTiles/Header-WinUIGallery.png')}
        style={{width: 56, height: 56}}
      />
    </HeaderTile>,
    <HeaderTile
      title="React Native"
      description="Website for React Native for Desktop."
      link="https://aka.ms/reactnative">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={require('../../assets/HomeHeaderTiles/tiny_logo.png')}
        style={{width: 64, height: 64}}
      />
    </HeaderTile>,
    <HeaderTile
      title="Windows design"
      description="Design guidelines and toolkits for creating native app experiences."
      link="https://learn.microsoft.com/windows/apps/design/">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={require('../../assets/HomeHeaderTiles/Header-WindowsDesign.png')}
        style={{width: 64, height: 64}}
      />
    </HeaderTile>,
    <HeaderTile
      title="GitHub"
      description="Repository for React Native for Windows."
      link="https://github.com/microsoft/react-native-windows">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={require('../../assets/HomeHeaderTiles/github-mark.png')}
        style={{width: 64, height: 64}}
      />
    </HeaderTile>,
    <HeaderTile
      title="Template Studio"
      description="Accelerates the creation of new WinUI apps using a wizard-based experience."
      link="https://marketplace.visualstudio.com/items?itemName=TemplateStudio.TemplateStudioForWinUICs">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={{uri: 'https://templatestudio.gallerycdn.vsassets.io/extensions/templatestudio/templatestudioforwinuics/5.5/1700023820218/Microsoft.VisualStudio.Services.Icons.Default'}}
        style={{width: 64, height: 64}}
      />
    </HeaderTile>,
    <HeaderTile
      title="Code samples"
      description="Find samples that demonstrate specific tasks, features, and APIs."
      link="https://github.com/microsoft/react-native-windows-samples">
      <Text style={{fontFamily: 'Segoe MDL2 Assets', fontSize: 58}}>&#xE943;</Text>
    </HeaderTile>,
    <HeaderTile
      title="Partner Center"
      description="Upload your app to the Store."
      link="https://developer.microsoft.com/windows/">
      <Image
        accessible={true}
        accessibilityRole="image"
        source={require('../../assets/HomeHeaderTiles/Header-Store.light.png')}
        style={{width: 64, height: 64}}
      />
    </HeaderTile>,
  ];

  // https://github.com/microsoft/WinUI-Gallery/blob/main/WinUIGallery/Controls/TileGallery.xaml
  // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/TileGallery.xaml#L137
  return (
    <HorizontalListWithPageNavigation
      spacing={12}
      data={items}
      renderItem={({item}) => item}
      style={{paddingBottom: 20}}
      ListHeaderComponent={() => <View style={{width: 36}} />}
      ListFooterComponent={() => <View style={{width: 36}} />}
    />
  );
};

export {TileGallery};
