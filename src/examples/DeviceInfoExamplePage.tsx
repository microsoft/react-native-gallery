'use strict';
import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import DeviceInfo, {
  getIpAddress,
  useDeviceName,
} from 'react-native-device-info';
import {useTheme} from '@react-navigation/native';

export const DeviceInfoExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

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
  });

  const getIpAddressAsync = async () => {
    const address = await getIpAddress();
    setIpAddress(address);
  };

  return (
    <Page
      title="Device Info"
      description="The DeviceInfo module shows available device information."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/DeviceInfoExamplePage.tsx"
      documentation={[
        {
          label: 'DeviceInfo',
          url: 'https://github.com/react-native-device-info/react-native-device-info',
        },
      ]}>
      <Example title="System Information" code={exampleSysInfo}>
        <Text style={{color: colors.text}}>
          System Name: {DeviceInfo.getSystemName()}
        </Text>
        <Text style={{color: colors.text}}>
          System Version: {DeviceInfo.getSystemVersion()}
        </Text>
      </Example>

      <Example title="Device Information" code={exampleDeviceInfo}>
        <Text style={{color: colors.text}}>
          Device Name: {JSON.stringify(useDeviceName(), null, '  ')}
        </Text>
      </Example>

      <Example title="Network Information" code={exampleNetworkInfo}>
        <Text style={{color: colors.text}}>IP address: {ipAddress}</Text>
      </Example>
    </Page>
  );
};
