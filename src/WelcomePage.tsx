'use strict';
import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const createStyles = (colors: any) =>
  StyleSheet.create({
    container: {height: '100%', justifyContent: 'center', alignItems: 'center'},
    title: {fontSize: 24, color: colors.text},
  });

export const WelcomePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the RN Gallery!</Text>
      <Text />
      <Text style={{color: colors.text}}>
        To view an example page, click the Menu button and choose from the list
        in the drawer.
      </Text>
    </View>
  );
};
