'use strict';
import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

export const PressableExamplePage: React.FunctionComponent<{}> = () => {
  const [pressed, setPressed] = useState(false);
  const [timesPressed, setTimesPressed] = useState(0);
  const [currEvent, setCurrEvent] = useState('');

  const example1jsx = `import {Pressable} from 'react-native';

<Pressable>
  {({pressed}) => (
    <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
  )}
</Pressable>`

  const example2jsx = `import {Pressable} from 'react-native';
  
<Pressable style={{
    borderColor: 'black',
    width:140,
    borderRadius: 8,
    height: 25,
    backgroundColor: 'rgb(210, 230, 255)', 
    opacity: 0.5,
  }} 
  disabled={true} onPress={() => {setPressed(true)
  }}>
  {({pressed}) => (
    <Text style={{
      textAlign: 'center',
    }}>
      {pressed ? 'This will never be triggered.' : 'Disabled Pressable'}
    </Text>
  )}
</Pressable>`

  const example3jsx = `import {Pressable} from 'react-native';

<Pressable
  onPress={() => {
    setTimesPressed((current) => current + 1);
  }}
  style={({ pressed }) => [
    {
      backgroundColor: pressed
        ? 'rgb(210, 230, 255)'
        : 'rgb(242, 242, 242)',
      
      width: 120
    }
  ]}>
  {({ pressed }) => (
    <Text>
      {pressed ? \`Pressed \${timesPressed} times!\` : 'Press Me'}
    </Text>
  )}
</Pressable>`

  const example4jsx = `import {Pressable} from 'react-native';
  
<Pressable
  onPress={() => setCurrEvent('press')}
  onPressIn={() => setCurrEvent('pressIn')}
  onPressOut={() => setCurrEvent('pressOut')}
  onLongPress={() => setCurrEvent('longPress')}>
  <Text>Most recent event: {currEvent}</Text>
</Pressable>`


  return (
    <Page
      title="Pressable"
      description="A component that detects various touch interactions.">
      <Example title="A simple Pressable component." code={example1jsx}>
        <Pressable>
          {({pressed}) => (
            <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
      </Example>
      <Example title="A disabled Pressable component." code={example2jsx}>
        <Pressable style={{width:140, height: 50, borderRadius: 2, backgroundColor: 'lightgrey', opacity: 0.5,}} disabled={true} onPress={() => {setPressed(true)}}>
          {({pressed}) => (
            <Text style={{textAlign: 'center', paddingVertical: 15,}}>{pressed ? 'This will never be triggered.' : 'Disabled Pressable'}</Text>
          )}
        </Pressable>
      </Example>
      <Example title="A Pressable component with counter." code={example3jsx}>
        <Pressable
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'rgb(242, 242, 242)',
              width: 120
            }
          ]}>
          {({ pressed }) => (
            <Text>
              {pressed ? `Pressed ${timesPressed} times!` : 'Press Me'}
            </Text>
          )}
        </Pressable>
      </Example>
      <Example title="A Pressable component displaying feedback events." code={example4jsx}>
        <Pressable
            onPress={() => setCurrEvent('press')}
            onPressIn={() => setCurrEvent('pressIn')}
            onPressOut={() => setCurrEvent('pressOut')}
            onLongPress={() => setCurrEvent('longPress')}>
            <Text>Most recent event: {currEvent}</Text>
        </Pressable>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PressableExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
            {
                label: 'Pressable',
                url: 'https://reactnative.dev/docs/pressable',
            },
            {
                label: 'Pressable Source Code',
                url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/src/Libraries/Components/Pressable/Pressable.windows.js',
            },
        ]}
      />
    </Page>
  );
};
