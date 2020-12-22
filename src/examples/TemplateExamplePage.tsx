'use strict';
import {Text, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

// Add import for page's component here

import {StyleSheet} from 'react-native';
import {Hyperlink} from '../components/Hyperlink';
const styles = StyleSheet.create({
  hyperlinkContainer: {
    flexDirection: 'column',
    marginRight: 90,
  },
  hyperlinkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hyperlinkTile: {
    marginTop: 30,
    marginBottom: 10,
  },
  hyperlinkTileTitle: {
    marginBottom: 10,
    fontSize: 20,
  },
});
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
      {/*pageCodeUrl link should be link to source code for the page in react-native-gallery repo*/}
      {/*feedbackUrl link should be link to issues page in react-native-gallery repo*/}
      {/*entries in the documentation prop should be labels and urls that point to the Github repo for the component
        and any other applicable documentation for the component such as information on facebook's react native website.*/}
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Template',
            url: 'https://github.com/microsoft/react-native-windows',
          },
        ]}
      />
    </Page>
  );
};
