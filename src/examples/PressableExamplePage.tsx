'use strict';
import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const PressableExamplePage: React.FunctionComponent<{}> = () => {
  const [timesPressed, setTimesPressed] = useState(1);
  const [currEvent, setCurrEvent] = useState('');

  const example1jsx = `import {Pressable} from 'react-native';

<Pressable>
  {({pressed}) => <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
</Pressable>`;

  const example2jsx = `import {Pressable} from 'react-native';
  
<Pressable
  style={{
    width: 140,
    height: 50,
    borderRadius: 2,
    backgroundColor: 'lightgrey',
    opacity: 0.5,
  }}
  disabled={true}>
  {({pressed}) => (
    <Text style={{textAlign: 'center', paddingVertical: 15}}>
      {pressed ? 'This will never be triggered.' : 'Disabled Pressable'}
    </Text>
  )}
</Pressable>`;

  const example3jsx = `import {Pressable} from 'react-native';

<Pressable
  onPress={() => {
    setTimesPressed((current) => current + 1);
  }}
  style={({pressed}) => [
    {
      backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
      width: 140,
      height: 50,
      borderRadius: 2,
    },
  ]}>
  {({pressed}) => (
    <Text style={{textAlign: 'center', paddingVertical: 15}}>
      {pressed ? \`Pressed \${timesPressed} times!\` : 'Press Me'}
    </Text>
  )}
</Pressable>`;

  const example4jsx = `import {Pressable} from 'react-native';
  
<Pressable
  style={{
    width: 200,
    height: 50,
    borderRadius: 2,
    backgroundColor: 'lightgrey',
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
          {({pressed}) => <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>}
        </Pressable>
      </Example>
      <Example title="A disabled Pressable component." code={example2jsx}>
        <Pressable
          style={{
            width: 140,
            height: 50,
            borderRadius: 2,
            backgroundColor: 'lightgrey',
            opacity: 0.5,
          }}
          disabled={true}>
          {({pressed}) => (
            <Text style={{textAlign: 'center', paddingVertical: 15}}>
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
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'lightgrey',
              width: 140,
              height: 50,
              borderRadius: 2,
            },
          ]}>
          {({pressed}) => (
            <Text style={{textAlign: 'center', paddingVertical: 15}}>
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
            backgroundColor: 'lightgrey',
          }}
          onPress={() => setCurrEvent('press')}
          onPressIn={() => setCurrEvent('pressIn')}
          onPressOut={() => setCurrEvent('pressOut')}
          onLongPress={() => setCurrEvent('longPress')}>
          <Text style={{textAlign: 'center', paddingVertical: 15}}>
            Most recent event: {currEvent}
          </Text>
        </Pressable>
      </Example>
    </Page>
  );
};
