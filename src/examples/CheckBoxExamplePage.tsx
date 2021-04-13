'use strict';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

export const CheckBoxExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();
  return (
    <Page
      title="Checkbox"
      description="The Checkbox component lets the user select a combination of binary options."
      wrappedNativeControl={{
        control: 'CheckBox',
        url:
          'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.checkbox?view=winrt-19041',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/CheckBoxExamplePage.tsx"
      documentation={[
        {
          label: 'Checkbox',
          url: 'https://github.com/react-native-checkbox/react-native-checkbox',
        },
      ]}>
      <Example title="A simple Checkbox." code={'<CheckBox />'}>
        <CheckBox />
      </Example>
      <Example title="A checked Checkbox." code={'<CheckBox value={true}/>'}>
        <CheckBox value={true} />
      </Example>
      <Example title="A disabled Checkbox." code={'<CheckBox disabled />'}>
        <CheckBox disabled />
      </Example>
      <Example
        title="A disabled checked Checkbox."
        code={'<CheckBox disabled value={true} />'}>
        <CheckBox disabled value={true} />
      </Example>
      <Example
        title="A colored check Checkbox."
        code={'<CheckBox onCheckColor={colors.primary} value={true} />'}>
        <CheckBox onCheckColor={colors.primary} value={true} />
      </Example>
      <Example
        title="A Checkbox with colored border when checked and focused."
        code={'<CheckBox onTintColor={colors.primary} value={true} />'}>
        <CheckBox onTintColor={colors.primary} value={true} />
      </Example>
      <Example
        title="A Checkbox colored when checked."
        code={'<CheckBox onFillColor={colors.primary} value={true} />'}>
        <CheckBox onFillColor={colors.primary} value={true} />
      </Example>
      <Example
        title="A Checkbox colored when unchecked."
        code={'<CheckBox tintColor={colors.primary} />'}>
        <CheckBox tintColor={colors.primary} />
      </Example>
    </Page>
  );
};
