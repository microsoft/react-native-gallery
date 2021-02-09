'use strict';
import {Image} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

export const ImageExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `import {Image} from 'react-native';
  
<Image
  style={{width: 50, height: 50}}
  source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }}/>`;
  const example2jsx = `import {Image} from 'react-native';
  
<Image
  style={{width: 75, height: 50, resizeMode: 'stretch'}}
  source={{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
  }}/>`;
  const example3jsx = `import {Image} from 'react-native';
  
<Image
  style={{width: 300, height: 50, resizeMode: 'repeat'}}
  source={require('../assets/tiny_logo.png')}
/>`;
  const example4jsx = `import {Image} from 'react-native';
  
<Image
  style={{width: 75, height: 50, resizeMode: 'cover'}}
  source={require('../assets/tiny_logo.png')}/>`;

  return (
    <Page
      title="Image"
      description="A component which scales and displays images."
      wrappedNativeControl={true}>
      <Example title="A simple Image from web source." code={example1jsx}>
        <Image
          style={{width: 50, height: 50}}
          source={{
            uri:
              'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
          }}
        />
      </Example>
      <Example
        title="An Image from web source stretched to fill view."
        code={example2jsx}>
        <Image
          style={{width: 75, height: 50, resizeMode: 'stretch'}}
          source={{
            uri:
              'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
          }}
        />
      </Example>
      <Example
        title="An Image from file source repeated to fill view."
        code={example3jsx}>
        <Image
          style={{width: 300, height: 50, resizeMode: 'repeat'}}
          source={require('../assets/tiny_logo.png')}
        />
      </Example>
      <Example
        title="An Image from file source scaled uniformly to fill view."
        code={example4jsx}>
        <Image
          style={{width: 75, height: 50, resizeMode: 'cover'}}
          source={require('../assets/tiny_logo.png')}
        />
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ImageExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Image',
            url: 'https://reactnative.dev/docs/image',
          },
          {
            label: 'Image Source Code',
            url:
              'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/Image/ImageViewManager.h',
          },
          {
            label: 'Wrapped XAML Control: Grid',
            url:
              'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.grid?view=winrt-19041',
          },
        ]}
      />
    </Page>
  );
};
