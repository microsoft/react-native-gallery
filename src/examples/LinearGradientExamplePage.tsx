'use strict';
import React from 'react';
import {Text} from 'react-native';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import LinearGradient from 'react-native-linear-gradient';

export const LinearGradientExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `<LinearGradient
  start={{x: 0, y: 0}}
  end={{x: 1, y: 0}}
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={{
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start'}}>
  <Text>
    Text within a gradient fill
  </Text>
</LinearGradient>`;
  return (
    <Page
      title="Linear Gradient"
      description="Render a gradient color fill."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/LinearGradientExamplePage.tsx"
      documentation={[
        {
          label: 'Linear Gradient',
          url: 'https://github.com/react-native-linear-gradient/react-native-linear-gradient',
        },
      ]}>
      <Example title="Horizontal Gradient" code={example1jsx}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            paddingHorizontal: 24,
            paddingVertical: 8,
            borderRadius: 8,
            alignSelf: 'flex-start',
          }}>
          <Text style={{color: '#ffffff'}}>Text within a gradient fill</Text>
        </LinearGradient>
      </Example>
    </Page>
  );
};
