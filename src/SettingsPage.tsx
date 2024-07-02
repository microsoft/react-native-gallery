'use strict';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
//import {ThemeMode, RawThemeContext, ThemeSetterContext} from './themes/Theme';
//import {Picker} from '@react-native-picker/picker';
// import {
//   HyperlinkButton,
//   Run,
//   TextBlock,
//   TextDecorations,
// } from 'react-native-xaml';
import {useTheme, useIsFocused} from '@react-navigation/native';
import {ScreenWrapper} from './components/ScreenWrapper';
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
      <Text style={styles.heading} accessibilityRole="header">
        {props.heading}
      </Text>
      <View style={styles.settingContainer}>{props.children}</View>
    </View>
  );
};

export const SettingsPage: React.FunctionComponent<{}> = () => {
  //const theme = React.useContext(RawThemeContext);
  //const setTheme = React.useContext(ThemeSetterContext);
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const isScreenFocused = useIsFocused();
  /*const PickerValueChanged = (value: ThemeMode) => {
    console.log('Setting theme to: ' + value);
    setTheme(value);
  };*/
  return isScreenFocused ? (
    <ScreenWrapper style={styles.container}>
      <Text accessibilityRole="header" style={styles.title}>
        Settings
      </Text>
      <ScrollView style={styles.scrollView}>
        {/* Tracking Issue: #17
        <SettingContainer heading="Theme Mode">
          <Picker
            style={{height: 50, width: 200}}
            onValueChange={PickerValueChanged}
            selectedValue={theme}
            itemStyle={{color: colors.text}}>
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
            <Picker.Item label="Use System Setting" value="system" />
          </Picker>
  </SettingContainer>*/}
        <SettingContainer heading="About">
          <Text style={styles.text}>Source code: </Text>
          <HyperlinkButton navigateUri="https://github.com/microsoft/react-native-gallery">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="React Native Gallery" />
            </TextBlock>
          </HyperlinkButton>
          <Text style={styles.text}>
            To clone this source repository: git clone
            https://github.com/microsoft/react-native-gallery
          </Text>
          <Text style={styles.text}>Version: 1.0.18.0</Text>
          <Text style={styles.text}>
            React Native Windows Version:{' '}
            {pkg.dependencies['react-native-windows']}
          </Text>
        </SettingContainer>
        {/* <SettingContainer heading="Found a bug? Want a new sample?">
          <Text style={styles.text}>
            If you have found a bug within the React Native Gallery app, please
            file an issue on GitHub:
          </Text>
          <HyperlinkButton navigateUri="https://github.com/microsoft/react-native-gallery/issues/new">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="New React Native Gallery Bug Report" />
            </TextBlock>
          </HyperlinkButton>

          <Text style={styles.text}>
            If you would like a new sample, request it on Github:
          </Text>
          <HyperlinkButton navigateUri="https://github.com/microsoft/react-native-gallery/issues/new">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="New Sample Request" />
            </TextBlock>
          </HyperlinkButton>
          <Text style={styles.text}>
            If you have found a bug in your React Native Windows app (not in the
            React Native Gallery) and need help, file an issue on the React
            Native Windows GitHub:
          </Text>
          <HyperlinkButton navigateUri="https://github.com/microsoft/react-native-windows/issues/new?assignees=&labels=bug&template=bug-report.md&title=Describe+the+problem">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="New React Native Windows Bug Report" />
            </TextBlock>
          </HyperlinkButton>
        </SettingContainer>
        <SettingContainer heading="Dependencies and References">
          <HyperlinkButton navigateUri="https://microsoft.github.io/react-native-windows/">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="React Native for Windows and MacOS Website" />
            </TextBlock>
          </HyperlinkButton>
          <HyperlinkButton navigateUri="https://github.com/microsoft/react-native-windows">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="React Native Windows GitHub" />
            </TextBlock>
          </HyperlinkButton>
        </SettingContainer>
        <SettingContainer heading="Disclaimer">
          <Text style={styles.text}>
            THIS CODE AND INFORMATION IS PROVIDED ‘AS IS’ WITHOUT WARRANTY OF
            ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
            THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
            PARTICULAR PURPOSE.{'\n\n'}Copyright (c) Microsoft Corporation. All
            rights reserved.
          </Text>
          <HyperlinkButton navigateUri="https://www.microsoft.com/en-us/servicesagreement/default.aspx">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="Microsoft Services Agreement" />
            </TextBlock>
          </HyperlinkButton>
          <HyperlinkButton navigateUri="https://privacy.microsoft.com/en-us/privacystatement">
            <TextBlock textDecorations={TextDecorations.Underline}>
              <Run text="Microsoft Privacy Statement" />
            </TextBlock>
          </HyperlinkButton>
        </SettingContainer> */}
      </ScrollView>
    </ScreenWrapper>
  ) : (
    <View />
  );
};
