'use strict';
import {Image} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';

export const ImageExamplePage: React.FunctionComponent<{}> = () => {
  const example1jsx = `<Image
  style={{width: 50, height: 50}}
  source={{
    uri: 'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
  }}/>`;
  const example2jsx = `<Image
  style={{width: 75, height: 50}}
  source={{
    uri: 'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
  }}
  resizeMode='stretch'/>`;
  const example3jsx = `<Image
  style={{width: 300, height: 50}}
  source={require('../assets/tiny_logo.png')}
  resizeMode='repeat'/>`;
  const example4jsx = `<Image
  style={{width: 75, height: 50}}
  source={require('../assets/tiny_logo.png')}
  resizeMode='cover'/>`;

  return (
    <Page
      title="Image"
      description="A component which scales and displays images."
      wrappedNativeControl={{
        control: 'Grid',
        url:
          'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.grid?view=winrt-19041',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ImageExamplePage.tsx"
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
      ]}>
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
          style={{width: 75, height: 50}}
          source={{
            uri:
              'https://user-images.githubusercontent.com/33470154/104789118-fa16eb80-5748-11eb-9870-68360eca6fa6.png',
          }}
          resizeMode='stretch'
        />
      </Example>
      <Example
        title="An Image from file source repeated to fill view."
        code={example3jsx}>
        <Image
          style={{width: 300, height: 50}}
          source={require('../assets/tiny_logo.png')}
          resizeMode='repeat'
        />
      </Example>
      <Example
        title="An Image from file source scaled uniformly to fill view."
        code={example4jsx}>
        <Image
          style={{width: 75, height: 50}}
          source={require('../assets/tiny_logo.png')}
          resizeMode='cover'
        />
      </Example>
    </Page>
  );
};
