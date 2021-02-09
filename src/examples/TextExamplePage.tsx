'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
import {useRef} from 'reactn';

export const TextExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `import {Text} from 'react-native';
  
<Text>Here is a line of text.</Text>`;
  const example2jsx = `import {Text} from 'react-native';
  
<Text style={{fontWeight: '600', fontStyle: 'italic'}}>
  Here is a line of bold and italicized text.
</Text>`;
  const example3jsx = `import {Text} from 'react-native';
  
<Text style={{color: 'red'}} selectable>
  Here is a line of bold and italicized text.
</Text>`;
  const example4jsx = `import {Text} from 'react-native';
  
<Text style={{textAlign: 'center'}} numberOfLines={2}>
  Here is a sample section of longer text. This sample may take up more
  that one line if the window width is short enough. Notice that the
  block of text will never exceed more that two lines. If more text
  exists beyond two lines it will be truncated and an ellipses will
  appear.
</Text>`;
  const example5jsx = `import {Text} from 'react-native';
  
<Text style={{fontWeight: '600'}}>
  This is bolded
  <Text style={{color: 'blue'}}>
    &nbsp;and blue
    <Text style={{textDecorationLine: 'underline'}}>
      &nbsp;and underlined text.
    </Text>
  </Text>
</Text>`;

  return (
    <Page
      title="Text"
      description="Text is a component for displaying read-only text in your app."
      wrappedNativeControl={true}>
      <Example title="A simple line of Text." code={example1jsx}>
        <Text>Here is a line of text.</Text>
      </Example>
      <Example title="A line of bolded and italicized Text." code={example2jsx}>
        <Text style={{fontWeight: '600', fontStyle: 'italic'}}>
          Here is a line of bold and italicized text.
        </Text>
      </Example>
      <Example title="A selectable line of colored Text." code={example3jsx}>
        <Text style={{color: 'red'}} selectable>
          Here is a line of bold and italicized text.
        </Text>
      </Example>
      <Example title="A 2-line centered block of Text." code={example4jsx}>
        <Text style={{textAlign: 'center'}} numberOfLines={2}>
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
        <Text style={{fontWeight: '600'}}>
          This is bolded
          <Text style={{color: 'blue'}}>
            &nbsp;and blue
            <Text style={{textDecorationLine: 'underline'}}>
              &nbsp;and underlined text.
            </Text>
          </Text>
        </Text>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/TextExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Text',
            url: 'https://reactnative.dev/docs/text',
          },
          {
            label: 'Text Source Code',
            url:
              'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/TextViewManager.h',
          },
          {
            label: 'Wrapped XAML Control: TextBlock',
            url:
              'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.textblock?view=winrt-19041',
          },
        ]}
      />
    </Page>
  );
};
