'use strict';
import {Text, TouchableHighlight, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Popup} from 'react-native-windows';

export const PopupExamplePage: React.FunctionComponent<{}> = () => {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);

  const myRef = useRef();

  const example1jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup1(true);
  }}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Popup isOpen={showPopup1}>
  <View>
    <Text>This is a popup.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowPopup1(false);
      }}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example2jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup2(true);
  }}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Popup
  isOpen={showPopup2}
  isLightDismissEnabled={true}
  onDismiss={() => {
    setShowPopup2(false);
  }}>
  <View>
    <Text>This is a popup.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowPopup2(false);
      }}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example3jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup3(true);
  }}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Popup
  isOpen={showPopup3}
  onDismiss={() => {
    setShowPopup3(false);
  }}
  horizontalOffset={200}
  verticalOffset={200}>
  <View>
    <Text>This is a popup.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowPopup3(false);
      }}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example4jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup4(true);
  }}
  ref={myRef}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Popup
  isOpen={showPopup4}
  onDismiss={() => {
    setShowPopup4(false);
  }}
  target={myRef.current}>
  <View>
    <Text>This is a popup.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowPopup4(false);
      }}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;

  return (
    <Page
      title="Popup"
      description="Displays a dismissable view of content on top of existing content in the application window."
      wrappedNativeControl={{
        control: 'Popup',
        url:
          'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.primitives.popup?view=winrt-19041',
      }}
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PopupExamplePage.tsx"
      documentation={[
        {
          label: 'Popup',
          url:
            'https://microsoft.github.io/react-native-windows/docs/popup-component',
        },
        {
          label: 'Popup Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/PopupViewManager.h',
        },
      ]}>
      <Example title="A simple Popup." code={example1jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#E6E6E6',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup1(true);
          }}>
          <Text>Open Popup</Text>
        </TouchableHighlight>
        <Popup isOpen={showPopup1}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: '#E6E6E6',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup1(false);
              }}>
              <Text>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example
        title="A Popup that is dismissed when user clicks away."
        code={example2jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#E6E6E6',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup2(true);
          }}>
          <Text>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          isOpen={showPopup2}
          isLightDismissEnabled={true}
          onDismiss={() => {
            setShowPopup2(false);
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: '#E6E6E6',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup2(false);
              }}>
              <Text>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example title="A Popup with offset position." code={example3jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#E6E6E6',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup3(true);
          }}>
          <Text>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          isOpen={showPopup3}
          onDismiss={() => {
            setShowPopup3(false);
          }}
          horizontalOffset={200}
          verticalOffset={200}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: '#E6E6E6',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup3(false);
              }}>
              <Text>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example
        title="A Popup with the button as its target."
        code={example4jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor: '#E6E6E6',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup4(true);
          }}
          ref={myRef}>
          <Text>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          isOpen={showPopup4}
          onDismiss={() => {
            setShowPopup4(false);
          }}
          target={myRef.current}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: '#E6E6E6',
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup4(false);
              }}>
              <Text>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
    </Page>
  );
};
