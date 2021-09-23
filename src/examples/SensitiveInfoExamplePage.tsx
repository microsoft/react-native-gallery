'use strict';
import {Text, View, TextInput} from 'react-native';
import {Button} from 'react-native-xaml';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import SInfo, {RNSensitiveInfoOptions} from 'react-native-sensitive-info';
import {useTheme} from '@react-navigation/native';

const SensitiveCredentials: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain',
};

export const SensitiveInfoExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example = `<Text style={{color: colors.primary}}>Key:key1 </Text>
  <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
    <TextInput
      style={{
        width: 200,
        height: 36,
        borderColor: colors.border,
        borderWidth: 1,
      }}
      value={value}
      editable={false}
    />
    <Button style={{margin: 20}} onClick={getItem} content={{string: "Get Item"}} />
  </View>
  <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
    <TextInput
      style={{
        width: 200,
        height: 36,
        borderColor: colors.border,
        borderWidth: 1,
      }}
      onChangeText={(text) => setNewValue(text)}
      value={newValue}
    />
    <Button onClick={setItem} content={{string: "Set Item"}} />
  </View>`;

  const [value, setValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const getItem = async () => {
    const result = await SInfo.getItem('key1', SensitiveCredentials);
    setValue(result);
    console.log(result);
  };

  const setItem = () => {
    const result = SInfo.setItem('key1', newValue, SensitiveCredentials);
    return result;
  };

  return (
    <Page
      title="Sensitive Info"
      description="The Sensitive Info module allows for the handling of sensitive information."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PermissionsExamplePage.tsx"
      documentation={[
        {
          label: 'Sensitive Info',
          url: 'https://mcodex.dev/react-native-sensitive-info',
        },
      ]}>
      <Example title="Sensitive Information" code={example}>
        <Text style={{color: colors.text, marginBottom: 10}}>
          This example works just like a key-value store.
        </Text>
        <Text style={{color: colors.text, marginBottom: 10}}>
          Data can be stored by inputting some text in the input box and
          pressing the "Set Item" button.
        </Text>
        <Text style={{color: colors.text, marginBottom: 10}}>
          Retrieving the data can be done by pressing the "Get Item" button
          afterwards.
        </Text>
        <Text style={{color: colors.text, fontWeight: '500'}}>Key:key1 </Text>
        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
          <TextInput
            style={{
              width: 200,
              height: 36,
              borderColor: colors.border,
              borderWidth: 1,
            }}
            onChangeText={(text) => setNewValue(text)}
            value={newValue}
          />
          <Button onClick={setItem} content={{string: 'Set Item'}} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', margin: 10}}>
          <TextInput
            style={{
              width: 200,
              height: 36,
              borderColor: colors.border,
              borderWidth: 1,
            }}
            value={value}
            editable={false}
          />
          <Button onClick={getItem} content={{string: 'Get Item'}} />
        </View>
      </Example>
    </Page>
  );
};
