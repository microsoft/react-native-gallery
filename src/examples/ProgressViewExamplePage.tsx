'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {ProgressView} from '@react-native-community/progress-view';
import {useTheme} from '@react-navigation/native';

export const ProgressViewExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = '<ProgressView progress={0.5}/>';

  const example2jsx = "<ProgressView isIndeterminate='true'/>";
  const example3jsx = `<ProgressView
    progressTintColor={colors.primary}
    trackTintColor={colors.border}
    progress={0.7} />`;

  return (
    <Page
      title="ProgressView"
      description="ProgressView is a component for displaying progress bars in your app."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ProgressViewExamplePage.tsx"
      documentation={[
        {
          label: 'ProgressView',
          url: 'https://github.com/react-native-progress-view/progress-view',
        },
      ]}>
      <Example
        title="A simple ProgressView with 50% progress."
        code={example1jsx}>
        <ProgressView accessibilityLabel="Simple ProgressView" progress={0.5} />
      </Example>
      <Example title="An indeterminate ProgressView." code={example2jsx}>
        <ProgressView
          accessibilityLabel="Indeterminate ProgressView"
          isIndeterminate="true"
        />
      </Example>
      <Example
        title="A colored ProgressView with 70% progress."
        code={example3jsx}>
        <ProgressView
          accessibilityLabel="Colored ProgressView"
          progressTintColor={colors.primary}
          trackTintColor={colors.border}
          progress={0.7}
        />
      </Example>
    </Page>
  );
};
