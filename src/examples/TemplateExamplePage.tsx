'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

// Add import for page's component here

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const TemplateExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  // Replace with string version of JSX snippet used to render component for example1
  const example1jsx = '<Text>Add Example 1 instance of component here.</Text>';
  // Replace with string version of JSX snippet used to render component for example2
  const example2jsx = '<Text>Add Example 2 instance of component here.</Text>';

  return (
    <Page
      title="Template"
      description="Add component description here. See XAML Controls Gallery for description contents if available."
      wrappedNativeControl={{
        control: 'Template',
        url: 'https://github.com/microsoft/react-native-windows',
      }} // Remove if component is non-native.
      componentType="Core" // Remove if component is not a core component
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TemplateExamplePage.tsx"
      documentation={[
        {
          label: 'Template',
          url: 'https://github.com/microsoft/react-native-windows',
        },
      ]}>
      {/*If component is a wrapped XAML control, set wrappedNativeControl to the name of the XAML control and a url to its API documentation. Otherwise, remove this prop specification.*/}
      {/*pageCodeUrl link should be link to source code for the page in react-native-gallery repo*/}
      {/*entries in the documentation prop should be labels and urls that point to the Github repo for the component
        and any other applicable documentation for the component such as information on facebook's react native website.*/}
      <Example title="Example 1" code={example1jsx}>
        <Text style={{color: colors.text}}>
          Add Example 1 instance of component here.
        </Text>
      </Example>
      <Example title="Example 2" code={example2jsx}>
        <Text style={{color: colors.text}}>
          Add Example 2 instance of component here.
        </Text>
      </Example>
    </Page>
  );
};
