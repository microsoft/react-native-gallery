'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {WebView} from 'react-native-webview';

export const WebViewExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `import {WebView} from 'react-native-webview';
  
<WebView
  source={{
    uri: 'https://github.com/microsoft/react-native-gallery',
  }}
  style={{height: 500}}/>`;

  return (
    <Page
      title="WebView"
      description="The WebView compoenent renders web content within a native view."
      wrappedNativeControl={{
        control: 'WebView',
        url: 'https://github.com/react-native-webview/react-native-webview',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WebViewExamplePage.tsx"
      documentation={[
        {
          label: 'WebView',
          url: 'https://reactnative.dev/docs/webview',
        },
      ]}>
      <Example title="A Simple WebView." code={example1jsx}>
        <WebView
          source={{
            uri: 'https://github.com/microsoft/react-native-gallery',
          }}
          style={{height: 500}}
        />
      </Example>
    </Page>
  );
};
