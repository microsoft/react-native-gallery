'use strict';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  PlatformColor,
  Pressable,
  Image,
} from 'react-native';
import type {ColorValue} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import type {IRNGalleryExample} from './RNGalleryList';
import {
  ColorWithSystemEffectMacOS,
  DynamicColorMacOS,
} from 'react-native-macos';

const controlItemBackgroundColor = Platform.select<ColorValue>({
  windows: PlatformColor('CardBackgroundFillColorDefaultBrush'),
  macos: PlatformColor('alternatingEvenContentBackgroundColor'),
  default: 'white',
});

const controlItemBorderColorRest = Platform.select<ColorValue>({
  windows: PlatformColor('CardStrokeColorDefaultBrush'),
  macos: PlatformColor('separatorColor'),
  default: 'black',
});
const controlItemBorderColorHover = Platform.select<ColorValue>({
  windows: PlatformColor('ControlStrokeColorSecondary'),
  macos: PlatformColor('gridColor'),
  default: 'black',
});
const controlItemBorderColorPressed = Platform.select<ColorValue>({
  windows: PlatformColor('TextFillColorSecondaryBrush'),
  macos: PlatformColor('gridColor'),
  default: 'black',
});

const controlItemTitleColorRest = Platform.select<ColorValue>({
  windows: PlatformColor('TextFillColorPrimaryBrush'),
  macos: PlatformColor('labelColor'),
  default: 'black',
});

const controlItemTitleColorHovered = Platform.select<ColorValue>({
  windows: PlatformColor('TextFillColorSecondaryBrush'),
  macos: PlatformColor('labelColor'),
  default: 'black',
});

const controlItemSubtitleColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextFillColorSecondaryBrush'),
  macos: PlatformColor('secondaryLabelColor'),
  default: 'black',
});

const accentColor = Platform.select<ColorValue>({
  windows: PlatformColor('AccentFillColorDefaultBrush'),
  macos: PlatformColor('controlAccentColor'),
  default: 'blue',
});

const textOnAccentColor = Platform.select<ColorValue>({
  windows: PlatformColor('TextOnAccentFillColorPrimaryBrush'),
  macos: 'white',
  default: 'white',
});

const createStyles = (colors: any, isHovered: boolean, isPressing: boolean) =>
  StyleSheet.create({
    controlItem: {
      // backgroundColor:
      //   colorScheme === 'light' ? 'rgb(236, 236, 236)' : 'rgb(50,50,50)',
      backgroundColor: ColorWithSystemEffectMacOS(
        DynamicColorMacOS({light: 'rgb(236, 236, 236)', dark: 'rgb(50,50,50)'}),
        isPressing ? 'pressed' : 'none',
      ),
      borderColor: isPressing
        ? controlItemBorderColorPressed
        : isHovered
        ? controlItemBorderColorHover
        : controlItemBorderColorRest,
      padding: 8,
      borderCurve: 'continuous',
      borderRadius: 12,
      alignItems: 'center',
      flexDirection: 'row',
      width: 360,
      height: 80,
    },
    textIcon: {
      fontFamily: 'Segoe MDL2 Assets',
      fontSize: 16,
      width: 72,
      textAlign: 'center',
    },
    controlItemIcon: {
      marginHorizontal: 12,
      width: 48,
      resizeMode: 'contain',
      aspectRatio: 1,
    },
    controlItemPlaceholderIcon: {
      // marginHorizontal: 12,
      margin: 12,
      width: 48,
      height: 48,
    },
    controlItemTitle: {
      // BodyStrongTextBlockStyle
      fontWeight: '600', // SemiBold
      color: isHovered
        ? controlItemTitleColorRest
        : controlItemTitleColorHovered,
    },
    controlItemSubtitle: {
      // CaptionTextBlockStyle
      color: controlItemSubtitleColor,
      fontSize: 12,
    },
    badgeContainer: {
      position: 'absolute',
      right: 12,
      top: 12,
    },
    newItemBadge: {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: accentColor,
    },
  });

const appleTypography = StyleSheet.create({
  headline: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: 'regular',
  },
});

type HomeComponentTileProps = {
  item: IRNGalleryExample;
  navigation: any;
};
const HomeComponentTile = ({item, navigation}: HomeComponentTileProps) => {
  // Comparable WinUI gallery control:
  // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/ItemTemplates.xaml#L7
  const {colors} = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const styles = createStyles(colors, isHovered, isPressing);

  // Workaround for accessibility label requirements:
  // 'The Name must not include the same text as the LocalizedControlType.'
  // The component _is_ the Image component, but that matches the role.
  // Note that WinUI3 gallery has the same problem. We'll use a workaround
  // to quiet the toolchain.
  const imageAccessibilityLabel = item.key === 'Image' ? 'Bitmap' : item.key;

  return (
    // accessibilityRole="listitem" would be appropriate here, but two problems:
    // - It's not in the type information, even though it works
    // - role="listitem" is not supported by RNW
    // - While you can get this to show as "list item", then you run afoul of:
    //   'The element's ControlType requires valid values for SizeOfSet and PositionInSet.'
    // As a result, sticking with "button"
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={
        item.key === 'Button' ? 'Button1 control' : item.key + ' control'
      }
      accessibilityHint={'click to view the ' + item.pageKey + ' sample page'}
      style={styles.controlItem}
      onPress={() => {
        navigation.navigate(item.key);
      }}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}>
      {item.imageIcon ? (
        <Image
          source={item.imageIcon}
          style={styles.controlItemIcon}
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel={imageAccessibilityLabel}
        />
      ) : (
        <View>
          <Image
            source={require('../../assets/ControlImages/Placeholder.png')}
            style={styles.controlItemPlaceholderIcon}
            accessible={true}
            accessibilityRole="image"
            accessibilityLabel={imageAccessibilityLabel}
          />
          <Text
            accessible={false}
            style={[
              styles.textIcon,
              {
                position: 'absolute',
                marginTop: 28,
                color: textOnAccentColor,
              },
            ]}>
            {item.textIcon}
          </Text>
        </View>
      )}
      <View style={{flexShrink: 1}}>
        <Text style={[styles.controlItemTitle, appleTypography.headline]}>
          {item.key}
        </Text>
        <View style={{height: 4}} />
        <Text style={[styles.controlItemSubtitle, appleTypography.body]}>
          {item.subtitle}
        </Text>
      </View>
      {/* {(item.new || item.recentlyUpdated) && (
        <View style={styles.badgeContainer}>
          <View style={styles.newItemBadge} />
        </View>
      )} */}
    </Pressable>
  );
};

export {HomeComponentTile};
