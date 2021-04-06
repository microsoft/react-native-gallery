'use strict';
import {Button} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import RNPrint from 'react-native-print';
import {useTheme} from '@react-navigation/native';

export const PrintExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example = `<Button
  color={colors.primary}
  onPress={async () => {
    await RNPrint.print({
      filePath:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    });
  }}
  title="Print PDF" />`;

  const printRemotePDF = async () => {
    await RNPrint.print({
      filePath:
        'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    });
  };

  return (
    <Page
      title="Print"
      description="Print documents via the react-native-print module."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PrintExamplePage.tsx"
      documentation={[
        {
          label: 'Print',
          url: 'https://github.com/christopherdro/react-native-print',
        },
      ]}>
      <Example title="Print PDF document" code={example}>
        <Button
          color={colors.primary}
          onPress={printRemotePDF}
          title="Print PDF"
        />
      </Example>
    </Page>
  );
};
