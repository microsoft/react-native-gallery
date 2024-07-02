import React from 'react';
import {StyleSheet, View, Text, OpaqueColorValue} from 'react-native';
// TODO SAAD
// import {SymbolIcon} from 'react-native-xaml';

const styles = StyleSheet.create({
  badgeContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
  },
  badgeText: {
    fontSize: 15,
    fontWeight: '400',
    paddingRight: 4,
  },
});

export function Badge(props: {
  badgeColor: OpaqueColorValue;
  textColor: string;
  badgeTitle: string;
  icon: number;
  description: string;
}) {
  return (
    <View
      style={[styles.badgeContainer, {backgroundColor: props.badgeColor}]}
      tooltip={props.description}>
      <Text style={[styles.badgeText, {color: props.textColor}]}>
        {props.badgeTitle}
      </Text>
      {/* <SymbolIcon symbol={props.icon} foreground={props.textColor} /> */}
    </View>
  );
}
