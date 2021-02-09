import React from 'react';
import {StyleSheet, Text, Image, Pressable, Alert} from 'react-native';

const styles = StyleSheet.create({
  badgeContainer: {
    height: 24,
    width: 220,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#505050',
    paddingRight: 4,
  },
  badgeIcon: {
    width: 14,
    resizeMode: 'contain',
  },
});

const badgeInfoAlert = () =>
  Alert.alert(
    'Wrapped Windows Control',
    'This badge marks that this component has been built by wrapping a native Windows XAML control resulting in the UI of the component matching its native Windows couterpart.',
    [{text: 'OK'}],
    {cancelable: false},
  );

export function NativeControlBadge() {
  return (
    <Pressable
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'white' : '#E6E6E6',
        },
        styles.badgeContainer,
      ]}
      onPress={badgeInfoAlert}>
      <Text style={styles.badgeText}>Wrapped Windows Control</Text>
      <Image
        style={styles.badgeIcon}
        source={require('../assets/monitor_icon.png')}
      />
    </Pressable>
  );
}
