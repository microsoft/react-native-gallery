'use strict';
import {Text, ScrollView, View, Dimensions} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const ScrollViewExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstScrollViewExampleRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();
  
  // Refs and state for keyboard-focusable ScrollViews
  const horizontalScrollViewRef = React.useRef<ScrollView>(null);
  const [scrollOffset, setScrollOffset] = React.useState(0);
  
  // Keyboard event handler for horizontal ScrollView
  const handleHorizontalScrollViewKeyDown = (e: any) => {
    if (!horizontalScrollViewRef.current) return;
    
    const windowWidth = Dimensions.get('window').width;
    const scrollAmount = windowWidth * 0.1; // 10% of window width
    
    if (e.nativeEvent.key === 'ArrowLeft') {
      e.preventDefault();
      const newOffset = Math.max(0, scrollOffset - scrollAmount);
      setScrollOffset(newOffset);
      horizontalScrollViewRef.current.scrollTo({
        x: newOffset,
        animated: true,
      });
    } else if (e.nativeEvent.key === 'ArrowRight') {
      e.preventDefault();
      const newOffset = scrollOffset + scrollAmount;
      setScrollOffset(newOffset);
      horizontalScrollViewRef.current.scrollTo({
        x: newOffset,
        animated: true,
      });
    }
  };

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
      <Example ref={firstScrollViewExampleRef} title="A simple ScrollView with text." code={example1jsx}>
        <ScrollView style={{height: 40}}>
          <Text style={{color: colors.text}}>
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
          <Text style={{color: colors.text}}>
            Here is a very long snippet of text. The goal is for this text to be
            too long to fit inside this view which has a height restriction.
            Thus, scrolling will be necessary to see all of the content. This is
            an example of a simple ScrollView. We just have text inside this
            view, but you can add any type of ReactNode inside of of a
            ScrollView.
          </Text>
        </ScrollView>
      </Example>
      <Example title="A keyboard-focusable horizontal ScrollView." code={`<View>
  <Text style={{marginBottom: 8, color: 'gray', fontSize: 12}}>
    Focus this ScrollView with Tab, then use Arrow Left/Right keys to scroll
  </Text>
  <ScrollView 
    ref={horizontalScrollViewRef}
    style={{height: 40, borderWidth: 1, borderColor: 'gray'}} 
    horizontal={true}
    onKeyDown={(e) => {
      const windowWidth = Dimensions.get('window').width;
      const scrollAmount = windowWidth * 0.1; // 10% of window width
      // Handle arrow key navigation...
    }}
    keyboardEvents={['keyDown']}
    focusable={true}
    onScroll={(event) => setScrollOffset(event.nativeEvent.contentOffset.x)}
    scrollEventThrottle={16}>
    <Text>
      Here is a very long snippet of text that requires horizontal scrolling...
    </Text>
  </ScrollView>
</View>`}>
        <View>
          <Text style={{marginBottom: 8, color: colors.text, fontSize: 12}}>
            Focus this ScrollView with Tab, then use Arrow Left/Right keys to scroll
          </Text>
          <ScrollView 
            ref={horizontalScrollViewRef}
            style={{height: 40, borderWidth: 1, borderColor: colors.border}} 
            horizontal={true}
            {...({
              onKeyDown: handleHorizontalScrollViewKeyDown,
              keyboardEvents: ['keyDown'],
              focusable: true,
            } as any)}
            onScroll={(event: any) => setScrollOffset(event.nativeEvent.contentOffset.x)}
            scrollEventThrottle={16}>
            <Text style={{color: colors.text}}>
              Here is a very long snippet of text. The goal is for this text to be
              too long to fit inside this view which has a width restriction, so you
              can use the arrow keys to scroll horizontally when this ScrollView is focused.
              This demonstrates keyboard navigation support for horizontal ScrollViews.
              You can press Tab to focus this ScrollView, then use the Left and Right arrow
              keys to scroll the content horizontally. This is very useful for accessibility
              and keyboard-only navigation. Let's make this text even longer to demonstrate
              the scrolling functionality more effectively.
            </Text>
          </ScrollView>
        </View>
      </Example>
      <Example title="A disabled ScrollView." code={example3jsx}>
        <ScrollView style={{height: 40}} scrollEnabled={false}>
          <Text style={{color: colors.text}}>
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
          <Text numberOfLines={5} style={{color: colors.text}}>
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
                color: colors.text,
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
