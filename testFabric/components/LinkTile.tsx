import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Hyperlink} from './Controls';
// import {useTheme} from '@react-navigation/native';
// import {HyperlinkButton} from 'react-native-xaml';

const createStyles = () =>
  StyleSheet.create({
    hyperlinkTile: {
      marginTop: 30,
      marginBottom: 10,
      marginRight: 30,
      alignItems: 'flex-start',
    },
    hyperlinkTileTitle: {
      marginBottom: 10,
      fontSize: 20,
    },
  });

export function LinkTile(props: {
  title: string;
  links: {label: string; url: string}[];
}) {
  // const {colors} = useTheme();
  const styles = createStyles();
  return (
    <View style={styles.hyperlinkTile}>
      <Text accessibilityRole="header" style={styles.hyperlinkTileTitle}>
        {props.title}
      </Text>
      {props.links.map(hyp => (
        <Hyperlink key={hyp.label} url={hyp.url} text={hyp.label} />
      ))}
    </View>
  );
}
