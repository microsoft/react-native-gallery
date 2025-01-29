'use strict';
import React, {useState} from 'react';
import {AccessibilityInfo, Button, Text, TextInput, View} from 'react-native';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Clipboard from '@react-native-clipboard/clipboard';

export const ClipboardExamplePage: React.FunctionComponent<{}> = () => {
  const [textToCopy, setTextToCopy] = useState(
    'This text will be copied to the clipboard',
  );
  const [textFromClipboard, setTextFromClipboard] = useState('');
  const example1jsx = `<Button
  title="Copy text to the Clipboard"
  onPress={() => Clipboard.setString(textToCopy)}/>`;
  const example2jsx = `const getClipboardText = async () => {
  const text = await Clipboard.getString();
  setTextFromClipboard(text);
};
  
<Button
  title="Paste text from the Clipboard"
  onPress={() => getClipboardText()}/>
<Text>{textFromClipboard}</Text>`;

  const getClipboardText = async () => {
    const text = await Clipboard.getString();
    setTextFromClipboard(text);
  };

  return (
    <Page
      title="Clipboard"
      description="Copy and paste to and from the system Clipboard."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ClipboardExamplePage.tsx"
      documentation={[
        {
          label: 'Clipboard',
          url: 'https://github.com/react-native-clipboard/clipboard',
        },
      ]}>
      <Example title="Copy text to the Clipboard." code={example1jsx}>
        <View style={{alignItems: 'flex-start', gap: 12}}>
          <Button
            accessibilityLabel="Copy text to the Clipboard"
            title="Copy text to the Clipboard"
            onPress={() => {
              Clipboard.setString(textToCopy);
              AccessibilityInfo.announceForAccessibility(
                'Text copied to clipboard',
              );
            }}
          />
          <TextInput
            accessibilityLabel="Example set text to copy"
            value={textToCopy}
            onChangeText={setTextToCopy}
          />
        </View>
      </Example>

      <Example title="Paste text from the Clipboard." code={example2jsx}>
        <View style={{alignItems: 'flex-start', gap: 12}}>
          <Button
            accessibilityLabel="Paste text from the Clipboard"
            title="Paste text from the Clipboard"
            onPress={() => {
              getClipboardText();
              AccessibilityInfo.announceForAccessibility(
                'Text pasted from clipboard',
              );
            }}
          />
          <Text>{textFromClipboard}</Text>
        </View>
      </Example>
    </Page>
  );
};
