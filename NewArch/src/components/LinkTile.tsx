import {PlatformColor, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '../Navigation';
// import {HyperlinkButton} from 'react-native-xaml';
import { Hyperlink } from './Controls';

const createStyles = (colors: any) =>
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
      color: PlatformColor('TextControlForeground'),
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
      <Text accessibilityRole="header" style={styles.hyperlinkTileTitle}>
        {props.title}
      </Text>
      {props.links.map((hyp) => (
        <Hyperlink
          key={hyp.label}
          text={hyp.label}
          url={hyp.url}
        />
      ))}
    </View>
  );
}
