'use strict';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {useGlobal} from 'reactn';
import {Picker} from '@react-native-picker/picker';
import {Hyperlink} from './components/Hyperlink';

const styles = StyleSheet.create({
  heading: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 23,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  container: {
    padding: 10,
    alignSelf: 'stretch',
    height: '100%',
  },
  title: {
    fontWeight: '200',
    fontSize: 26,
    marginTop: 20,
    marginBottom: 10,
  },
  scrollView: {
    paddingRight: 20,
  },
});

const SettingContainer = (props: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <View>
      <Text style={styles.heading}>{props.heading}</Text>
      <View>{props.children}</View>
    </View>
  );
};

export const SettingsPage: React.FunctionComponent<{}> = () => {
  //@ts-ignore
  const [theme, setTheme] = useGlobal('theme');
  const PickerValueChanged = (value: string | number, position: number) => {
    //@ts-ignore
    setTheme(value);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <ScrollView style={styles.scrollView}>
        <SettingContainer heading="Theme Mode">
          <Picker
            style={{height: 50, width: 200}}
            onValueChange={PickerValueChanged}
            selectedValue={theme}>
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
            <Picker.Item label="Use System Setting" value="system" />
          </Picker>
        </SettingContainer>
        <SettingContainer heading="About">
          <Text style={styles.text}>
            Source code:{' '}
            <Hyperlink
              label="GitHub"
              url="https://github.com/microsoft/react-native-gallery"
            />
          </Text>
          <Text style={styles.text}>
            To clone this source repository: git clone
            https://github.com/microsoft/react-native-gallery
          </Text>
          <Text style={styles.text}>Version: 1.0.0.0</Text>
        </SettingContainer>
        <SettingContainer heading="Found a bug? Want a new sample?">
          <Text style={styles.text}>
            If you have found a bug within the React Native Gallery app, please
            file an issue on GitHub:
          </Text>
          <Hyperlink
            label="New React Native Gallery Bug Report"
            url="https://github.com/microsoft/react-native-gallery/issues/new"
          />
          <Text style={styles.text}>
            If you would like a new sample, request it on Github:
          </Text>
          <Hyperlink
            label="New Sample Request"
            url="https://github.com/microsoft/react-native-gallery/issues/new"
          />
          <Text style={styles.text}>
            If you have found a bug in your React Native Windows app (not in the
            React Native Gallery) and need help, file an issue on the React
            Native Windows GitHub:
          </Text>
          <Hyperlink
            label="New React Native Windows Bug Report"
            url="https://github.com/microsoft/react-native-windows/issues/new?assignees=&labels=bug&template=bug-report.md&title=Describe+the+problem"
          />
        </SettingContainer>
        <SettingContainer heading="Dependencies and References">
          <Hyperlink
            label="React Native for Windows and MacOS Website"
            url="https://microsoft.github.io/react-native-windows/"
          />
          <Hyperlink
            label="React Native Windows GitHub"
            url="https://github.com/microsoft/react-native-windows"
          />
        </SettingContainer>
        <SettingContainer heading="Disclaimer">
          <Text style={styles.text}>INSERT DISCLAIMER INFORMATION</Text>
        </SettingContainer>
      </ScrollView>
    </View>
  );
};
