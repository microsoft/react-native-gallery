'use strict';
import {Text} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Config from 'react-native-config';

export const ConfigExamplePage: React.FunctionComponent<{}> = () => {
  const example = `import Config from 'react-native-config';

function Example() {
  return (
    <>
      <Text>Service URL: {Config.SERVICE_URL}</Text>
      <Text>Service port: {Config.SERVICE_PORT}</Text>
      <Text>Service API key: {Config.SERVICE_API_KEY}</Text>
    </>
  );
}`;

  const dotenv = `SERVICE_URL=https://example.com
SERVICE_PORT=8080
SERVICE_API_KEY=74970b3d-0bfb-4611-ba1d-dff7209ecc39`;

  return (
    <Page
      title="Config Variables"
      description="Shows exposed config variables via the react-native-config module. Keep in mind this module doesn't obfuscate or encrypt secrets for packaging, so do not store sensitive keys in .env."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ConfigExamplePage.tsx"
      documentation={[
        {
          label: 'Config',
          url: 'https://github.com/luggit/react-native-config',
        },
      ]}>
      <Example title="Config Information" code={example}>
        <Text>Service URL: {Config.SERVICE_URL}</Text>
        <Text>Service port: {Config.SERVICE_PORT}</Text>
        <Text>Service API key: {Config.SERVICE_API_KEY}</Text>
      </Example>
      <Example title=".env file" code={dotenv} />
    </Page>
  );
};
