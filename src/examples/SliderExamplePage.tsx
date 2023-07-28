'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Slider from '@react-native-community/slider';
import {useTheme} from '@react-navigation/native';

export const SliderExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = `<Slider 
  style={{width: 200, height: 40}} 
  minimumValue={0} 
  maximumValue={100}
  step={1} />`;
  const example2jsx = `<Slider
  style={{width: 200, height: 40}}
  minimumValue={500}
  maximumValue={1000}
  step={10} />`;
  const example3jsx = `<Slider
  style={{width: 40, height: 200}}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor={colors.primary}
  maximumTrackTintColor={colors.border}
  step={1}
  vertical={true} />`;
  const example4jsx = `<Slider 
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={100}
  step={1}
  disabled={true} />`;
  return (
    <Page
      title="Slider"
      description="Use a Slider when you want your users to be able to set defined, contiguous values (such as volume or brightness) or a range of discrete values (such as screen resolution settings)."
      wrappedNativeControl={{
        control: 'Slider',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.slider?view=winrt-19041',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/SliderExamplePage.tsx"
      documentation={[
        {
          label: 'Slider',
          url: 'https://github.com/callstack/react-native-slider',
        },
      ]}>
      <Example title="A simple Slider." code={example1jsx}>
        <Slider
          accessibilityLabel="Simple Example"
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          step={1}
        />
      </Example>
      <Example
        title="A Slider with range and steps specified."
        code={example2jsx}>
        <Slider
          accessibilityLabel="Example"
          style={{width: 200, height: 40}}
          minimumValue={500}
          maximumValue={1000}
          step={10}
        />
      </Example>
      <Example title="A vertical Slider with colored track." code={example3jsx}>
        <Slider
          accessibilityLabel="Vertical Example"
          style={{width: 40, height: 200}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={colors.primary}
          maximumTrackTintColor={colors.border}
          step={1}
          vertical={true}
        />
      </Example>
      <Example title="A disabled Slider." code={example4jsx}>
        <Slider
          accessibilityLabel="Disabled Example"
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          step={1}
          disabled={true}
        />
      </Example>
    </Page>
  );
};
