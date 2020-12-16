import {Linking, StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  hyperlink: {
    color: '#336699',
    paddingTop: 5,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
});

export function Hyperlink(props: {label: string; url: string}) {
  return (
    <Text style={styles.hyperlink} onPress={() => Linking.openURL(props.url)}>
      {props.label}
    </Text>
  );
}
