'use strict';
import {View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import Pdf from 'react-native-pdf';

export const PDFExamplePage: React.FunctionComponent<{}> = () => {
  const example = `import Pdf from 'react-native-pdf';
function Example() {
  const source = { uri:"ms-appx:///dummy.pdf" }
  const state = { width: 800, height: 600 }
  return (
    <View style={{flex:1, width: state.width, height: state.height}}>
      <Pdf
        source={source} 
        scale={state.scale}
        horizontal={state.horizontal}
        style={{flex:1}}/>
    </View>
  );
}`;

  return (
    <Page
      title="PDF"
      description="Shows a PDF via the react-native-pdf module."
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/PDFExamplePage.tsx"
      documentation={[
        {
          label: 'PDF',
          url: 'https://github.com/wonday/react-native-pdf',
        },
      ]}>
      <Example title="PDF" code={example}>
        <View style={{flex: 1, width: 800, height: 600}}>
          <Pdf
            source={{uri: 'ms-appx:///dummy.pdf'}}
            scale={1}
            horizontal={false}
            style={{flex: 1}}
          />
        </View>
      </Example>
    </Page>
  );
};
