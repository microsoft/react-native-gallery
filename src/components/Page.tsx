import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch',
    height: '100%',
  },
  title: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '200',
    fontSize: 26,
  },
  scrollView: {
    paddingRight: 20,
  },
});

export function Page(props: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      {props.description && <Text>{props.description}</Text>}

      <ScrollView style={styles.scrollView}>{props.children}</ScrollView>
    </View>
  );
}
