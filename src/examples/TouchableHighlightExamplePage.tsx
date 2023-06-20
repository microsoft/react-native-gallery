'use strict';
import {Text, TouchableHighlight, Platform, PlatformColor} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

export const TouchableHighlightExamplePage: React.FunctionComponent<{}> = () => {
  const [title, setTitle] = useState(0);
  const {colors} = useTheme();

  const example1jsx = `<TouchableHighlight
  style={{
    height: 40,
    backgroundColor: colors.border,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {}}
  activeOpacity={0.2}
  underlayColor={colors.border}>
  <Text style={{color: colors.text}}>TouchableHighlight</Text>
</TouchableHighlight>`;

  const example2jsx = `<TouchableHighlight
  style={{
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {}}
  activeOpacity={0.6}
  underlayColor={colors.text}>
  <Text style={{color: 'white'}}>TouchableHighlight</Text>
</TouchableHighlight>`;

  const example3jsx = `<TouchableHighlight
  style={{
    height: 40,
    backgroundColor: colors.text,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {
    setTitle(title + 1);
  }}
  activeOpacity={0.2}
  underlayColor={colors.text}>
  <Text style={{color: 'white'}}>{String(title)}</Text>
</TouchableHighlight>`;

  return (
    <Page
      title="Touchable Highlight"
      description="A customizable View responsive to touch. The opacity of the View is decreased when pressed, revealing an underlay color."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TouchableHighlightExamplePage.tsx"
      documentation={[
        {
          label: 'TouchableHighlight',
          url: 'https://reactnative.dev/docs/touchablehighlight',
        },
        {
          label: 'TouchableHighlight Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/main/vnext/src/Libraries/Components/Touchable/TouchableHighlight.windows.js',
        },
      ]}>
      <Example title="A simple TouchableHighlight." code={example1jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={'example TouchableHighlight'}
          style={{
            height: 40,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>TouchableHighlight</Text>
        </TouchableHighlight>
      </Example>
      <Example title="A colored TouchableHighlight." code={example2jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={'example colored TouchableHighlight'}
          style={{
            height: 40,
            backgroundColor: colors.primary,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {}}
          activeOpacity={0.6}
          underlayColor={colors.text}>
          <Text style={{color: 'white'}}>TouchableHighlight</Text>
        </TouchableHighlight>
      </Example>
      <Example title="A TouchableHighlight counter." code={example3jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={'example TouchableHighlight counter'}
          accessibilityHint={'click me to increase the example counter'}
          accessibilityValue={{text: `${title}`}}
          style={{
            height: 40,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setTitle(title + 1);
          }}
          activeOpacity={0.2}
          underlayColor={colors.text}>
          <Text style={{color: colors.text}}>{String(title)}</Text>
        </TouchableHighlight>
      </Example>
    </Page>
  );
};
