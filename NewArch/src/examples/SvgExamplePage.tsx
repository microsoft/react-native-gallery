'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Svg, {Circle, Rect} from 'react-native-svg';

export const SvgExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `<Svg height="200px" width="200px" viewBox="0 0 100 100">
  <Circle
    cx="50"
    cy="50"
    r="45"
    stroke="blue"
    strokeWidth="2.5"
    fill="green"
  />
  <Rect
    x="15"
    y="15"
    width="70"
    height="70"
    stroke="red"
    strokeWidth="2"
    fill="yellow"
  />
</Svg>`;

  return (
    <Page
      title="SVG"
      description="A component which renders vector graphics."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/SvgExamplePage.tsx"
      documentation={[
        {
          label: 'Svg',
          url: 'https://github.com/software-mansion/react-native-svg',
        },
      ]}>
      <Example title="A simple Image from web source." code={example1jsx}>
        <Svg height="200px" width="200px" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </Example>
    </Page>
  );
};
