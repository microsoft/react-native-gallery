/* eslint-disable prettier/prettier */
'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Slider from '@react-native-community/slider';

export const SliderExamplePage: React.FunctionComponent<{}> = () => {
  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx = `import Slider from '@react-native-community/slider';
  
<Slider 
  style={{width: 200, height: 40}} 
  minimumValue={0} 
  maximumValue={100}
  step={1}/>`;
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = `import Slider from '@react-native-community/slider';
  
<Slider
  style={{width: 200, height: 40}}
  minimumValue={500}
  maximumValue={1000}
  step={10}/>`;
  const example3jsx = `import Slider from '@react-native-community/slider';
  
<Slider
  style={{width: 40, height: 200}}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="#FF0000"
  maximumTrackTintColor="#0000ff"
  step={1}
  vertical={true}/>`;
  const example4jsx = `import Slider from '@react-native-community/slider';

<Slider 
  style={{width: 200, height: 40}}
  minimumValue={0}
  maximumValue={100}
  step={1}
  disabled={true}/>`;
  return (
    <Page
      title="Slider"
      description="Use a Slider when you want your users to be able to set defined, contiguous values (such as volume or brightness) or a range of discrete values (such as screen resolution settings).">
      <Example title="A simple Slider." code={example1jsx}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          step={1}/>
      </Example>
      <Example
        title="A Slider with range and steps specified."
        code={example2jsx}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={500}
          maximumValue={1000}
          step={10}/>
      </Example>
      <Example title="A vertical Slider with colored track." code={example3jsx}>
        <Slider
          style={{width: 40, height: 200}}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#0000ff"
          step={1}
          vertical={true}
        />
      </Example>
      <Example title="A disabled Slider." code={example4jsx}>
        <Slider
          style={{width: 200, height: 40}}
          minimumValue={0}
          maximumValue={100}
          step={1}
          disabled={true}/>
      </Example>
    </Page>
  );
};
