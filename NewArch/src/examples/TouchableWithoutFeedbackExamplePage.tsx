'use strict';
import {Text, View, AccessibilityInfo} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {TouchableWithoutFeedback} from 'react-native-windows';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const TouchableWithoutFeedbackExamplePage: React.FunctionComponent<{
  navigation?: any;
}> = ({navigation}) => {
    const firstTouchableWithoutFeedbackRef = usePageFocusManagement(navigation);
    const [title, setTitle] = useState(0);
    const {colors} = useTheme();
    const announceCounterChange = (newValue: number, action: string) => {
      AccessibilityInfo.announceForAccessibility(`Counter ${action} to ${newValue}`);
    };

    const counterButtonStyle = {
      color: colors.text,
      fontSize: 20,
      padding: 10,
      minWidth: 40,
      textAlign: 'center' as const,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 3
    };

    const counterDisplayStyle = {
      color: colors.text,
      fontSize: 18,
      padding: 10,
      minWidth: 60,
      textAlign: 'center' as const,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 3,
      marginHorizontal: 5
    };

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
    onAccessibilityTap={() => {}}
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
    }}
    onAccessibilityTap={() => {
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
        <Text style={{fontWeight: 'bold', color: colors.text}}>{pressableMsg}</Text>
        <Example title="A simple TouchableWithoutFeedback." code={example1jsx}>
          <TouchableWithoutFeedback
            ref={firstTouchableWithoutFeedbackRef}
            accessibilityRole="button"
            accessibilityLabel={'simple example TouchableWithoutFeedback'}
            onPress={() => {}}
            onAccessibilityTap={() => {}}>
            <Text style={{color: colors.text}}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>
        </Example>
        <Example title="A colored TouchableWithoutFeedback." code={example2jsx}>
          <TouchableWithoutFeedback
            accessibilityRole="button"
            accessibilityLabel={'colored example TouchableWithoutFeedback'}
            onPress={() => {}}
            onAccessibilityTap={() => {}}>
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
            onAccessibilityTap={() => {}}
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
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityLabel={`Decrease counter. Current value is ${title}`}
              accessibilityHint="Decreases the counter by 1"
              onPress={() => {
                const newValue = Math.max(0, title - 1);
                setTitle(newValue);
                announceCounterChange(newValue, 'decreased');
              }}>
              <Text style={counterButtonStyle}>-</Text>
            </TouchableWithoutFeedback>
            <Text
              accessible={true}
              accessibilityRole="text"
              accessibilityLabel={`Counter value: ${title}`}
              accessibilityHint="Counter display"
              style={counterDisplayStyle}>
              {title}
            </Text>
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityLabel={`Increase counter. Current value is ${title}`}
              accessibilityHint="Increases the counter by 1"
              onPress={() => {
                const newValue = title + 1;
                setTitle(newValue);
                announceCounterChange(newValue, 'increased');
              }}>
              <Text style={counterButtonStyle}>+</Text>
            </TouchableWithoutFeedback>
          </View>
        </Example>
      </Page>
    );
  };
