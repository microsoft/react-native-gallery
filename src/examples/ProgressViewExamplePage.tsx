'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {ProgressView} from '@react-native-community/progress-view';

export const ProgressViewExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = '<ProgressView progress={0.5}/>';

  const example2jsx = "<ProgressView isIndeterminate='true'/>";
  const example3jsx = `<ProgressView
    progressTintColor="orange"
    trackTintColor="blue"
    progress={0.7} />`;

  return (
    <Page
      title="ProgressView"
      description="ProgressView is a component for displaying progress bars in your app."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ProgressViewExamplePage.tsx"
      documentation={[
        {
          label: 'ProgressView',
          url: 'https://github.com/react-native-progress-view/progress-view',
        },
      ]}>
      <Example title="Simple ProgressView with 50% progress" code={example1jsx}>
        <ProgressView progress={0.5} />
      </Example>
      <Example
        title="Indeterminate ProgressView - Windows only"
        code={example2jsx}>
        <ProgressView isIndeterminate="true" />
      </Example>
      <Example
        title="ProgressView with different colors and 70% progress"
        code={example3jsx}>
        <ProgressView
          progressTintColor="orange"
          trackTintColor="blue"
          progress={0.7}
        />
      </Example>
    </Page>
  );
};
