'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {
  TextBlock,
  Button,
  Hyperlink,
  Run,
  ToggleSwitch,
  ComboBox,
  ComboBoxItem,
  TextBox,
} from 'react-native-xaml';

export const XamlExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = '<TextBlock text="I am a XAML TextBlock." />';
  const example2jsx =
    "<Button content={{string: 'XAML Button'}} onClick={() => {}} />";
  const example3jsx = '<ToggleSwitch />';
  const example4jsx = `<TextBlock>
  <Run text="Here is a hyperlink to the " />
  <Hyperlink navigateUri="https://github.com/microsoft/react-native-gallery.com">
    <Run text="React Native Gallery" />
  </Hyperlink>
  <Run text=" repository." />
</TextBlock>`;
  const example5jsx = `<ComboBox text="ComboBox">
  <ComboBoxItem content={{string: 'ComboBoxItem 1'}} />
  <ComboBoxItem content={{string: 'ComboBoxItem 2'}} />
  <ComboBoxItem content={{string: 'ComboBoxItem 3'}} />
</ComboBox>`;
  const example6jsx = '<TextBox />';

  return (
    <Page
      title="Xaml"
      description="A React Native Windows view manager that allows direct use of the Windows XAML framework."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/XamlExamplePage.tsx"
      documentation={[
        {
          label: 'Xaml',
          url:
            'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls?view=winrt-19041',
        },
        {
          label: 'Xaml Source Code',
          url: 'https://github.com/asklar/react-native-xaml',
        },
      ]}>
      <Example title="A simple XAML TextBlock." code={example1jsx}>
        <TextBlock text="I am a XAML TextBlock." />
      </Example>
      <Example title="A simple XAML Button." code={example2jsx}>
        <Button content={{string: 'XAML Button'}} onClick={() => {}} />
      </Example>
      <Example title="A simple XAML ToggleSwitch." code={example3jsx}>
        <ToggleSwitch />
      </Example>
      <Example title="A simple Hyperlink." code={example4jsx}>
        <TextBlock>
          <Run text="Here is a hyperlink to the " />
          <Hyperlink navigateUri="https://github.com/microsoft/react-native-gallery.com">
            <Run text="React Native Gallery" />
          </Hyperlink>
          <Run text=" repository." />
        </TextBlock>
      </Example>
      <Example title="A simple ComboBox." code={example5jsx}>
        <ComboBox text="ComboBox">
          <ComboBoxItem content={{string: 'ComboBoxItem 1'}} />
          <ComboBoxItem content={{string: 'ComboBoxItem 2'}} />
          <ComboBoxItem content={{string: 'ComboBoxItem 3'}} />
        </ComboBox>
      </Example>
      <Example title="A simple TextBox." code={example6jsx}>
        <TextBox />
      </Example>
    </Page>
  );
};
