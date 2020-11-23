'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

// Add import for page's component here

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const TemplateExamplePage: React.FunctionComponent<{}> = () => {
  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx = '';
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = '';

  return (
    <Page
      title="Template"
      description="Add component description here. See XAML Controls Gallery for description contents if available.">
      <Example title="Example 1" code={example1jsx}>
        <Text>Add Example 1 instance of component here.</Text>
      </Example>
      <Example title="Example 2" code={example2jsx}>
        <Text>Add Example 2 instance of component here.</Text>
      </Example>
    </Page>
  );
};
