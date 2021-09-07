'use strict';
import {Text, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';
import {Expander} from '@fluentui-react-native/experimental-expander';

export const ExpanderExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = `<Expander collapsedHeight={50} expandedHeight={100}> 
  <Text>Text in the header</Text>
  <Text>Text in the content</Text>
</Expander>`;
  const example2jsx = `<Expander collapsedHeight={75} expandedHeight={150}>
  <View>
    <Text>Text in the header</Text>
    <Text>Second line of text in the header</Text>
  </View>
  <View>
    <Text>Text in the content</Text>
    <Text>Second line of text in the content</Text>
  </View>
</Expander>`;
  const example3jsx = `<Expander collapsedHeight={50} expandedHeight={100} expandDirection={'up'}>
  <Text>Text in the header</Text>
  <Text>Text in the content</Text>
</Expander>`;
  const example4jsx = `<Expander
  collapsedHeight={50}
  expandedHeight={100}
  headerBackground="#fabc09"
  headerForegroundPointerOver="#FFFFFF"
  contentBackground="#00adee"
  contentBorderBrush="#fabc09">
    <Text>Text in the header</Text>
    <Text>Text in the content</Text>
</Expander>`;

  return (
    <Page
      title="Expander"
      description="Expander is a control that displays a header and has a collapsible body that displays content"
      wrappedNativeControl={{
        control: 'Expander',
        url:
          'https://docs.microsoft.com/en-us/windows/winui/api/microsoft.ui.xaml.controls.expander?view=winui-2.6',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ExperimentalExpanderExamplePage.tsx"
      documentation={[
        {
          label: 'Expander',
          url:
            'https://github.com/microsoft/fluentui-react-native/blob/master/packages/experimental/Expander',
        },
      ]}>
      <Example title="A simple Expander" code={example1jsx}>
        <Expander collapsedHeight={50} expandedHeight={100}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
      <Example title="A Expander with Multiple Lines" code={example2jsx}>
        <Expander collapsedHeight={75} expandedHeight={150}>
          <View>
            <Text>Text in the header</Text>
            <Text>Second line of text in the header</Text>
          </View>
          <View>
            <Text>Text in the content</Text>
            <Text>Second line of text in the content</Text>
          </View>
        </Expander>
      </Example>
      <Example title="A Expander that extends upwards" code={example3jsx}>
        <Expander
          collapsedHeight={50}
          expandedHeight={100}
          expandDirection={'up'}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
      <Example title="A Stylized Expander" code={example4jsx}>
        <Expander
          collapsedHeight={50}
          expandedHeight={100}
          headerBackground={colors.border}
          headerForegroundPointerOver={colors.primary}
          contentBackground={colors.primary}
          contentBorderBrush={colors.background}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
    </Page>
  );
};
