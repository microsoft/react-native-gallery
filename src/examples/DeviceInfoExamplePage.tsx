'use strict';
import {Linking, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import DeviceInfo, {
  getIpAddress,
  useDeviceName,
} from 'react-native-device-info';

export const DeviceInfoExamplePage: React.FunctionComponent<{}> = () => {
  const exampleSysInfo = `<>
  <Text>System Name: {DeviceInfo.getSystemName()}</Text>
  <Text>System Version: {DeviceInfo.getSystemVersion()}</Text>
</>`;

  const exampleDeviceInfo =
    "<Text>Device Name: {JSON.stringify(useDeviceName(), null, '  ')}</Text>";

  const exampleNetworkInfo = '<Text>IP address: {ipAddress}</Text>';

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
      description="Shows available device information via the react-native-device-info module."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/DeviceInfoExamplePage.tsx"
      documentation={[
        {
          label: 'DeviceInfo',
          url:
            'https://github.com/react-native-device-info/react-native-device-info',
        },
      ]}>
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
        <Text>Device Name: {JSON.stringify(useDeviceName(), null, '  ')}</Text>
      </Example>

      <Example title="Network Information" code={exampleNetworkInfo}>
        <Text>IP address: {ipAddress}</Text>
      </Example>
    </Page>
  );
};
