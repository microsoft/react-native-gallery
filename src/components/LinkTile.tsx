import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Hyperlink} from '../components/Hyperlink';

const styles = StyleSheet.create({
    hyperlinkTile: {
      marginTop: 30,
      marginBottom: 10,
      marginRight: 30,
    },
    hyperlinkTileTitle: {
      marginBottom: 10,
      fontSize: 20,
    },
  });

  export function LinkTile(props: {title: string; links: [{label: string, url: string}]}) {
    return (
        <View style={styles.hyperlinkTile}>
        <Text style={styles.hyperlinkTileTitle}>{props.title}</Text>
        {props.links.map(hyp => <Hyperlink label={hyp.label} url={hyp.url}/>)} 
        </View>
    );
  }