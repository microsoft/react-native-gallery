import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Hyperlink} from '../components/Hyperlink';
import {useTheme} from '@react-navigation/native';

const createStyles = (colors: any) =>
  StyleSheet.create({
    hyperlinkTile: {
      marginTop: 30,
      marginBottom: 10,
      marginRight: 30,
    },
    hyperlinkTileTitle: {
      marginBottom: 10,
      fontSize: 20,
      color: colors.text,
    },
  });

export function LinkTile(props: {
  title: string;
  links: {label: string; url: string}[];
}) {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={styles.hyperlinkTile}>
      <Text style={styles.hyperlinkTileTitle}>{props.title}</Text>
      {props.links.map((hyp) => (
        <Hyperlink key={hyp.label} label={hyp.label} url={hyp.url} />
      ))}
    </View>
  );
}
