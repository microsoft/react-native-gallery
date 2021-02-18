'use strict';
import {Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
import SInfo, { RNSensitiveInfoOptions } from 'react-native-sensitive-info';

const SensitiveCredentials: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain'
};

export const SensitiveInfoExamplePage: React.FunctionComponent<{}> = () => {
  const example = `import SInfo from 'react-native-sensitive-info';

const sensitiveCredentials: RNSensitiveInfoOptions = {
  sharedPreferencesName: 'mySharedPrefs',
  keychainService: 'myKeychain'
};

function Example() {

  const [item, setItem] = useState('');

  useEffect(() => {
    if (!item) {
      getItemAsync();
    }
  }, []);

  const getItemAsync = async () => {
    return SInfo.getItem('key1', sensitiveCredentials);
  }

  return (
    <Text>Sensitive Item: {item}</Text>
  );
}`;

  const [value, setValue] = useState('');
  const [newValue, setNewValue] = useState('');

  const getItem = async () => {
    const result = await SInfo.getItem('key1', SensitiveCredentials);
    setValue(result)
    console.log(result)
  }

  const setItem = () => {
    const result = SInfo.setItem('key1', newValue, SensitiveCredentials);
    return result;
  }

  return (
    <Page
      title="Sensitive Info"
      description="Allows handling of sensitive information via the react-native-sensitive-info module.">
      <Example title="Sensitive Information" code={example}>
      <Text style={{color: 'blue'}}>Key:key1 </Text>
        <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
          <TextInput 
            style={{ width: 200, height: 36, borderColor: 'gray', borderWidth: 1 }}
            value={value} editable={false} />
          <Button style={{ margin: 20 }} onPress={getItem} title="Get Item"></Button>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
          <TextInput 
            style={{ width: 200, height: 36, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={text => setNewValue(text)} 
            value={newValue} />
          <Button onPress={setItem} title="Set Item"></Button>
        </View>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PermissionsExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Sensitive Info',
            url:
              'https://mcodex.dev/react-native-sensitive-info',
          },
        ]}
      />
    </Page>
  );
}
