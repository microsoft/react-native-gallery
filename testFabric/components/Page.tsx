import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {NativeControlBadge} from './NativeControlBadge';
import {CoreComponentBadge} from './CoreComponentBadge';
import {CommunityModuleBadge} from './CommunityModuleBadge';
import {LinkContainer} from './LinkContainer';
// import {useTheme, useIsFocused} from '@react-navigation/native';
import {ScreenWrapper} from './ScreenWrapper';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    alignSelf: 'stretch',
    height: '100%',
  },
  title: {
    fontWeight: '200',
    fontSize: 26,
  },
  titlePane: {
    marginTop: 44,
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

const DisplayNativeControlBadge = (
  wrappedNativeControl: {control: string; url: string} | undefined,
) => {
  if (wrappedNativeControl) {
    return <NativeControlBadge />;
  } else {
    return;
  }
};

const DisplayComponentTypeBadge = (componentType: string) => {
  if (componentType === 'Core') {
    return <CoreComponentBadge />;
  } else if (componentType === 'Community') {
    return <CommunityModuleBadge />;
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
  componentType: string;
  pageCodeUrl: string;
  documentation: {label: string; url: string}[];
  children: React.ReactNode;
}) {
  // const {colors} = useTheme();
  // const isScreenFocused = useIsFocused();
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.titlePane}>
        <Text
          accessible
          accessibilityRole={'header'}
          style={[styles.title, {color: 'black'}]}>
          {props.title}
        </Text>
        <View>
          {DisplayNativeControlBadge(props.wrappedNativeControl)}
          {DisplayComponentTypeBadge(props.componentType)}
        </View>
      </View>

      {props.description && (
        <Text style={[styles.description, {color: 'black'}]}>
          {props.description}
        </Text>
      )}

      <ScrollView style={styles.scrollView}>
        {props.children}
        {DisplayLinks(
          props.wrappedNativeControl,
          props.pageCodeUrl,
          props.documentation,
        )}
      </ScrollView>
    </ScreenWrapper>
  );
}
