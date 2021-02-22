'use strict';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const CheckBoxExamplePage: React.FunctionComponent<{}> = () => {
  return (
    <Page
      title="Checkbox"
      description="This is a page showing how to use a CheckBox"
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
      <Example title="Simple Checkbox" code={'<CheckBox />'}>
        <CheckBox />
      </Example>
      <Example title="Checked Checkbox" code={'<CheckBox value={true}/>'}>
        <CheckBox value={true} />
      </Example>
      <Example title="Disabled Checkbox" code={'<CheckBox disabled />'}>
        <CheckBox disabled />
      </Example>
      <Example
        title="Disabled Checked Checkbox"
        code={'<CheckBox disabled value={true} />'}>
        <CheckBox disabled value={true} />
      </Example>
      <Example
        title="Custom onCheckColor Checkmark"
        code={"<CheckBox onCheckColor='red' value={true} />"}>
        <CheckBox onCheckColor="red" value={true} />
      </Example>
      <Example
        title="Custom onTintColor Color"
        code={"<CheckBox onTintColor='red' value={true} />"}>
        <CheckBox onTintColor="red" value={true} />
      </Example>
      <Example
        title="Custom onFillColor Color"
        code={"<CheckBox onFillColor='red' value={true} />"}>
        <CheckBox onFillColor="red" value={true} />
      </Example>
      <Example
        title="Custom tintColor Color"
        code={"<CheckBox tintColor='red' />"}>
        <CheckBox tintColor="red" />
      </Example>
    </Page>
  );
};
