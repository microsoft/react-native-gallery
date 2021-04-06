'use strict';
import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

export const PressableExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const [timesPressed, setTimesPressed] = useState(1);
  const [currEvent, setCurrEvent] = useState('');

  const example1jsx = `<Pressable>
  {({pressed}) => <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
</Pressable>`;

  const example2jsx = `<Pressable
  style={{
    width: 140,
    height: 50,
    borderRadius: 2,
    backgroundColor: colors.border,
    opacity: 0.5,
  }}
  disabled={true}>
  {({pressed}) => (
    <Text style={{textAlign: 'center', paddingVertical: 15}}>
      {pressed ? 'This will never be triggered.' : 'Disabled Pressable'}
    </Text>
  )}
</Pressable>`;

  const example3jsx = `<Pressable
  onPress={() => {
    setTimesPressed((current) => current + 1);
  }}
  style={({pressed}) => [
    {
      backgroundColor: pressed ? colors.primary : colors.border,
      width: 140,
      height: 50,
      borderRadius: 2,
    },
  ]}>
  {({pressed}) => (
    <Text
      style={{
        textAlign: 'center',
        paddingVertical: 15,
        color: pressed ? colors.background : color.text,
      }}>
      {pressed ? \`Pressed \${timesPressed} times!\` : 'Press Me'}
    </Text>
  )}
</Pressable>`;

  const example4jsx = `<Pressable
  style={{
    width: 200,
    height: 50,
    borderRadius: 2,
    backgroundColor: colors.border,
  }}
  onPress={() => setCurrEvent('press')}
  onPressIn={() => setCurrEvent('pressIn')}
  onPressOut={() => setCurrEvent('pressOut')}
  onLongPress={() => setCurrEvent('longPress')}>
  <Text style={{textAlign: 'center', paddingVertical: 15}}>
    Most recent event: {currEvent}
  </Text>
</Pressable>`;

  return (
    <Page
      title="Pressable"
      description="A component that detects various touch interactions."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PressableExamplePage.tsx"
      documentation={[
        {
          label: 'Pressable',
          url: 'https://reactnative.dev/docs/pressable',
        },
        {
          label: 'Pressable Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/master/vnext/src/Libraries/Components/Pressable/Pressable.windows.js',
        },
      ]}>
      <Example title="A simple Pressable component." code={example1jsx}>
        <Pressable>
          {({pressed}) => (
            <Text style={{color: colors.text}}>
              {pressed ? 'Pressed!' : 'Press Me'}
            </Text>
          )}
        </Pressable>
      </Example>
      <Example title="A disabled Pressable component." code={example2jsx}>
        <Pressable
          style={{
            width: 140,
            height: 50,
            borderRadius: 2,
            backgroundColor: colors.border,
            opacity: 0.5,
          }}
          disabled={true}>
          {({pressed}) => (
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 15,
                color: colors.text,
              }}>
              {pressed ? 'This will never be triggered.' : 'Disabled Pressable'}
            </Text>
          )}
        </Pressable>
      </Example>
      <Example title="A Pressable component with counter." code={example3jsx}>
        <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? colors.primary : colors.border,
              width: 140,
              height: 50,
              borderRadius: 2,
            },
          ]}>
          {({pressed}) => (
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 15,
                color: pressed ? '#FFFFFF' : colors.text,
              }}>
              {pressed ? `Pressed ${timesPressed} times!` : 'Press Me'}
            </Text>
          )}
        </Pressable>
      </Example>
      <Example
        title="A Pressable component displaying feedback events."
        code={example4jsx}>
        <Pressable
          style={{
            width: 200,
            height: 50,
            borderRadius: 2,
            backgroundColor: colors.border,
          }}
          onPress={() => setCurrEvent('press')}
          onPressIn={() => setCurrEvent('pressIn')}
          onPressOut={() => setCurrEvent('pressOut')}
          onLongPress={() => setCurrEvent('longPress')}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 15,
              color: colors.text,
            }}>
            Most recent event: {currEvent}
          </Text>
        </Pressable>
      </Example>
    </Page>
  );
};
