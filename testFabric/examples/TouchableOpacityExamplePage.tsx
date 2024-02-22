'use strict';
import {Text, TouchableOpacity, Platform, PlatformColor} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
// import {useTheme} from '@react-navigation/native';

export const TouchableOpacityExamplePage: React.FunctionComponent<{}> = () => {
  const [title, setTitle] = useState(0);
  const [focus, setFocus] = useState(false);
//   const {colors} = useTheme();

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
onPress={() => {}}>
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
          accessibilityRole="button"
          accessibilityLabel={'simple example touchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor:'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          activeOpacity={0.5}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A colored TouchableOpacity." code={example2jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'colored example TouchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: 'rgb(0, 122, 255)',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          activeOpacity={0.8}>
          <Text style={{color: 'white'}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A disabled TouchableOpacity." code={example3jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'disabled example TouchableOpacity'}
          style={{
            height: 40,
            width: 150,
            backgroundColor:'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          activeOpacity={0.8}
          disabled={true}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>TouchableOpacity</Text>
        </TouchableOpacity>
      </Example>
      <Example title="A TouchableOpacity counter." code={example4jsx}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel={'example TouchableOpacity counter'}
          accessibilityHint={'click me to increase the example counter'}
          accessibilityValue={{text: `${title}`}}
          style={{
            height: 40,
            width: 150,
            backgroundColor:'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setTitle(title + 1);
          }}
          activeOpacity={0.8}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>{String(title)}</Text>
        </TouchableOpacity>
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
            backgroundColor:'silver',
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
          onPress={() => {}}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>
            {focus
              ? 'TouchableOpacity Focused'
              : 'TouchableOpacity Not Focused'}
          </Text>
        </TouchableOpacity>
      </Example>
    </Page>
  );
};
