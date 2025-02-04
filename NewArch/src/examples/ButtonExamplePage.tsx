'use strict';
import {Button, Platform, PlatformColor} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const ButtonExamplePage: React.FunctionComponent<{}> = () => {
  const [title, setTitle] = useState(0);

  const example1jsx = '<Button title="Button" onPress={() => {}} />';
  const example2jsx =
    '<Button title="Button" color={colors.primary} onPress={() => {}} />';
  const example3jsx =
    '<Button title="Button" disabled={true} onPress={() => {}} />';
  const example4jsx = `<Button
  title={String(title)}
  onPress={() => {
    setTitle(title + 1);
  }}
/>`;

  return (
    <Page
      title="Button"
      description="A basic button component with a minimal level of customization. If you are looking for a more customizable, pressable component, see Touchable and Pressable."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ButtonExamplePage.tsx"
      documentation={[
        {
          label: 'Button',
          url: 'https://reactnative.dev/docs/button',
        },
        {
          label: 'Button Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/src/Libraries/Components/Button.windows.js',
        },
      ]}>
      <Example title="A simple Button." code={example1jsx}>
        <Button
          title="Button"
          accessibilityLabel={'example simple button1'}
          onPress={() => {}}
        />
      </Example>
      <Example title="A colored Button." code={example2jsx}>
        <Button
          title="Button"
          color={
            Platform.OS === 'windows'
              ? 'blue'
              : 'silver'
          }
          accessibilityLabel={'example colored button2'}
          onPress={() => {}}
        />
      </Example>
      <Example title="A disabled Button." code={example3jsx}>
        <Button
          title="Button"
          accessibilityLabel={'example disabled button3'}
          disabled={true}
          onPress={() => {}}
        />
      </Example>
      <Example title="A counter Button." code={example4jsx}>
        <Button
          accessibilityLabel={'example button4 counter'}
          accessibilityHint={'click me to increase the example counter'}
          title={String(title)}
          onPress={() => {
            setTitle(title + 1);
          }}
        />
      </Example>
    </Page>
  );
};
