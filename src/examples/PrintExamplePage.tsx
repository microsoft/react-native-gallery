'use strict';
import {Button} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';
import RNPrint from 'react-native-print';

export const PrintExamplePage: React.FunctionComponent<{}> = () => {
  const example = `import RNPrint from 'react-native-print';

function Example() {
  const printRemotePDF = async() => {
    await RNPrint.print({ filePath: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' })
  }

  return (
    <Button onPress={printRemotePDF} title="Print PDF" />
  );
}`;

  const printRemotePDF = async() => {
    await RNPrint.print({ filePath: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' })
  }

  return (
    <Page
      title="Print"
      description="Print documents via the react-native-print module.">
      <Example title="Print PDF document" code={example}>
        <Button onPress={printRemotePDF} title="Print PDF" />
      </Example>
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PrintExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Print',
            url:
              'https://github.com/christopherdro/react-native-print',
          },
        ]}
      />
    </Page>
  );
};
