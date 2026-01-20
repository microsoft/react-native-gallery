'use strict';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Linking,
  PlatformColor,
  Image,
  useColorScheme,
} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {PathIcon, FontIcon} from 'react-native-xaml';
import {HorizontalListWithPageNavigation} from './PageScroller';

const createStyles = (isHovered: boolean, _isPressing: boolean) =>
  StyleSheet.create({
    headerTile: {
      // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/Controls/HeaderTile.xaml#L12
      // Should use 'AcrylicInAppFillColorDefaultBrush', blocked on https://github.com/microsoft/react-native-windows/issues/8861
      // (The acrylic does work, but does not update when the theme changes)
      backgroundColor: isHovered
        ? PlatformColor('SolidBackgroundFillColorBaseBrush')
        : PlatformColor('SolidBackgroundFillColorTertiaryBrush'),
      borderColor: isHovered
        ? PlatformColor('ControlStrokeColorSecondary')
        : PlatformColor('SurfaceStrokeColorFlyoutBrush'),
      borderWidth: 1,
      borderRadius: 8,
      padding: 24,
      gap: 4,
      width: 198,
      minHeight: 220,
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
  const colorScheme = useColorScheme();
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
      <View style={{transform: [{scale: 2.05}], marginTop: 20}}>
        <PathIcon data="M21.7999992370605,0L19.220495223999,0.26007080078125 16.81787109375,1.00595712661743 14.6436157226563,2.18616962432861 12.7492189407349,3.74921894073486 11.1861696243286,5.64361572265625 10.0059566497803,7.81787109375 9.26007080078125,10.2204961776733 9,12.8000001907349 9.65248012542725,16.8459720611572 11.4694375991821,20.3591785430908 14.2401514053345,23.1291217803955 17.7539005279541,24.9453010559082 18.4305686950684,24.8080005645752 18.6273498535156,24.3296756744385 18.6207065582275,23.4247951507568 18.609375,21.9468746185303 16.4340572357178,22.0373229980469 15.1187467575073,21.4822216033936 14.4708204269409,20.7821025848389 14.2976503372192,20.4375 13.8297338485718,19.5214366912842 13.3685493469238,18.947265625 12.8765497207642,18.5656261444092 12.3995819091797,18.1091804504395 12.4844465255737,17.87890625 12.7874250411987,17.7974605560303 12.9647998809814,17.7875003814697 13.8134965896606,18.0311241149902 14.4276065826416,18.4802703857422 14.8007507324219,18.9127178192139 14.926549911499,19.1062507629395 15.8880548477173,20.1437015533447 16.9443283081055,20.494140625 17.9229640960693,20.416259765625 18.6515502929688,20.1687507629395 18.9645938873291,19.1242198944092 19.4640502929688,18.4593753814697 17.3543262481689,18.0241260528564 15.4833002090454,17.014066696167 14.1450357437134,15.1450166702271 13.6336002349854,12.1328001022339 13.9853601455688,10.2268438339233 14.9500007629395,8.69764995574951 14.7027282714844,7.54188776016235 14.7441072463989,6.53565359115601 15.0765495300293,5.30859994888306 15.2825078964233,5.28076791763306 15.9191312789917,5.34375619888306 17.0145378112793,5.71729135513306 18.596851348877,6.62109994888306 21.799976348877,6.19062519073486 25.004674911499,6.62265014648438 26.5845413208008,5.71818733215332 27.6791000366211,5.34472513198853 28.315746307373,5.28210020065308 28.5218753814697,5.31015014648438 28.8556652069092,6.53784370422363 28.8976573944092,7.5438346862793 28.6499996185303,8.69764995574951 29.6154251098633,10.2268533706665 29.9656257629395,12.1328001022339 29.453296661377,15.1497011184692 28.1123065948486,17.0164012908936 26.2366523742676,18.020601272583 24.120325088501,18.4500007629395 24.7275562286377,19.3355484008789 24.9890747070313,20.8187503814697 24.9804744720459,23.0584030151367 24.9718742370605,24.3312511444092 25.1693305969238,24.8128852844238 25.8531246185303,24.9453010559082 29.3641395568848,23.1273632049561 32.1326217651367,20.3568344116211 33.948070526123,16.8442134857178 34.5999984741211,12.8000001907349 34.3399276733398,10.2204961776733 33.5940399169922,7.81787109375 32.4138298034668,5.64361572265625 30.8507804870605,3.74921894073486 28.9563827514648,2.18616962432861 26.7821273803711,1.00595712661743 24.3795032501221,0.26007080078125 21.7999992370605,0z" />
      </View>
    </HeaderTile>,
    <HeaderTile
      title="Template Studio"
      description="Accelerates the creation of new WinUI apps using a wizard-based experience."
      link="https://marketplace.visualstudio.com/items?itemName=TemplateStudio.TemplateStudioForWinUICs">
      <View style={{transform: [{scale: 1.2}]}}>
        <PathIcon data="M39,30l-15,7.5-5-2.5v-9l-4-2v9l-3-1.5v-14.944l12,5.944,15.034-7.447L24,3.831,9,15.027v14.973L0,34.5l24,12,24-12-9-4.5ZM24,7.575v11.577l-9.323-4.618,9.323-6.959Z" />
      </View>
    </HeaderTile>,
    <HeaderTile
      title="Code samples"
      description="Find samples that demonstrate specific tasks, features, and APIs."
      link="https://github.com/microsoft/react-native-windows-samples">
      <View style={{height: 60, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Segoe MDL2 Assets',
            fontSize: 44,
            color: PlatformColor('TextFillColorPrimaryBrush'),
          }}>
          {'\uE943'}
        </Text>
      </View>
    </HeaderTile>,
    <HeaderTile
      title="Partner Center"
      description="Upload your app to the Store."
      link="https://developer.microsoft.com/windows/">
      <Image
        key={colorScheme}
        accessible={true}
        accessibilityRole="image"
        source={
          colorScheme === 'dark'
            ? require('../../assets/HomeHeaderTiles/Header-Store.dark.png')
            : require('../../assets/HomeHeaderTiles/Header-Store.light.png')
        }
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
      style={{paddingBottom: 0}}
      ListHeaderComponent={() => <View style={{width: 36}} />}
      ListFooterComponent={() => <View style={{width: 36}} />}
    />
  );
};

export {TileGallery};
