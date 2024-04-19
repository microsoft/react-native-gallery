'use strict';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  PlatformColor,
  Pressable,
  Linking,
} from 'react-native';

import {useTheme} from '@react-navigation/native';

import {showNotification} from '../components/Notifications';

export const WinRTExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();
  const example1jsx = `
  <View
    style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
    }}>
    <Pressable
      style={{
        width: 200,
        height: 50,
        borderRadius: 2,
        backgroundColor:
          Platform.OS === 'windows'
            ? PlatformColor('SystemColorButtonFaceColor')
            : 'silver',
      }}
      onPress={() => {
        showNotification({
          template:
            Windows.UI.Notifications.ToastTemplateType
              .toastImageAndText01,
          // The template schema can be found at https://docs.microsoft.com/previous-versions/windows/apps/hh761494(v=win.10)
          text: 'hello world',
          image: {
            src: 'https://microsoft.github.io/react-native-windows/img/header_logo.svg',
            alt: 'React logo',
          },
        });
      }}>
      <Text
        style={{
          textAlign: 'center',
          paddingVertical: 15,
          color: colors.text,
        }}>
        Press Me
      </Text>
    </Pressable>
  </View>`;

  return (
    <Page
      title="WinRT"
      description="A React Native Windows module that allows use of native (non-XAML) WinRT APIs"
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WinRTExamplePage.tsx"
      documentation={[
        {
          label: 'WinRT Source Code',
          url: 'https://github.com/asklar/react-native-winrt',
        },
      ]}>
      <Example title="A Windows Notification example" code={example1jsx}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              width: 200,
              height: 50,
              borderRadius: 2,
              backgroundColor:
                Platform.OS === 'windows'
                  ? PlatformColor('SystemColorButtonFaceColor')
                  : 'silver',
            }}
            onPress={() => {
              showNotification({
                template:
                  Windows.UI.Notifications.ToastTemplateType
                    .toastImageAndText01,
                // The template schema can be found at https://docs.microsoft.com/previous-versions/windows/apps/hh761494(v=win.10)
                text: 'hello world',
                image: {
                  src: 'https://microsoft.github.io/react-native-windows/img/header_logo.svg',
                  alt: 'React logo',
                },
              });
            }}>
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 15,
                color: colors.text,
              }}>
              Press Me
            </Text>
          </Pressable>
        </View>
      </Example>
    </Page>
  );
};
