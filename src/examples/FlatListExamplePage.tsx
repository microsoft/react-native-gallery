'use strict';
import {Text, FlatList, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';

const Data = [
  {
    id: '0',
    title: 'Item 1',
  },
  {
    id: '1',
    title: 'Item 2',
  },
  {
    id: '2',
    title: 'Item 3',
  },
  {
    id: '3',
    title: 'Item 4',
  },

  {
    id: '4',
    title: 'Item 5',
  },
];

export const FlatListExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = `<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}/>`;
  const example2jsx = `<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  ListHeaderComponent={
    <Text style={{fontStyle: 'italic'}}>
      This is a header at the start of the list.
    </Text>
  }
  ListFooterComponent={
    <Text style={{fontStyle: 'italic'}}>
      This is a footer at the end of the list.
    </Text>
  }/>`;
  const example3jsx = `<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  horizontal={true}
  inverted={true}/>`;
  const example4jsx = `<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  initialNumToRender={3}
  style={{height: 50}}/>`;
  const example5jsx = `<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  numColumns={3}/>`;

  const renderItem = ({item}) => (
    <View style={{padding: 5}}>
      <Text style={{color: colors.text}}>{item.title}</Text>
    </View>
  );

  return (
    <Page
      title="FlatList"
      description="A component for rendering flat lists in React Native which supports horizontal mode, headers, footers, separators, scroll loading, and more. "
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/FlatListExamplePage.tsx"
      documentation={[
        {
          label: 'Flat List',
          url: 'https://reactnative.dev/docs/flatlist',
        },
        {
          label: 'Flat List Source Code',
          url: 'https://github.com/facebook/react-native/blob/f638aff434760aafc2bb9622c0c18d81485a82e2/Libraries/Lists/FlatList.js',
        },
      ]}>
      <Example title="A simple FlatList." code={example1jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Example>
      <Example title="A FlatList with header and footer." code={example2jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={
            <Text style={{fontStyle: 'italic', color: colors.text}}>
              This is a header at the start of the list.
            </Text>
          }
          ListFooterComponent={
            <Text style={{fontStyle: 'italic', color: colors.text}}>
              This is a footer at the end of the list.
            </Text>
          }
        />
      </Example>
      <Example
        title="An inverted order FlatList with horizontal layout."
        code={example3jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          inverted={true}
        />
      </Example>
      <Example
        title="A FlatList inside of a fixed-height view."
        code={example4jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          initialNumToRender={3}
          style={{height: 50}}
        />
      </Example>
      <Example title="A multi-column FlatList." code={example5jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </Example>
    </Page>
  );
};
