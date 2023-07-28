'use strict';
import {
  Text,
  View,
  TouchableHighlight,
  Platform,
  PlatformColor,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {Flyout} from 'react-native-windows';
import {useTheme} from '@react-navigation/native';

export const FlyoutExamplePage: React.FunctionComponent<{}> = () => {
  const [showFlyout1, setShowFlyout1] = useState(false);
  const [showFlyout2, setShowFlyout2] = useState(false);
  const [showFlyout3, setShowFlyout3] = useState(false);
  const [showFlyout4, setShowFlyout4] = useState(false);

  const myRef = useRef();
  const {colors} = useTheme();

  const example1jsx = `<TouchableHighlight
  onPress={() => {
    setShowFlyout1(true);
  }}
  activeOpacity={0.2}
  underlayColor={colors.border}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Flyout
  isOpen={showFlyout1}
  onDismiss={() => {
    setShowFlyout1(false);
  }}>
  <View>
    <Text>This is a flyout.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowFlyout1(false);
      }}
      activeOpacity={0.2}
      underlayColor={colors.border}>
      <Text>Close Flyout</Text>
    </TouchableHighlight>
  </View>
</Flyout>`;
  const example2jsx = `<TouchableHighlight
  onPress={() => {
    setShowFlyout2(true);
  }}
  activeOpacity={0.2}
  underlayColor={colors.border}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Flyout
  isOpen={showFlyout2}
  onDismiss={() => {
    setShowFlyout2(false);
  }}
  isLightDismissEnabled={false}>
  <View>
    <Text>This is a flyout.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowFlyout2(false);
      }}
      activeOpacity={0.2}
      underlayColor={colors.border}>
      <Text>Close Flyout</Text>
    </TouchableHighlight>
  </View>
</Flyout>`;
  const example3jsx = `<TouchableHighlight
  onPress={() => {
    setShowFlyout3(true);
  }}
  activeOpacity={0.2}
  underlayColor={colors.border}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Flyout
  isOpen={showFlyout3}
  onDismiss={() => {
    setShowFlyout3(false);
  }}
  horizontalOffset={200}
  verticalOffset={200}>
  <View>
    <Text>This is a flyout.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowFlyout3(false);
      }}
      activeOpacity={0.2}
      underlayColor={colors.border}>
      <Text>Close Flyout</Text>
    </TouchableHighlight>
  </View>
</Flyout>`;
  const example4jsx = `<TouchableHighlight
  onPress={() => {
    setShowFlyout4(true);
  }}
  ref={myRef}
  activeOpacity={0.2}
  underlayColor={colors.border}>
  <Text>Open Popup</Text>
</TouchableHighlight>
<Flyout
  isOpen={showFlyout4}
  onDismiss={() => {
    setShowFlyout4(false);
  }}
  target={myRef.current}
  placement="bottom-edge-aligned-left">
  <View>
    <Text>This is a flyout.</Text>
    <TouchableHighlight
      onPress={() => {
        setShowFlyout4(false);
      }}
      activeOpacity={0.2}
      underlayColor={colors.border}>
      <Text>Close Flyout</Text>
    </TouchableHighlight>
  </View>
</Flyout>`;

  return (
    <Page
      title="Flyout"
      description="Represents a control that displays a view of information possibly requiring user interaction. Unlike a dialog, a Flyout by default can be light dismissed by clicking or tapping outside of it, pressing the device's back button, or pressing the 'Esc' key."
      wrappedNativeControl={{
        control: 'Flyout',
        url: 'https://docs.microsoft.com/en-us/uwp/api/Windows.UI.Xaml.Controls.Flyout?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/FlyoutExamplePage.tsx"
      documentation={[
        {
          label: 'Flyout',
          url: 'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/FlyoutViewManager.h',
        },
      ]}>
      <Example title="A simple Flyout." code={example1jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowFlyout1(true);
          }}
          accessibilityRole="button"
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Flyout
          isOpen={showFlyout1}
          onDismiss={() => {
            setShowFlyout1(false);
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
            <Text style={{color: colors.text}}>This is a flyout.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowFlyout1(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text>Close Flyout</Text>
            </TouchableHighlight>
          </View>
        </Flyout>
      </Example>
      <Example title="A Flyout without light dismiss." code={example2jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowFlyout2(true);
          }}
          accessibilityRole="button"
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Flyout
          isOpen={showFlyout2}
          onDismiss={() => {
            setShowFlyout2(false);
          }}
          isLightDismissEnabled={false}>
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a flyout.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowFlyout2(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text>Close Flyout</Text>
            </TouchableHighlight>
          </View>
        </Flyout>
      </Example>
      <Example title="A Flyout with position offset." code={example3jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowFlyout3(true);
          }}
          accessibilityRole="button"
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Flyout
          isOpen={showFlyout3}
          onDismiss={() => {
            setShowFlyout3(false);
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
            <Text style={{color: colors.text}}>This is a flyout.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowFlyout3(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text>Close Flyout</Text>
            </TouchableHighlight>
          </View>
        </Flyout>
      </Example>
      <Example
        title="A Flyout attached to a target with bottom left-aligned placement."
        code={example4jsx}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 150,
            backgroundColor:
              Platform.OS === 'windows'
                ? PlatformColor('SystemColorButtonFaceColor')
                : 'silver',
            borderRadius: 3,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setShowFlyout4(true);
          }}
          accessibilityRole="button"
          ref={myRef}
          activeOpacity={0.2}
          underlayColor={colors.border}>
          <Text style={{color: colors.text}}>Open Popup</Text>
        </TouchableHighlight>
        <Flyout
          isOpen={showFlyout4}
          onDismiss={() => {
            setShowFlyout4(false);
          }}
          target={myRef.current}
          placement="bottom-edge-aligned-left">
          <View
            style={{
              backgroundColor: colors.background,
              width: 200,
              height: 125,
              borderRadius: 3,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{color: colors.text}}>This is a flyout.</Text>
            <TouchableHighlight
              accessibilityRole="button"
              style={{
                height: 40,
                width: 150,
                backgroundColor: colors.border,
                borderRadius: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setShowFlyout4(false);
              }}
              activeOpacity={0.2}
              underlayColor={colors.border}>
              <Text>Close Flyout</Text>
            </TouchableHighlight>
          </View>
        </Flyout>
      </Example>
    </Page>
  );
};
