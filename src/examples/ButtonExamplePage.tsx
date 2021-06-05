'use strict';
import {Button} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

export const ButtonExamplePage: React.FunctionComponent<{}> = () => {
  const [title, setTitle] = useState(0);
  const {colors} = useTheme();

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
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ButtonExamplePage.tsx"
      documentation={[
        {
          label: 'Button',
          url: 'https://reactnative.dev/docs/button',
        },
        {
          label: 'Button Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/main/vnext/src/Libraries/Components/Button.windows.js',
        },
      ]}>
      <Example title="A simple Button." code={example1jsx}>
        <Button title="Button" onPress={() => {}} />
      </Example>
      <Example title="A colored Button." code={example2jsx}>
        <Button title="Button" color={colors.primary} onPress={() => {}} />
      </Example>
      <Example title="A disabled Button." code={example3jsx}>
        <Button title="Button" disabled={true} onPress={() => {}} />
      </Example>
      <Example title="A counter Button." code={example4jsx}>
        <Button
          title={String(title)}
          onPress={() => {
            setTitle(title + 1);
          }}
        />
      </Example>
    </Page>
  );
};
