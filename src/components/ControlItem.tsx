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
import type {ImageSourcePropType} from 'react-native';
import {useTheme} from '@react-navigation/native';

const createStyles = (colors: any, isHovered: boolean, isPressing: boolean) =>
  StyleSheet.create({
    controlItem: {
      backgroundColor: PlatformColor('CardBackgroundFillColorDefaultBrush'),
      borderColor: isPressing
        ? PlatformColor('TextFillColorSecondaryBrush')
        : isHovered
        ? PlatformColor('ControlStrokeColorSecondary')
        : PlatformColor('CardStrokeColorDefaultBrush'),
      borderWidth: 1,
      borderBottomWidth: 1,
      padding: 8,
      borderRadius: 4,
      alignItems: 'center',
      flexDirection: 'row',
      gap: 16,
      width: 360,
      height: 90,
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
      color: isHovered
        ? PlatformColor('TextFillColorSecondaryBrush')
        : PlatformColor('TextFillColorPrimaryBrush'),
    },
    controlItemSubtitle: {
      // CaptionTextBlockStyle
      color: PlatformColor('TextFillColorSecondaryBrush'),
      fontSize: 12,
    },
  });

type HomeComponentTileProps = {
  pageKey: string;
  subtitle?: string;
  textIcon: string;
  imageIcon?: ImageSourcePropType;
  navigation: any;
};
const HomeComponentTile = ({
  pageKey,
  subtitle,
  textIcon,
  imageIcon,
  navigation,
}: HomeComponentTileProps) => {
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
  const imageAccessibilityLabel = pageKey === 'Image' ? 'Bitmap' : pageKey;

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
        pageKey === 'Button' ? 'Button1 control' : pageKey + ' control'
      }
      accessibilityHint={'click to view the ' + pageKey + ' sample page'}
      style={styles.controlItem}
      onPress={() => {
        navigation.navigate(pageKey);
      }}
      onPressIn={() => setIsPressing(true)}
      onPressOut={() => setIsPressing(false)}
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}>
      {imageIcon ? (
        <Image
          source={imageIcon}
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
            {textIcon}
          </Text>
        </View>
      )}
      <View style={{flexShrink: 1}}>
        <Text style={styles.controlItemTitle}>{pageKey}</Text>
        <Text style={styles.controlItemSubtitle}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};

export {HomeComponentTile};
