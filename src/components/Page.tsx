import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeControlBadge} from './NativeControlBadge';
import {LinkContainer} from './LinkContainer';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch',
    height: '100%',
  },
  title: {
    fontWeight: '200',
    fontSize: 26,
  },
  titlePane: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  description: {
    paddingRight: 20,
  },
  scrollView: {
    paddingRight: 20,
  },
});

const DisplayBadge = (
  wrappedNativeControl: {control: string; url: string} | undefined,
) => {
  if (wrappedNativeControl) {
    return <NativeControlBadge />;
  } else {
    return;
  }
};

const DisplayLinks = (
  wrappedNativeControl: {control: string; url: string} | undefined,
  pageCodeUrl: string,
  documentation: {label: string; url: string}[],
) => {
  if (wrappedNativeControl) {
    return (
      <LinkContainer
        pageCodeUrl={pageCodeUrl}
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={documentation.concat({
          label: 'Wrapped XAML Control: ' + wrappedNativeControl.control,
          url: wrappedNativeControl.url,
        })}
      />
    );
  } else {
    return (
      <LinkContainer
        pageCodeUrl={pageCodeUrl}
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={documentation}
      />
    );
  }
};

export function Page(props: {
  title: string;
  description?: string;
  wrappedNativeControl?: {control: string; url: string};
  pageCodeUrl?: string;
  documentation?: {label: string; url: string}[];
  children: React.ReactNode;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.titlePane}>
        <Text style={styles.title}>{props.title}</Text>
        {DisplayBadge(props.wrappedNativeControl)}
      </View>

      {props.description && <Text>{props.description}</Text>}

      <ScrollView style={styles.scrollView}>
        {props.children}
        {DisplayLinks(
          props.wrappedNativeControl,
          props.pageCodeUrl,
          props.documentation,
        )}
      </ScrollView>
    </View>
  );
}
