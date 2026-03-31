'use strict';
import {Switch} from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

// Replace TemplateExamplePage with <ComponentName>ExamplePage
export const SwitchExamplePage: React.FunctionComponent<{route?: any; navigation?: any}> = ({navigation}) => {
  const {colors} = useTheme();

  const firstSwitchRef = usePageFocusManagement(navigation);

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const onSwitchChange1 = () => {
    setSwitch1(!switch1);
  };
  const onSwitchChange2 = () => {
    setSwitch2(!switch2);
  };
  const onSwitchChange3 = () => {
    setSwitch3(!switch3);
  };

  const example1jsx = `<Switch
  value={switch1}
  onValueChange={onSwitchChange1} />`;
  const example2jsx = `<Switch
  value={switch2}
  onValueChange={onSwitchChange2}
  disabled />`;
  const example3jsx = `<Switch
  value={switch3}
  onValueChange={onSwitchChange3}
  thumbColor="#FFFFFF"
  trackColor={{false: colors.text, true: colors.primary}} />`;
  return (
    <Page
      title="Switch"
      description="Use the Switch component to present users with exactly two mutually exclusive options (like on/off), where choosing an option results in an immediate commit."
      wrappedNativeControl={{
        control: 'ToggleSwitch',
        url: 'https://docs.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.toggleswitch?view=winrt-19041',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/SwitchExamplePage.tsx"
      documentation={[
        {
          label: 'Switch',
          url: 'https://reactnative.dev/docs/switch',
        },
        {
          label: 'Switch Source Code',
          url: 'https://github.com/microsoft/react-native-windows/blob/main/vnext/src-win/Libraries/Components/Switch/Switch.windows.js',
        },
      ]}>
      <Example title="A simple Switch." code={example1jsx}>
        <Switch
          ref={firstSwitchRef}
          accessibilityLabel="simple switch example"
          value={switch1}
          onValueChange={onSwitchChange1}
        />
      </Example>
      <Example title="A disabled Switch." code={example2jsx}>
        <Switch
          accessibilityLabel="disabled switch example"
          value={switch2}
          onValueChange={onSwitchChange2}
          disabled
        />
      </Example>
      <Example title="A colorful Switch." code={example3jsx}>
        <Switch
          accessibilityLabel="colorful switch example"
          value={switch3}
          onValueChange={onSwitchChange3}
          thumbColor="#FFFFFF"
          trackColor={{false: colors.text, true: colors.primary}}
        />
      </Example>
    </Page>
  );
};
