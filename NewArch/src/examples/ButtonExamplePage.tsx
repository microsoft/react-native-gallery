'use strict';
import {Button, Platform, PlatformColor, View, Text, AccessibilityInfo} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const ButtonExamplePage: React.FunctionComponent<{route?: any; navigation?: any}> = ({navigation}) => {
  const [title, setTitle] = useState(0);

  const firstButtonRef = usePageFocusManagement(navigation);
  const announceCounterChange = (newValue: number, action: string) => {
    AccessibilityInfo.announceForAccessibility(`Counter ${action} to ${newValue}`);
  };
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
          ref={firstButtonRef}
          title="Simple Button"
          accessibilityLabel={'simple button'}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A colored Button." code={example2jsx}>
        <Button
          title="Colored Button"
          color={
            Platform.OS === 'windows'
              ? PlatformColor('SystemChromeMediumLowColor')
              : 'silver'
          }
          accessibilityLabel={'colored button'}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A disabled Button." code={example3jsx}>
        <Button
          title="Disabled Button"
          accessibilityLabel={'disabled button'}
          disabled={true}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
        />
      </Example>
      <Example title="A counter Button." code={example4jsx}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Button
            title="-"
            accessibilityLabel={`Decrease counter. Current value is ${title}`}
            accessibilityHint="Decreases the counter by 1"
            onPress={() => {
              const newValue = Math.max(0, title - 1);
              setTitle(newValue);
              announceCounterChange(newValue, 'decreased');
            }}
          />
          <Text
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel={`Counter value: ${title}`}
            accessibilityHint="Counter display"
            style={{
              minWidth: 60,
              textAlign: 'center',
              fontSize: 18,
              padding: 10,
              borderWidth: 1,
              borderColor: 'gray',
              borderRadius: 5,
              marginHorizontal: 5
            }}>
            {String(title)}
          </Text>
          <Button
            title="+"
            accessibilityLabel={`Increase counter. Current value is ${title}`}
            accessibilityHint="Increases the counter by 1"
            onPress={() => {
              const newValue = title + 1;
              setTitle(newValue);
              announceCounterChange(newValue, 'increased');
            }}
          />
        </View>
      </Example>
    </Page>
  );
};
