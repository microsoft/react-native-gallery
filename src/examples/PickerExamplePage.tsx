/* eslint-disable prettier/prettier */
'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Picker} from '@react-native-picker/picker';

export const PickerExamplePage: React.FunctionComponent<{}> = () => {
  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}} enabled={false}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  const example3jsx = `import {Picker} from '@react-native-picker/picker';
  
<Picker style={{height: 50, width: 100}}>
  <Picker.Item label="Option 1" value="Option 1"/>
  <Picker.Item label="Option 2" value="Option 2"/>
  <Picker.Item label="Option 3" value="Option 3"/>
</Picker>`;
  return (
    <Page
      title="Picker"
      description="A picker control that drops down a flyout of choices from which one can be chosen.">
      <Example title="A simple Picker." code={example1jsx}>
        <Picker style={{height: 50, width: 100}}>
          <Picker.Item label="Option 1" value="Option 1"/>
          <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
        </Picker>
      </Example>
      <Example title="A disabled Picker." code={example2jsx}>
        <Picker style={{height: 50, width: 100}} enabled={false}>
          <Picker.Item label="Option 1" value="Option 1"/>
          <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
        </Picker>
      </Example>
      <Example title="A colorful Picker." code={example3jsx}>
        <Picker style={{height: 50, width: 100}} itemStyle={{fontStyle:'italic', color:'#FF0000'}}>
          <Picker.Item label="Option 1" value="Option 1"/>
          <Picker.Item label="Option 2" value="Option 2"/>
          <Picker.Item label="Option 3" value="Option 3"/>
        </Picker>
      </Example>
    </Page>
  );
};
