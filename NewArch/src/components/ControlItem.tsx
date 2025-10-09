'use strict';
import {
  StyleSheet,
  View,
  Text,
  PlatformColor,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import type {IRNGalleryExample} from '../RNGalleryList';
//import {useTheme} from '@react-navigation/native';

const createStyles = (colors: any, isHovered: boolean, isPressing: boolean) =>
  StyleSheet.create({
    controlItem: {
      backgroundColor: PlatformColor('Background'),
      borderColor: isPressing
        ? '#5f5f5f'
        : isHovered
        ? '#d1d1d1'
        : '#eaeaea',
      borderWidth: 1,
      borderBottomWidth: 1,
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 16,
      width: 360,
      minHeight: 90,
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
      height: 72,
      resizeMode: 'contain',
    },
    controlItemTitle: {
      // BodyStrongTextBlockStyle
      fontWeight: '600', // SemiBold
      color: PlatformColor('TextFillColorPrimary'),
    },
    controlItemSubtitle: {
      // CaptionTextBlockStyle
      color: PlatformColor('TextFillColorPrimary'),
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
      backgroundColor: '#0067c0',
    },
  });

type HomeComponentTileProps = {
  item: IRNGalleryExample;
  navigation: any;
};
const HomeComponentTile = React.forwardRef<any, HomeComponentTileProps>(
  ({item, navigation}, ref) => {
  // Comparable WinUI gallery control:
  // https://github.com/microsoft/WinUI-Gallery/blob/c3cf8db5607c71f5df51fd4eb45d0ce6e932d338/WinUIGallery/ItemTemplates.xaml#L7
  //const {colors} = useTheme();
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressing, setIsPressing] = React.useState(false);
  const colors = {};
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
      ref={ref}
      accessibilityRole="button"
      accessibilityLabel={
        item.key === 'Button' ? 'Button1 control' : item.key + ' control'
      }
      accessibilityHint={item.subtitle ? item.subtitle + '. Click to view the ' + item.key + ' sample page' : 'Click to view the ' + item.key + ' sample page'}
      style={styles.controlItem}
      onPress={() => {
        navigation.navigate(item.key);
      }}
      onAccessibilityTap={() => {
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
            style={styles.controlItemIcon}
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
                color: PlatformColor('TextOnAccentFillColorPrimaryBrush'),
              },
            ]}>
            {item.textIcon}
          </Text>
        </View>
      )}
      <View style={{flexShrink: 1}}>
        <Text style={styles.controlItemTitle}>{item.key}</Text>
        <Text style={styles.controlItemSubtitle}>{item.subtitle}</Text>
      </View>
      {(item.new || item.recentlyUpdated) && (
        <View style={styles.badgeContainer}>
          <View style={styles.newItemBadge} />
        </View>
      )}
    </Pressable>
  );
});

export {HomeComponentTile};
