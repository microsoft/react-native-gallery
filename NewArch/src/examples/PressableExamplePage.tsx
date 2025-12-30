'use strict';
import {Text, Pressable, Platform, PlatformColor, AccessibilityInfo} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const PressableExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstPressableRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();

  const [timesPressed, setTimesPressed] = useState(1);
  const [pressed1, setPressed1] = useState(1);
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
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PressableExamplePage.tsx"
      documentation={[
        {
          label: 'Pressable',
          url: 'https://reactnative.dev/docs/pressable',
        },
        {
          label: 'Pressable Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/src/Libraries/Components/Pressable/Pressable.windows.js',
        },
      ]}>
      <Example title="A simple Pressable component." code={example1jsx}>
        <Pressable
          ref={firstPressableRef}
          accessibilityRole="button"
          accessibilityLabel={'Press Me'}
          accessibilityHint={
            'Tap to change text from Pressed to Press Me'
          }
          onPress={() => {
            setPressed1((current) => current + 1);
            AccessibilityInfo.announceForAccessibility('Pressed');
          }}
          onAccessibilityTap={() => {
            setPressed1((current) => current + 1);
            AccessibilityInfo.announceForAccessibility('Pressed');
          }}>
          {({pressed}) => (
            <Text style={{color: colors.text}}>
              {(pressed1 || pressed) ? 'Pressed!' : 'Press Me'}
            </Text>
          )}
        </Pressable>
      </Example>
      <Example title="A disabled Pressable component." code={example2jsx}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={'Disabled Pressable'}
          style={{
            width: 140,
            height: 50,
            borderRadius: 2,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
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
          accessibilityRole="button"
          accessibilityLabel={'Press Me'}
          accessibilityHint={`Tap to increase the counter. Pressed ${timesPressed} times`}
          onPress={() => {
            setTimesPressed((current) => current + 1);
          }}
          onAccessibilityTap={() => {
            setTimesPressed((current) => current + 1);
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed
                ? colors.primary
                : Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
              padding: 8,
              minWidth: 140,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
            },
          ]}>
          {({pressed}) => (
            <Text
              style={{
                textAlign: 'center',
                paddingVertical: 15,
                flexWrap: 'wrap',
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
          accessibilityRole="button"
          accessibilityLabel={'Press Me'}
          accessibilityHint={
            'Tap to see the different events (press, pressIn, pressOut, longPress)'
          }
          style={{
            width: 200,
            height: 50,
            borderRadius: 2,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
          }}
          onPress={() => setCurrEvent('press')}
          onPressIn={() => setCurrEvent('pressIn')}
          onPressOut={() => setCurrEvent('pressOut')}
          onLongPress={() => setCurrEvent('longPress')}
          onAccessibilityTap={() => setCurrEvent('press')}>
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
