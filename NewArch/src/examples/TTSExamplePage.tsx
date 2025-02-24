'use strict';
import {
  Button,
  FlatList,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Tts, {Voice} from 'react-native-tts';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const TTSExamplePage: React.FunctionComponent<{}> = () => {
  const exampleJsx = `const onSpeak = () => { Tts.speak("Hello World"); }
<Button onPress={onSpeak} title="Speak"/>
  `;

  const [text, setText] = React.useState('Hello World');

  const [selectedVoice, setSelectedVoice] = React.useState<Voice>();
  const [voices, setVoices] = React.useState<Voice[]>([]);

  const onSpeak = () => {
    Tts.setDefaultVoice(selectedVoice!.id);
    Tts.speak(text);
  };

  const onVoicePress = (evt: GestureResponderEvent, voice: Voice) => {
    setSelectedVoice(voice);
  };

  const renderVoiceItem = ({item}: any) => {
    const voice = item as Voice;
    return (
      <View>
        <Button
          onPress={(evt) => onVoicePress(evt, voice)}
          title={voice.name}
          color={voice.id === selectedVoice?.id ? 'steelblue' : 'red'}
          accessibilityLabel={voice.name + ', ' + voice.language}
        />
      </View>
    );
  };

  Tts.voices().then((allVoices) => {
    if (voices.length === 0) {
      setVoices(allVoices);
      setSelectedVoice(allVoices[0]);
    }
  });

  return (
    <Page
      title="Text-to-Speech"
      description="Provides text-to-speech services using the OS native text-to-speech APIs."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TTSExamplePage.tsx"
      documentation={[
        {
          label: 'TTS',
          url: 'https://github.com/ak1394/react-native-tts',
        },
      ]}>
      <Example title="Speak" code={exampleJsx}>
        <View style={{marginBottom: 8}}>
          <TextInput
            accessibilityLabel="Enter text here"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(value: string) => setText(value)}
            value={text}
          />
        </View>
        <Button accessibilityLabel="Speak" onPress={onSpeak} title="Speak" />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingVertical: 16,
          }}>
          Voices
        </Text>
        <FlatList
          data={voices}
          renderItem={renderVoiceItem}
          keyExtractor={(voice) => voice.id}
          style={styles.container}
          ItemSeparatorComponent={() => <View style={{margin: 4}} />}
        />
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {},
});
