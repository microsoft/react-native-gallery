'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
// import {useTheme} from '@react-navigation/native';

export const TextExamplePage: React.FunctionComponent<{}> = () => {
  //   const {colors} = useTheme();

  const example1jsx = '<Text>Here is a line of text.</Text>';
  const example2jsx = `<Text style={{fontWeight: '600', fontStyle: 'italic'}}>
  Here is a line of bold and italicized text.
</Text>`;
  const example3jsx = `<Text style={{color: colors.primary}} selectable>
  Here is a line of colored text.
</Text>`;
  const example4jsx = `<Text style={{textAlign: 'center'}} numberOfLines={2}>
  Here is a sample section of longer text. This sample may take up more
  that one line if the window width is short enough. Notice that the
  block of text will never exceed more that two lines. If more text
  exists beyond two lines it will be truncated and an ellipses will
  appear.
</Text>`;
  const example5jsx = `<Text style={{fontWeight: '600'}}>
  This is bolded
  <Text style={{color: colors.primary}}>
    &nbsp;and blue
    <Text style={{textDecorationLine: 'underline'}}>
      &nbsp;and underlined text.
    </Text>
  </Text>
</Text>`;

  const example6jsx = `<Text 
  style={{fontSize: 30, fontFamily: 'Consolas'}>
  Here is a line of enlarged Consolas text.
</Text>`;
  const example7jsx = `<Text
  style={{
    lineHeight: 100,
    textAlign: 'right',
  }}>
  Here is a right-aligned line of Text with customized line height.
</Text>`;
  const example8jsx = `<Text
style={{
  textTransform: 'uppercase',
  backgroundColor: colors.border,
  writingDirection: 'rtl',
}}>
Here is a line of capitalized text with Right-to-Left writing direction and background color.
</Text>`;

  return (
    <Page
      title="Text"
      description="Text is a component for displaying read-only text in your app."
      wrappedNativeControl={{
        control: 'TextBlock',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.textblock?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TextExamplePage.tsx"
      documentation={[
        {
          label: 'Text',
          url: 'https://reactnative.dev/docs/text',
        },
        {
          label: 'Text Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/TextViewManager.h',
        },
      ]}>
      <Example title="A simple line of Text." code={example1jsx}>
        <Text style={{color: 'rgb(28, 28, 30)'}}>Here is a line of text.</Text>
      </Example>
      <Example title="A line of bolded and italicized Text." code={example2jsx}>
        <Text
          style={{
            fontWeight: '600',
            fontStyle: 'italic',
            color: 'rgb(28, 28, 30)',
          }}>
          Here is a line of bold and italicized text.
        </Text>
      </Example>
      <Example title="A selectable line of colored Text." code={example3jsx}>
        <Text style={{color: 'rgb(0, 122, 255)'}} selectable>
          Here is a line of colored text.
        </Text>
      </Example>
      <Example title="A 2-line centered block of Text." code={example4jsx}>
        <Text
          style={{textAlign: 'center', color: 'rgb(28, 28, 30)'}}
          numberOfLines={2}>
          Here is a sample section of longer text. This sample may take up more
          that one line if the window width is short enough. Notice that the
          block of text will never exceed more that two lines. If more text
          exists beyond two lines it will be truncated and an ellipses will
          appear.
        </Text>
      </Example>
      <Example
        title="A nested block of Text with additional style at each level."
        code={example5jsx}>
        <Text style={{fontWeight: '600', color: 'rgb(28, 28, 30)'}}>
          This is bolded
          <Text style={{color: 'rgb(0, 122, 255)'}}>
            &nbsp;and blue&nbsp;
            <Text style={{textDecorationLine: 'underline'}}>
              and underlined text.
            </Text>
          </Text>
        </Text>
      </Example>
      <Example title="An line of enlarged Consolas Text." code={example6jsx}>
        <Text style={{fontSize: 30, fontFamily: 'Consolas'}}>
          Here is a line of enlarged Consolas text.
        </Text>
      </Example>
      <Example
        title="A right-aligned line of Text with customized line height."
        code={example7jsx}>
        <Text
          style={{
            lineHeight: 100,
            textAlign: 'right',
          }}>
          Here is a right-aligned line of Text with customized line height.
        </Text>
      </Example>
      <Example
        title="A line of capitalized Text with Right-to-Left writing direction and background color."
        code={example8jsx}>
        <Text
          style={{
            textTransform: 'uppercase',
            backgroundColor: 'rgb(216, 216, 216)',
            writingDirection: 'rtl',
          }}>
          Here is a line of capitalized text with Right-to-Left writing
          direction and background color.
        </Text>
      </Example>
    </Page>
  );
};
