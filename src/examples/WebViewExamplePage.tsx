'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
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
      description="The WebView compoenent renders web content within a native view.">
      <Example title="A Simple WebView." code={example1jsx}>
        <WebView
          source={{
            uri: 'https://github.com/microsoft/react-native-gallery',
          }}
          style={{height: 500}}
        />
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/WebViewExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'WebView',
            url: 'https://reactnative.dev/docs/webview',
          },
          {
            label: 'WebView Source Code',
            url: 'https://github.com/react-native-webview/react-native-webview',
          },
        ]}
      />
    </Page>
  );
};
