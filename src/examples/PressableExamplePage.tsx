'use strict';
import {Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

export const PressableExamplePage: React.FunctionComponent<{}> = () => {
  const [timesPressed1, setTimesPressed1] = useState(false);



  const example1jsx = `import {Pressable} from 'react-native';
<Pressable 
  onPress={() => {
      setTimesPressed1(true);
  }}>
  {({pressed}) => (
    <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
  )}
</Pressable>`

  const example2jsx = `import {Pressable} from 'react-native';

  
  `

  return (
    <Page
      title="Pressable"
      description="A component that detects various touch interactions.">
      <Example title="A simple Pressable component" code={example1jsx}>
        <Pressable 
          onPress={() => {
              setTimesPressed1(true);
          }}>
          {({pressed}) => (
            <Text>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>
      </Example>
      <Example title="Example 2" code={example2jsx}>
        <Text>Add Example 2 instance of component here.</Text>
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
