'use strict';
import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';
import {Expander} from '@fluentui-react-native/experimental-expander';
import CheckBox from '@react-native-community/checkbox';
import DateTimePicker from '@react-native-community/datetimepicker';

export const ExpanderExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = `<Expander collapsedHeight={50} expandedHeight={125}> 
  <Text>Text in the header</Text>
  <Text>Text in the content</Text>
</Expander>`;
  const example2jsx = `<Expander collapsedHeight={75} expandedHeight={200}>
  <View>
    <Text>Text in the header</Text>
    <Text>Second line of text in the header</Text>
  </View>
  <View>
    <Text>Text in the content</Text>
    <Text>Second line of text in the content</Text>
  </View>
</Expander>`;
  const example3jsx = `<Expander collapsedHeight={50} expandedHeight={125} expandDirection={'up'}>
  <Text>Text in the header</Text>
  <Text>Text in the content</Text>
</Expander>`;
  const example4jsx = `<Expander
  collapsedHeight={50}
  expandedHeight={125}
  headerBackground="#fabc09"
  headerForegroundPointerOver="#FFFFFF"
  contentBackground="#00adee"
  contentBorderBrush="#fabc09">
    <Text>Text in the header</Text>
    <Text>Text in the content</Text>
</Expander>`;
  const example5jsx = `const [date1] = useState(new Date());
<Expander collapsedHeight={50} expandedHeight={125}>
  <View style={{ flexDirection: 'row', }}>
    <CheckBox onCheckColor={colors.primary} />
    <Text style={{ alignItems: 'center', padding: 6,}}>
      Click Me!
    </Text>
  </View>
  <DateTimePicker value={date1} mode="date" />
</Expander>`;

  const [date1] = useState(new Date(0));

  return (
    <Page
      title="Expander"
      description="Expander is a control that displays a header and has a collapsible body that displays content."
      wrappedNativeControl={{
        control: 'Expander',
        url: 'https://docs.microsoft.com/en-us/windows/winui/api/microsoft.ui.xaml.controls.expander?view=winui-2.6',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ExperimentalExpanderExamplePage.tsx"
      documentation={[
        {
          label: 'Expander',
          url: 'https://github.com/microsoft/fluentui-react-native/blob/master/packages/experimental/Expander',
        },
      ]}>
      <Example title="A simple Expander." code={example1jsx}>
        <Expander collapsedHeight={50} expandedHeight={125}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
      <Example title="An Expander with multiple lines." code={example2jsx}>
        <Expander collapsedHeight={75} expandedHeight={200}>
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
      <Example title="An Expander that extends upwards." code={example3jsx}>
        <Expander
          collapsedHeight={50}
          expandedHeight={125}
          expandDirection={'up'}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
      <Example title="A stylized Expander." code={example4jsx}>
        <Expander
          collapsedHeight={50}
          expandedHeight={125}
          headerBackground={colors.border}
          headerForegroundPointerOver={colors.primary}
          contentBackground="rgb(52, 122, 226)"
          contentBorderBrush={colors.background}>
          <Text>Text in the header</Text>
          <Text>Text in the content</Text>
        </Expander>
      </Example>
      <Example
        title="An Expander with interactive controls."
        code={example5jsx}>
        <Expander collapsedHeight={50} expandedHeight={125}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <CheckBox onCheckColor={colors.primary} />
            <Text
              style={{
                alignItems: 'center',
                padding: 6,
              }}>
              Click Me!
            </Text>
          </View>
          <DateTimePicker value={date1} mode="date" />
        </Expander>
      </Example>
    </Page>
  );
};
