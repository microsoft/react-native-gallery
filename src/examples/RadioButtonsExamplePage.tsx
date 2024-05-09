'use strict';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import RadioGroup from 'react-native-radio-buttons-group';

export const RadioButtonsExamplePage: React.FunctionComponent<{}> = () => {
  const [radioSelection, setRadioSelection] = useState('3');
  const example1jsx = `<RadioGroup
  onPress={setRadioSelection}
  selectedId={radioSelection}
  radioButtons={[
    {
      id: '1',
      label: 'Option 1',
      value: 'option1'
    },
    {
        id: '2',
        label: 'Option 2',
        value: 'option2'
    },
    {
        id: '3',
        label: 'Option 3',
        value: 'option3'
    }
  ]}/>`;
  return (
    <Page
      title="Radio Buttons"
      description="Use radio buttons to let a user choose between mutually exclusive, related options."
      componentType="Community"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/RadioButtonsExamplePage.tsx"
      documentation={[
        {
          label: 'Radio Buttons Group',
          url: 'https://github.com/thakurballary/react-native-radio-buttons-group',
        },
      ]}>
      <Example title="A Radio Group" code={example1jsx}>
        <Text>Options:</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <RadioGroup
            onPress={setRadioSelection}
            selectedId={radioSelection}
            radioButtons={[
              {
                id: '1',
                label: 'Option 1',
                value: 'option1',
              },
              {
                id: '2',
                label: 'Option 2',
                value: 'option2',
              },
              {
                id: '3',
                label: 'Option 3',
                value: 'option3',
              },
            ]}
          />
          <Text>{`Output:
You selected Option ${radioSelection}`}</Text>
        </View>
      </Example>
    </Page>
  );
};
