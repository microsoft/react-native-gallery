'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';

// Fallback config values when react-native-config is not installed
const Config = {
  SERVICE_URL: 'https://example.com',
  SERVICE_PORT: '8080',
  SERVICE_API_KEY: '74970b3d-0bfb-4611-ba1d-dff7209ecc39',
};

export const ConfigExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example = `<>
  <Text>Service URL: {Config.SERVICE_URL}</Text>
  <Text>Service port: {Config.SERVICE_PORT}</Text>
  <Text>Service API key: {Config.SERVICE_API_KEY}</Text>
</>`;

  return (
    <Page
      title="Config Variables"
      description="Shows exposed config variables via the react-native-config module. Keep in mind this module doesn't obfuscate or encrypt secrets for packaging, so do not store sensitive keys in .env."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ConfigExamplePage.tsx"
      documentation={[
        {
          label: 'Config',
          url: 'https://github.com/react-native-config/react-native-config',
        },
      ]}>
      <Example title="Config Information" code={example}>
        <Text style={{color: colors.text}}>
          Service URL: {Config.SERVICE_URL}
        </Text>
        <Text style={{color: colors.text}}>
          Service port: {Config.SERVICE_PORT}
        </Text>
        <Text style={{color: colors.text}}>
          Service API key: {Config.SERVICE_API_KEY}
        </Text>
      </Example>
    </Page>
  );
};
