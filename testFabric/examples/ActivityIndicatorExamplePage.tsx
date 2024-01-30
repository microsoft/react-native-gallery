import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const ActivityIndicatorExample: React.FunctionComponent<{}> = () => {
  const styles = StyleSheet.create({
    centering: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    gray: {
      backgroundColor: '#cccccc',
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 8,
    },
  });

  return (
    <Page
      title="ActivityIndicator"
      description="A component which displays a circular loading indicator"
      wrappedNativeControl={{
        control: 'Grid',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.grid?view=winrt-19041',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ImageExamplePage.tsx"
      documentation={[
        {
          label: 'ActivityIndicator',
          url: 'https://reactnative.dev/docs/activityindicator',
        },
        {
          label: 'ActivityIndicator Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/Microsoft.ReactNative/Views/ActivityIndicatorViewManager.h',
        },
      ]}>
      <Example title="A simple ActivityIndicator">
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          color="white"
          testID="default_activity_indicator"
          accessibilityLabel="Wait for content to load!"
        />
      </Example>

      <Example title="ActivityIndicators with custom colors">
        <View style={styles.horizontal}>
          <ActivityIndicator color="#0000ff" />
          <ActivityIndicator color="#aa00aa" />
          <ActivityIndicator color="#aa3300" />
          <ActivityIndicator color="#00aa00" />
        </View>
      </Example>

      <Example title="Large ActivityIndicator">
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          size="large"
          color="white"
        />
      </Example>
    </Page>
  );
};
