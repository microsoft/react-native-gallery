'use strict';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {WebView} from 'react-native-webview';

export const WebViewExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `<WebView
  source={{
    uri: 'https://github.com/microsoft/react-native-gallery',
  }}
  style={{height: 500}} />`;

  const example2jsx = `<WebView
  source={{
    uri: 'https://github.com/microsoft/react-native-gallery',
  }}
  style={{height: 500}}
  useWebView2 />`;

  return (
    <Page
      title="WebView"
      description="The WebView component renders web content within a native view."
      wrappedNativeControl={{
        control: 'WebView',
        url: 'https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.WebView?view=winrt-20348',
      }}
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WebViewExamplePage.tsx"
      documentation={[
        {
          label: 'WebView',
          url: 'https://github.com/react-native-webview/react-native-webview',
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
      <Example title="A Simple WebView2." code={example2jsx}>
        <WebView
          source={{
            uri: 'https://github.com/microsoft/react-native-gallery',
          }}
          style={{height: 500}}
          useWebView2
        />
      </Example>
    </Page>
  );
};
