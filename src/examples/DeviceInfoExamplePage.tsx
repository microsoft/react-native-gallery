'use strict';
import {Linking, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import DeviceInfo, {
  getIpAddress,
  useDeviceName,
} from 'react-native-device-info';
import {LinkContainer} from '../components/LinkContainer';

export const DeviceInfoExamplePage: React.FunctionComponent<{}> = () => {
  const exampleSysInfo = `import DeviceInfo from 'react-native-device-info';

function Example() {
  return (
    <>
      <Text>System Name: {DeviceInfo.getSystemName()}</Text>
      <Text>System Version: {DeviceInfo.getSystemVersion()}</Text>
    </>
  );
}`;

  const exampleDeviceInfo = `import { useDeviceName } from 'react-native-device-info';

function Example() {
  const deviceName = useDeviceName();
  return <Text>Device Name: {JSON.stringify(deviceName, null, '  ')}</Text>;
}`;

  const exampleNetworkInfo = `import DeviceInfo, { getIpAddress } from 'react-native-device-info';

function Example() {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    if (!ipAddress) {
      getIpAddressAsync();
    }
  }, []);

  const getIpAddressAsync = async () => {
    const address = await getIpAddress();
    setIpAddress(address);
  };

  return <Text>IP address: {ipAddress}</Text>;
}`;

  const deviceName = useDeviceName();

  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    if (!ipAddress) {
      getIpAddressAsync();
    }
  }, []);

  const getIpAddressAsync = async () => {
    const address = await getIpAddress();
    setIpAddress(address);
  };

  return (
    <Page
      title="Device Info"
      description="Shows available device information via the react-native-device-info module.">
      <View>
        <Text>
          For more information about each platform's supported APIs, check out
          the{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(
                'https://github.com/react-native-device-info/react-native-device-info/blob/master/README.md#api',
              )
            }>
            documentation
          </Text>
          .
        </Text>
      </View>

      <Example title="System Information" code={exampleSysInfo}>
        <Text>System Name: {DeviceInfo.getSystemName()}</Text>
        <Text>System Version: {DeviceInfo.getSystemVersion()}</Text>
      </Example>

      <Example title="Device Information" code={exampleDeviceInfo}>
        <Text>Device Name: {JSON.stringify(deviceName, null, '  ')}</Text>
      </Example>

      <Example title="Network Information" code={exampleNetworkInfo}>
        <Text>IP address: {ipAddress}</Text>
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/DeviceInfoExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'DeviceInfo',
            url:
              'https://github.com/react-native-device-info/react-native-device-info',
          },
        ]}
      />
    </Page>
  );
};
