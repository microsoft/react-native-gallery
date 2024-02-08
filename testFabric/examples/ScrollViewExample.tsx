'use strict';
import {Text, ScrollView} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
// import {useTheme} from '@react-navigation/native';

export const ScrollViewExamplePage: React.FunctionComponent<{}> = () => {
  //   const {colors} = useTheme();
  const example1jsx = `<ScrollView style={{height: 40}}>
  <Text>
    Here is a very long snippet of text. The goal is for this text to be
    too long to fit inside this view which has a height restriction.
    Thus, scrolling will be necessary to see all of the content. This is
    an example of a simple ScrollView. We just have text inside this
    view, but you can add any type of ReactNode inside of of a
    ScrollView. Let's repeat this text again to grow its length. Here is
    a very long snippet of text. The goal is for this text to be too
    long to fit inside this view which has a height restriction. Thus,
    scrolling will be necessary to see all of the content. This is an
    example of a simple ScrollView. We just have text inside this view,
    but you can add any type of ReactNode inside of of a ScrollView.
  </Text>
</ScrollView>`;
  const example2jsx = `<ScrollView style={{height: 40}} horizontal={true}>
  <Text>
    Here is a very long snippet of text. The goal is for this text to be
    too long to fit inside this view which has a height restriction.
    Thus, scrolling will be necessary to see all of the content. This is
    an example of a simple ScrollView. We just have text inside this
    view, but you can add any type of ReactNode inside of of a
    ScrollView.
  </Text>
</ScrollView>`;
  const example3jsx = `<ScrollView style={{height: 40}} scrollEnabled={false}>
  <Text>
    Here is a very long snippet of text. The goal is for this text to be
    too long to fit inside this view which has a height restriction.
    Thus, scrolling will be necessary to see all of the content. This is
    an example of a simple ScrollView. We just have text inside this
    view, but you can add any type of ReactNode inside of of a
    ScrollView. Let's repeat this text again to grow its length. Here is
    a very long snippet of text. The goal is for this text to be too
    long to fit inside this view which has a height restriction. Thus,
    scrolling will be necessary to see all of the content. This is an
    example of a simple ScrollView. We just have text inside this view,
    but you can add any type of ReactNode inside of of a ScrollView.
  </Text>
</ScrollView>`;
  const example4jsx = `<ScrollView style={{height: 50, padding: 10}}>
  <Text numberOfLines={5}>
    Here is a very long snippet of text. The goal is for this text to be
    too long to fit inside this view which has a height restriction.
    Thus, scrolling will be necessary to see all of the content. This is
    an example of a simple ScrollView. We just have text inside this
    view, but you can add any type of ReactNode inside of of a
    ScrollView. Let's repeat this text again to grow its length. Here is
    a very long snippet of text. The goal is for this text to be too
    long to fit inside this view which has a height restriction. Thus,
    scrolling will be necessary to see all of the content. This is an
    example of a simple ScrollView. We just have text inside this view,
    but you can add any type of ReactNode inside of of a ScrollView.
  </Text>
  <ScrollView style={{height: 40}} horizontal={true}>
    <Text style={{fontStyle: 'italic', fontWeight: '600'}}>
      Here is a very long snippet of text. The goal is for this text to
      be too long to fit inside this view which has a height
      restriction. Thus, scrolling will be necessary to see all of the
      content. This is an example of a simple ScrollView. We just have
      text inside this view, but you can add any type of ReactNode
      inside of of a ScrollView. Let's repeat this text again to grow
      its length. Here is a very long snippet of text. The goal is for
      this text to be too long to fit inside this view which has a
      height restriction. Thus, scrolling will be necessary to see all
      of the content. This is an example of a simple ScrollView. We just
      have text inside this view, but you can add any type of ReactNode
      inside of of a ScrollView.
    </Text>
  </ScrollView>
</ScrollView>`;

  return (
    <Page
      title="ScrollView"
      description="ScrollView is a scrollable view which can display content outside of the initial viewing window by scrolling down the page."
      wrappedNativeControl={{
        control: 'ScrollViewer',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.scrollviewer?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ScrollViewExamplePage.tsx"
      documentation={[
        {
          label: 'ScrollView',
          url: 'https://reactnative.dev/docs/scrollview',
        },
        {
          label: 'ScrollView Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ScrollViewManager.h',
        },
      ]}>
      <Example title="A simple ScrollView with text." code={example1jsx}>
        <ScrollView style={{height: 40}}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>
            Here is a very long snippet of text. The goal is for this text to be
            too long to fit inside this view which has a height restriction.
            Thus, scrolling will be necessary to see all of the content. This is
            an example of a simple ScrollView. We just have text inside this
            view, but you can add any type of ReactNode inside of of a
            ScrollView. Let's repeat this text again to grow its length. Here is
            a very long snippet of text. The goal is for this text to be too
            long to fit inside this view which has a height restriction. Thus,
            scrolling will be necessary to see all of the content. This is an
            example of a simple ScrollView. We just have text inside this view,
            but you can add any type of ReactNode inside of of a ScrollView.
          </Text>
        </ScrollView>
      </Example>
      <Example title="A horizontal ScrollView." code={example2jsx}>
        <ScrollView style={{height: 40}} horizontal={true}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>
            Here is a very long snippet of text. The goal is for this text to be
            too long to fit inside this view which has a height restriction.
            Thus, scrolling will be necessary to see all of the content. This is
            an example of a simple ScrollView. We just have text inside this
            view, but you can add any type of ReactNode inside of of a
            ScrollView.
          </Text>
        </ScrollView>
      </Example>
      <Example title="A disabled ScrollView." code={example3jsx}>
        <ScrollView style={{height: 40}} scrollEnabled={false}>
          <Text style={{color: 'rgb(28, 28, 30)'}}>
            Here is a very long snippet of text. The goal is for this text to be
            too long to fit inside this view which has a height restriction.
            Thus, scrolling will be necessary to see all of the content. This is
            an example of a simple ScrollView. We just have text inside this
            view, but you can add any type of ReactNode inside of of a
            ScrollView. Let's repeat this text again to grow its length. Here is
            a very long snippet of text. The goal is for this text to be too
            long to fit inside this view which has a height restriction. Thus,
            scrolling will be necessary to see all of the content. This is an
            example of a simple ScrollView. We just have text inside this view,
            but you can add any type of ReactNode inside of of a ScrollView.
          </Text>
        </ScrollView>
      </Example>
      <Example
        title="Nested ScrollViews with opposite scroll direction."
        code={example4jsx}>
        <ScrollView style={{height: 50, padding: 10}}>
          <Text numberOfLines={5} style={{color: 'rgb(28, 28, 30)'}}>
            Here is a very long snippet of text. The goal is for this text to be
            too long to fit inside this view which has a height restriction.
            Thus, scrolling will be necessary to see all of the content. This is
            an example of a simple ScrollView. We just have text inside this
            view, but you can add any type of ReactNode inside of of a
            ScrollView. Let's repeat this text again to grow its length. Here is
            a very long snippet of text. The goal is for this text to be too
            long to fit inside this view which has a height restriction. Thus,
            scrolling will be necessary to see all of the content. This is an
            example of a simple ScrollView. We just have text inside this view,
            but you can add any type of ReactNode inside of of a ScrollView.
          </Text>
          <ScrollView style={{height: 40}} horizontal={true}>
            <Text
              style={{
                fontStyle: 'italic',
                fontWeight: '600',
                color: 'rgb(28, 28, 30)',
              }}>
              Here is a very long snippet of text. The goal is for this text to
              be too long to fit inside this view which has a height
              restriction. Thus, scrolling will be necessary to see all of the
              content. This is an example of a simple ScrollView. We just have
              text inside this view, but you can add any type of ReactNode
              inside of of a ScrollView. Let's repeat this text again to grow
              its length. Here is a very long snippet of text. The goal is for
              this text to be too long to fit inside this view which has a
              height restriction. Thus, scrolling will be necessary to see all
              of the content. This is an example of a simple ScrollView. We just
              have text inside this view, but you can add any type of ReactNode
              inside of of a ScrollView.
            </Text>
          </ScrollView>
        </ScrollView>
      </Example>
    </Page>
  );
};
