'use strict';
import {
  Button,
  Text,
  TouchableHighlight,
  View,
  Platform,
  PlatformColor,
} from 'react-native';
import React, {useState, useEffect} from 'react';
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

  const popupRef: React.RefObject<Popup> = React.createRef<Popup>();
  const popup2Ref: React.RefObject<Popup> = React.createRef<Popup>();
  const popup3Ref: React.RefObject<Popup> = React.createRef<Popup>();
  const popup4Ref: React.RefObject<Popup> = React.createRef<Popup>();

  const viewRef: React.RefObject<View> = React.createRef<View>();
  const view2Ref: React.RefObject<View> = React.createRef<View>();
  const view3Ref: React.RefObject<View> = React.createRef<View>();
  const view4Ref: React.RefObject<View> = React.createRef<View>();

  const buttonRef: React.RefObject<Button> = React.createRef<Button>();
  const button2Ref: React.RefObject<Button> = React.createRef<Button>();
  const button3Ref: React.RefObject<Button> = React.createRef<Button>();
  const button4Ref: React.RefObject<Button> = React.createRef<Button>();

  useEffect(() => {
    setTimeout(setFocus, 50);
  });

  const setFocus = () => {
    if (popupRef.current?.props.isOpen) {
      viewRef.current?.focus();
    }

    if (popup2Ref.current?.props.isOpen) {
      view2Ref.current?.focus();
    }

    if (popup3Ref.current?.props.isOpen) {
      view3Ref.current?.focus();
    }

    if (popup4Ref.current?.props.isOpen) {
      view4Ref.current?.focus();
    }
  };

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
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.primitives.popup?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PopupExamplePage.tsx"
      documentation={[
        {
          label: 'Popup',
          url: 'https://microsoft.github.io/react-native-windows/docs/popup-component',
        },
        {
          label: 'Popup Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/PopupViewManager.h',
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
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemListLowColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup1(true);
          }}
          activeOpacity={0.2}
          ref={buttonRef}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          accessible
          focusable
          accessibilityHint={'this is the popup'}
          isOpen={showPopup1}
          ref={popupRef}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}
            accessible={true}
            accessibilityRole={'alert'}
            focusable={true}
            ref={viewRef}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <Button
              accessibilityLabel={'Close Popup'}
              title={'Close Popup'}
              color={
                Platform.OS === 'windows'
                  ? PlatformColor('SystemListLowColor')
                  : colors.border
              }
              onPress={() => {
                setShowPopup1(false);
                buttonRef.current?.focus();
              }}
            />
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
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemListLowColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup2(true);
          }}
          activeOpacity={0.2}
          ref={button2Ref}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          accessible
          focusable
          ref={popup2Ref}
          isOpen={showPopup2}
          isLightDismissEnabled={true}
          onDismiss={() => {
            setShowPopup2(false);
          }}>
          <View
            accessible
            focusable
            accessibilityRole={'alert'}
            ref={view2Ref}
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <Button
              accessibilityLabel={'Close Popup'}
              title={'Close Popup'}
              color={
                Platform.OS === 'windows'
                  ? PlatformColor('SystemListLowColor')
                  : colors.border
              }
              onPress={() => {
                setShowPopup2(false);
                button2Ref.current?.focus();
              }}
            />
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
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemListLowColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup3(true);
          }}
          activeOpacity={0.2}
          ref={button3Ref}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          accessible
          focusable
          ref={popup3Ref}
          isOpen={showPopup3}
          onDismiss={() => {
            setShowPopup3(false);
          }}
          horizontalOffset={200}
          verticalOffset={200}>
          <View
            accessible
            focusable
            accessibilityRole={'alert'}
            ref={view3Ref}
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <Button
              accessibilityLabel={'Close Popup'}
              title={'Close Popup'}
              color={
                Platform.OS === 'windows'
                  ? PlatformColor('SystemListLowColor')
                  : colors.border
              }
              onPress={() => {
                setShowPopup3(false);
                button3Ref.current?.focus();
              }}
            />
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
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemListLowColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowPopup4(true);
          }}
          activeOpacity={0.2}
          ref={button4Ref}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Popup
          accessible
          focusable
          ref={popup4Ref}
          isOpen={showPopup4}
          onDismiss={() => {
            setShowPopup4(false);
          }}>
          <View
            accessible
            focusable
            accessibilityRole={'alert'}
            ref={view4Ref}
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a popup.</Text>
            <Button
              accessibilityLabel={'Close Popup'}
              title={'Close Popup'}
              color={
                Platform.OS === 'windows'
                  ? PlatformColor('SystemListLowColor')
                  : colors.border
              }
              onPress={() => {
                setShowPopup4(false);
                button4Ref.current?.focus();
              }}
            />
          </View>
        </Popup>
      </Example>
    </Page>
  );
};
