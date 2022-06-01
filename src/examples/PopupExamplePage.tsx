'use strict';
import {Text, TouchableHighlight, View} from 'react-native';
import React, {useState, useRef} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Popup} from 'react-native-windows';
import {useTheme} from '@react-navigation/native';

export const PopupExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);
  const [showPopup4, setShowPopup4] = useState(false);

  const myRef = useRef();

  const example1jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup1(true);
  }}
  activeOpacity={0.2}
  underlayColor={color.border}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Popup isOpen={showPopup1}>
  <View>
    <Text>This is a popup.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowPopup1(false);
      }}
      activeOpacity={0.2}
      underlayColor={color.border}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example2jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup2(true);
  }}
  activeOpacity={0.2}
  underlayColor={color.border}>
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
      }}
      activeOpacity={0.2}
      underlayColor={color.border}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example3jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup3(true);
  }}
  activeOpacity={0.2}
  underlayColor={color.border}>
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
      }}
      activeOpacity={0.2}
      underlayColor={color.border}>
      <Text>Close Popup</Text>
    </TouchableHighlight>
  </View>
</Popup>`;
  const example4jsx = `<TouchableHighlight
  onPress={() => {
    setShowPopup4(true);
  }}
  ref={myRef}
  activeOpacity={0.2}
  underlayColor={color.border}>
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
      }}
      activeOpacity={0.2}
      underlayColor={color.border}>
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
      componentType="Core"
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
          accessibilityRole="button"
          accessibilityLabel={'example simple popup'}
          accessibilityHint={'click me to open the popup'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: colors.border,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup1(true);
          }}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup isOpen={showPopup1}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              accessibilityLabel={'example simple popup'}
              accessibilityHint={'click me to close the popup'}
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup1(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text style={{color: colors.text}}>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example
        title="A Popup that is dismissed when user clicks away."
        code={example2jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={
            'example popup that is dismissed when user clicks away'
          }
          accessibilityHint={'click me to open the popup'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: colors.border,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup2(true);
          }}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          isOpen={showPopup2}
          isLightDismissEnabled={true}
          onDismiss={() => {
            setShowPopup2(false);
          }}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup2(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text style={{color: colors.text}}>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example title="A Popup with offset position." code={example3jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={'example popup with offset position'}
          accessibilityHint={'click me to open the popup'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: colors.border,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup3(true);
          }}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
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
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <TouchableHighlight
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup3(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text style={{color: colors.text}}>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
      <Example
        title="A Popup with the button as its target."
        code={example4jsx}>
        <TouchableHighlight
          accessibilityRole="button"
          accessibilityLabel={
            'example popup with a touchablehighlight as target'
          }
          accessibilityHint={'click me to open the popup'}
          style={{
            height: 40,
            width: 150,
            backgroundColor: colors.border,
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup4(true);
          }}
          ref={myRef}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          isOpen={showPopup4}
          onDismiss={() => {
            setShowPopup4(false);
          }}
          target={myRef.current}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              accessibilityLabel={
                'example popup with touchablehighlight as target'
              }
              accessibilityHint={'click me to close the popup'}
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowPopup4(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text style={{color: colors.text}}>Close Popup</Text>
            </TouchableHighlight>
          </View>
        </Popup>
      </Example>
    </Page>
  );
};
