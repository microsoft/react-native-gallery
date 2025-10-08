'use strict';
import {Text, TouchableOpacity, Platform, PlatformColor, View, AccessibilityInfo} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const TouchableOpacityExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstTouchableOpacityRef = usePageFocusManagement(navigation);
  const [title, setTitle] = useState(0);
  const [focus, setFocus] = useState(false);
  const {colors} = useTheme();

  const announceCounterChange = (newValue: number, action: string) => {
    AccessibilityInfo.announceForAccessibility(`Counter ${action} to ${newValue}`);
  };

  const example1jsx = `<TouchableOpacity
  style={{
    height: 40,
    width: 150,
    backgroundColor: colors.border,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {}}
  onAccessibilityTap={() => {}}
  activeOpacity={0.5}>
  <Text style={{color: colors.text}}>TouchableOpacity</Text>
</TouchableOpacity>`;

  const example2jsx = `<TouchableOpacity
  style={{
    height: 40,
    width: 150,
    backgroundColor: colors.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {}}
  onAccessibilityTap={() => {}}
  activeOpacity={0.8}>
  <Text style={{color: 'white'}}>TouchableOpacity</Text>
</TouchableOpacity>`;

  const example3jsx = `<TouchableOpacity
  style={{
    height: 40,
    width: 150,
    backgroundColor: colors.border,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {}}
  onAccessibilityTap={() => {}}
  activeOpacity={0.8}
  disabled={true}>
  <Text style={{color: colors.text}}>TouchableOpacity</Text>
</TouchableOpacity>`;

  const example4jsx = `<TouchableOpacity
style={{
  height: 40,
  width: 150,
  backgroundColor: colors.text,
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
}}
onPress={() => {
  setTitle(title + 1);
}}
onAccessibilityTap={() => {
  setTitle(title + 1);
}}
activeOpacity={0.8}>
<Text style={{color: 'white'}}>{String(title)}</Text>
</TouchableOpacity>`;

  const example5jsx = `<TouchableOpacity
style={{
  height: 40,
  width: 250,
  backgroundColor: colors.border,
  borderRadius: 3,
  justifyContent: 'center',
  alignItems: 'center',
}}
onFocus={() => {
  setFocus(true);
}}
onBlur={() => {
  setFocus(false);
}}
activeOpacity={0.2}
onPress={() => {}}
onAccessibilityTap={() => {}}>
<Text style={{color: colors.text}}>
  {focus
    ? 'TouchableOpacity Focused'
    : 'TouchableOpacity Not Focused'}
</Text>
</TouchableOpacity>`;

  return (
    <Page
      title="Touchable Opacity"
      description="A customizable View responsive to touch. The opacity of the View is decreased when pressed, dimming it."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TouchableOpacityExamplePage.tsx"
      documentation={[
        {
          label: 'TouchableOpacity',
          url: 'https://reactnative.dev/docs/touchableopacity',
        },
        {
          label: 'TouchableOpacity Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/src/Libraries/Components/Touchable/TouchableOpacity.windows.js',
        },
      ]}>
      <Example title="A simple TouchableOpacity." code={example1jsx}>
        <TouchableOpacity
          ref={firstTouchableOpacityRef}
          accessibilityRole="button"
          accessibilityLabel={'TouchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
          activeOpacity={0.5}>
          <Text style={{color: colors.text}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A colored TouchableOpacity." code={example2jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'TouchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: colors.primary,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
          activeOpacity={0.8}>
          <Text style={{color: 'white'}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A disabled TouchableOpacity." code={example3jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'TouchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          onAccessibilityTap={() => {}}
          activeOpacity={0.8}
          disabled={true}>
          <Text style={{color: colors.text}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A TouchableOpacity counter." code={example4jsx}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={`Decrease counter. Current value is ${title}`}
            accessibilityHint="Decreases the counter by 1"
            style={{
              height: 40,
              width: 50,
              backgroundColor:
                Platform.OS === 'windows'
                  ? PlatformColor('SystemColorButtonFaceColor')
                  : 'silver',
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              const newValue = Math.max(0, title - 1);
              setTitle(newValue);
              announceCounterChange(newValue, 'decreased');
            }}
            activeOpacity={0.8}>
            <Text style={{color: colors.text, fontSize: 20}}>-</Text>
          </TouchableOpacity>
          <Text
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel={`Counter value: ${title}`}
            accessibilityHint="Counter display"
            style={{
              minWidth: 80,
              height: 40,
              textAlign: 'center',
              lineHeight: 40,
              fontSize: 18,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: 3,
              backgroundColor:
                Platform.OS === 'windows'
                  ? PlatformColor('SystemColorButtonFaceColor')
                  : 'silver',
              marginHorizontal: 5,
            }}>
            {title}
          </Text>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={`Increase counter. Current value is ${title}`}
            accessibilityHint="Increases the counter by 1"
            style={{
              height: 40,
              width: 50,
              backgroundColor:
                Platform.OS === 'windows'
                  ? PlatformColor('SystemColorButtonFaceColor')
                  : 'silver',
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              const newValue = title + 1;
              setTitle(newValue);
              announceCounterChange(newValue, 'increased');
            }}
            activeOpacity={0.8}>
            <Text style={{color: colors.text, fontSize: 20}}>+</Text>
          </TouchableOpacity>
        </View>
      </Example>
      <Example
        title="A TouchableOpacity responsive to focus."
        code={example5jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'example TouchableOpacity responsive to focus'}
          style={{
            height: 40,
            width: 250,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          activeOpacity={0.2}
          onPress={() => {}}
          onAccessibilityTap={() => {}}>
          <Text style={{color: colors.text}}>
            {focus
              ? 'TouchableOpacity Focused'
              : 'TouchableOpacity Not Focused'}
          </Text>
        </TouchableOpacity>
      </Example>
    </Page>
  );
};
