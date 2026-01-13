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
  }
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
        width: 75,
        padding: 10,
        margin: 4,
        alignItems:'center',
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 4,
      }}
      accessibilityRole="text"
      accessibilityLabel={`${item.title}`}
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
          url: 'https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Lists/FlatList.js',
        },
      ]}>
      <Example ref={firstFlatListRef} title="A simple FlatList." code={example1jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
        />
      </Example>
      <Example title="A FlatList with header and footer." code={example2jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
          ListHeaderComponent={
            <Text style={{fontStyle: 'italic', color: colors.text,fontSize:20}}>
              This is a header at the start of the list.
            </Text>
          }
          ListFooterComponent={
            <Text style={{fontStyle: 'italic', color: colors.text,fontSize:20}}>
              This is a footer at the end of the list.
            </Text>
          } 
        />
      </Example>
      <Example
        // title="An inverted order FlatList with horizontal layout." // Revert once RNW #15510 is fixed
        title="A FlatList with horizontal layout." 
        code={example3jsx}>
        <FlatList
          data={Data}
          renderItem={renderAccessibleItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          // inverted={true}  // Revert once RNW #15510 is fixed

          contentContainerStyle={{ paddingHorizontal: 10}}
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
            contentContainerStyle={{paddingVertical: 5, alignItems: 'center'}}
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
          contentContainerStyle={{alignItems: 'center'}}
        />
      </Example>
    </Page>
  );
};
