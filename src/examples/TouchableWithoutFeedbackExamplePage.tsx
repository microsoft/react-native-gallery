'use strict';
import {Text} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';
import {TouchableWithoutFeedback} from 'react-native';

export const TouchableWithoutFeedbackExamplePage: React.FunctionComponent<{}> =
  () => {
    const [title, setTitle] = useState(0);
    const {colors} = useTheme();

    const example1jsx = `<TouchableWithoutFeedback>
    <Text style={{color: colors.text}}>TouchableWithoutFeedback</Text>
  </TouchableWithoutFeedback>`;

    const example2jsx = `<TouchableWithoutFeedback
    accessibilityRole="button"
    accessibilityLabel={'simple example TouchableWithoutFeedback'}
    onPress={() => {}}>
    <Text style={{color: 'white'}}>TouchableWithoutFeedback</Text>
    </TouchableWithoutFeedback>`;

    const example3jsx = `<TouchableWithoutFeedback
    accessibilityRole="button"
    accessibilityLabel={'simple example TouchableWithoutFeedback'}
    onPress={() => {}}
    disabled={true}>
    <Text style={{color: colors.text}}>TouchableWithoutFeedback</Text>
    </TouchableWithoutFeedback>`;

    const example4jsx = `<TouchableWithoutFeedback
    accessibilityRole="button"
    accessibilityLabel={'counter example TouchableWithoutFeedback'}
    accessibilityHint={'click me to increase the example counter'}
    accessibilityValue={{text: ${title}}}
    onPress={() => {
        setTitle(title + 1);
    }}>
    <Text style={{color: colors.text}}>{String(title)}</Text>
    </TouchableWithoutFeedback>`;

    const pressableMsg =
      'Note: It is strongly recommended to use the Pressable API instead of TouchableWithoutFeedback.';

    return (
      <Page
        title="Touchable Without Feedback"
        description="A View that does not provide feedback on touch."
        componentType="Core"
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TouchableWithoutFeedbackExamplePage.tsx"
        documentation={[
          {
            label: 'TouchableWithoutFeedback',
            url: 'https://reactnative.dev/docs/touchablewithoutfeedback',
          },
          {
            label: 'TouchableWithoutFeedback Source Code',
            url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/src/Libraries/Components/Touchable/TouchableWithoutFeedback.windows.js',
          },
        ]}>
        <Text style={{fontWeight: 'bold'}}>{pressableMsg}</Text>
        <Example title="A simple TouchableWithoutFeedback." code={example1jsx}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={'simple example TouchableWithoutFeedback'}
            onPress={() => {}}>
            <Text style={{color: colors.text}}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
        </Example>
        <Example title="A colored TouchableWithoutFeedback." code={example2jsx}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={'colored example TouchableWithoutFeedback'}
            onPress={() => {}}>
            <Text style={{color: 'green'}}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
        </Example>
        <Example
          title="A disabled TouchableWithoutFeedback."
          code={example3jsx}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={'disabled example TouchableWithoutFeedback'}
            onPress={() => {}}
            disabled={true}
            style={{
              height: 40,
              width: 150,
              backgroundColor: colors.text,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: colors.text}}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
        </Example>
        <Example title="A TouchableWithoutFeedback counter." code={example4jsx}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={'counter example TouchableWithoutFeedback'}
            accessibilityHint={'click me to increase the example counter'}
            accessibilityValue={{text: `${title}`}}
            onPress={() => {
              setTitle(title + 1);
            }}>
            <Text style={{color: colors.text}}>{String(title)}</Text>
          </TouchableWithoutFeedback>
        </Example>
      </Page>
    );
  };
