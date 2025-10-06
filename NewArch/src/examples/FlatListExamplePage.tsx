'use strict';
import {Text, FlatList, View, Pressable} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

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
  {
    id: '5',
    title: 'Item 6',
  },
  {
    id: '6',
    title: 'Item 7',
  },
  {
    id: '7',
    title: 'Item 8',
  },
  {
    id: '8',
    title: 'Item 9',
  },
  {
    id: '9',
    title: 'Item 10',
  },
  {
    id: '10',
    title: 'Item 11',
  },
  {
    id: '11',
    title: 'Item 12',
  },
  {
    id: '12',
    title: 'Item 13',
  },
  {
    id: '13',
    title: 'Item 14',
  },
  {
    id: '14',
    title: 'Item 15',
  },
  {
    id: '15',
    title: 'Item 16',
  },
  {
    id: '16',
    title: 'Item 17',
  },
  {
    id: '17',
    title: 'Item 18',
  },
  {
    id: '18',
    title: 'Item 19',
  },
  {
    id: '19',
    title: 'Item 20',
  },
];

export const FlatListExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstFlatListRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();

  const example1jsx = `<FlatList
  data={Data}
  renderItem={renderAccessibleItem}
  keyExtractor={(item) => item.id}/>`;
  const example2jsx = `<FlatList
  data={Data}
  renderItem={renderAccessibleItem}
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
  renderItem={renderAccessibleItem}
  keyExtractor={(item) => item.id}
  horizontal={true}
  inverted={true}/>`;
  const example4jsx = `<View style={{height: 150, backgroundColor: colors.card, borderRadius: 8, padding: 5}}>
  <FlatList
    data={Data}
    renderItem={renderAccessibleItem}
    keyExtractor={(item) => item.id}
    initialNumToRender={10}
    showsVerticalScrollIndicator={true}
    style={{flex: 1}}
    contentContainerStyle={{paddingVertical: 5}}
    accessible={true}
    accessibilityLabel="Scrollable list of items in a fixed height container"
    accessibilityHint="Use arrow keys to navigate through the list items"
  />
</View>`;
  const example5jsx = `<FlatList
  data={Data}
  renderItem={renderAccessibleItem}
  keyExtractor={(item) => item.id}
  numColumns={3}/>`;

  // Create a specialized render function for the fixed-height example to improve accessibility
  const renderAccessibleItem = ({item}: {item: any}) => (
    <Pressable
      style={{
        padding: 10,
        marginVertical: 2,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
      }}
      accessibilityRole="button"
      accessibilityLabel={`List item ${item.id}: ${item.title}`}
      accessibilityHint="Tap to select this item"
      onPress={() => {
        console.log(`Selected: ${item.title}`);
      }}
      onAccessibilityTap={() => {
        console.log(`Accessibility tap: ${item.title}`);
      }}>
      <Text style={{color: colors.text, fontSize: 14}}>{item.title}</Text>
    </Pressable>
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
      <Example ref={firstFlatListRef} title="A simple FlatList." code={example1jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
        />
      </Example>
      <Example title="A FlatList with header and footer." code={example2jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
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
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          inverted={true}
        />
      </Example>
      <Example
        title="A FlatList inside of a fixed-height view."
        code={example4jsx}>
        <View style={{height: 150, backgroundColor: colors.card, borderRadius: 8, padding: 5}}>
          <FlatList
            data={Data}
            renderItem={renderAccessibleItem}
            keyExtractor={(item) => item.id}
            initialNumToRender={10}
            showsVerticalScrollIndicator={true}
            style={{flex: 1}}
            contentContainerStyle={{paddingVertical: 5}}
            accessible={true}
            accessibilityLabel="Scrollable list of items in a fixed height container"
            accessibilityHint="Use arrow keys to navigate through the list items"
          />
        </View>
      </Example>
      <Example title="A mutli-column FlatList." code={example5jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
        />
      </Example>
    </Page>
  );
};
