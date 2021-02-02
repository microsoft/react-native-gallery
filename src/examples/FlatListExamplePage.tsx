'use strict';
import {Text, FlatList, View} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {LinkContainer} from '../components/LinkContainer';

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
  const example1jsx = `import {Text, FlatList, View} from 'react-native';
  
<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}/>`;
  const example2jsx = `import {Text, FlatList, View} from 'react-native';
  
<FlatList
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
  const example3jsx = `import {Text, FlatList, View} from 'react-native';
  
<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  horizontal={true}
  inverted={true}/>`;
  const example4jsx = `import {Text, FlatList, View} from 'react-native';
  
<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  initialNumToRender={3}
  style={{height: 50}}/>`;
  const example5jsx = `import {Text, FlatList, View} from 'react-native';
  
<FlatList
  data={Data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  numColumns={3}/>`;

  const renderItem = ({item}) => (
    <View style={{padding: 5}}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <Page
      title="FlatList"
      description="A component for rendering flat lists in React Native which supports horizontal mode, headers, footers, separators, scroll loading, and more. ">
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
            <Text style={{fontStyle: 'italic'}}>
              This is a header at the start of the list.
            </Text>
          }
          ListFooterComponent={
            <Text style={{fontStyle: 'italic'}}>
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
      <Example title="A mutli-column FlatList." code={example5jsx}>
        <FlatList
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </Example>
      {/*pageCodeUrl link should be link to source code for the page in react-native-gallery repo*/}
      {/*feedbackUrl link should be link to issues page in react-native-gallery repo*/}
      {/*entries in the documentation prop should be labels and urls that point to the Github repo for the component
        and any other applicable documentation for the component such as information on facebook's react native website.*/}
      <LinkContainer
        pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/FlatListExamplePage.tsx"
        feedbackUrl="https://github.com/microsoft/react-native-gallery/issues/new"
        documentation={[
          {
            label: 'Flat List',
            url: 'https://reactnative.dev/docs/flatlist',
          },
          {
            label: 'Flat List Source Code',
            url:
              'https://github.com/facebook/react-native/blob/f638aff434760aafc2bb9622c0c18d81485a82e2/Libraries/Lists/FlatList.js',
          },
        ]}
      />
    </Page>
  );
};
