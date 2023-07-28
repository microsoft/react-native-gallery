'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '@react-navigation/native';

export const PickerExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = `<Picker style={{height: 50, width: 200}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  const example2jsx = `<Picker style={{height: 50, width: 200}} enabled={false}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  const example3jsx = `<Picker style={{height: 50, width: 200}} itemStyle={{color: colors.primary}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  return (
    <Page
      title="Picker"
      description="Picker is a control that drops down a flyout of choices from which one can be chosen."
      wrappedNativeControl={{
        control: 'ComboBox',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.combobox?view=winrt-19041',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PickerExamplePage.tsx"
      documentation={[
        {
          label: 'Picker',
          url: 'https://github.com/react-native-picker/picker',
        },
      ]}>
      <Example title="A simple Picker." code={example1jsx}>
        <Picker
          accessibilityLabel="Simple Example"
          style={{height: 50, width: 200}}
          itemStyle={{color: colors.text}}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
      <Example title="A disabled Picker." code={example2jsx}>
        <Picker
          accessibilityLabel="Disabled Example"
          style={{height: 50, width: 200}}
          enabled={false}
          itemStyle={{color: colors.text}}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
      <Example title="A colorful Picker." code={example3jsx}>
        <Picker
          accessibilityLabel="Colorful Example"
          style={{height: 50, width: 200}}
          itemStyle={{color: colors.primary}}>
          <Picker.Item label="Option 1" value="Option 1" />
          <Picker.Item label="Option 2" value="Option 2" />
          <Picker.Item label="Option 3" value="Option 3" />
        </Picker>
      </Example>
    </Page>
  );
};
