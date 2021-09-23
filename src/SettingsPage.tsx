'use strict';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {ThemeMode, RawThemeContext, ThemeSetterContext} from './themes/Theme';
import {HyperlinkButton, ComboBoxItem, ComboBox} from 'react-native-xaml';
import {useTheme} from '@react-navigation/native';
var pkg = require('../package.json');
const createStyles = (colors: any) =>
  StyleSheet.create({
    heading: {
      marginTop: 30,
      marginBottom: 10,
      fontSize: 23,
      color: colors.text,
    },
    text: {
      paddingTop: 5,
      paddingBottom: 5,
      color: colors.text,
    },
    container: {
      padding: 10,
      alignSelf: 'stretch',
      height: '100%',
      alignContent: 'flex-start',
    },
    title: {
      fontWeight: '200',
      fontSize: 26,
      marginTop: 20,
      marginBottom: 10,
      color: colors.text,
    },
    scrollView: {
      paddingRight: 20,
    },
    settingContainer: {
      alignItems: 'flex-start',
    },
  });

const SettingContainer = (props: {
  heading: string;
  children: React.ReactNode;
}) => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  return (
    <View>
      <Text style={styles.heading}>{props.heading}</Text>
      <View style={styles.settingContainer}>{props.children}</View>
    </View>
  );
};

export const SettingsPage: React.FunctionComponent<{}> = (props) => {
  const theme = React.useContext(RawThemeContext);
  const setTheme = React.useContext(ThemeSetterContext);
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const ValueChanged = (args: any) => {
    const value = args.nativeEvent.selectedValue.value;
    if (value === 'Light') {
      setTheme('light');
    } else if (value === 'Dark') {
      setTheme('dark');
    } else if (value === 'Use System Setting') {
      setTheme('system');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <ScrollView style={styles.scrollView}>
        <SettingContainer heading="Theme Mode">
          <ComboBox
            onSelectionChanged={ValueChanged}
            placeholderText="Select Theme"
            width={200}>
            <ComboBoxItem content={{string: 'Light'}} />
            <ComboBoxItem content={{string: 'Dark'}} />
            <ComboBoxItem content={{string: 'Use System Setting'}} />
          </ComboBox>
        </SettingContainer>
        <SettingContainer heading="About">
          <Text style={styles.text}>
            Source code:{' '}
            <HyperlinkButton
              content={{string: 'GitHub'}}
              navigateUri="https://github.com/microsoft/react-native-gallery"
            />
          </Text>
          <Text style={styles.text}>
            To clone this source repository: git clone
            https://github.com/microsoft/react-native-gallery
          </Text>
          <Text style={styles.text}>Version: {props.appVersion}</Text>
          <Text style={styles.text}>
            React Native Windows Version:{' '}
            {pkg.dependencies['react-native-windows']}
          </Text>
        </SettingContainer>
        <SettingContainer heading="Found a bug? Want a new sample?">
          <Text style={styles.text}>
            If you have found a bug within the React Native Gallery app, please
            file an issue on GitHub:
          </Text>
          <HyperlinkButton
            content={{string: 'New React Native Gallery Bug Report'}}
            navigateUri="https://github.com/microsoft/react-native-gallery/issues/new"
          />
          <Text style={styles.text}>
            If you would like a new sample, request it on Github:
          </Text>
          <HyperlinkButton
            content={{string: 'New Sample Request'}}
            navigateUri="https://github.com/microsoft/react-native-gallery/issues/new"
          />
          <Text style={styles.text}>
            If you have found a bug in your React Native Windows app (not in the
            React Native Gallery) and need help, file an issue on the React
            Native Windows GitHub:
          </Text>
          <HyperlinkButton
            content={{string: 'New React Native Windows Bug Report'}}
            navigateUri="https://github.com/microsoft/react-native-windows/issues/new?assignees=&labels=bug&template=bug-report.md&title=Describe+the+problem"
          />
        </SettingContainer>
        <SettingContainer heading="Dependencies and References">
          <HyperlinkButton
            content={{string: 'React Native for Windows and MacOS Website'}}
            navigateUri="https://microsoft.github.io/react-native-windows/"
          />
          <HyperlinkButton
            content={{string: 'React Native Windows GitHub'}}
            navigateUri="https://github.com/microsoft/react-native-windows"
          />
        </SettingContainer>
        <SettingContainer heading="Disclaimer">
          <Text style={styles.text}>
            THIS CODE AND INFORMATION IS PROVIDED ‘AS IS’ WITHOUT WARRANTY OF
            ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
            PARTICULAR PURPOSE.{'\n\n'}Copyright (c) Microsoft Corporation. All
            rights reserved.
          </Text>
          <HyperlinkButton
            content={{string: 'Microsoft Services Agreement'}}
            navigateUri="https://www.microsoft.com/en-us/servicesagreement/default.aspx"
          />
          <HyperlinkButton
            content={{string: 'Microsoft Privacy Statement'}}
            navigateUri="https://privacy.microsoft.com/en-us/privacystatement"
          />
        </SettingContainer>
      </ScrollView>
    </View>
  );
};
