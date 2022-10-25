'use strict';
import {SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar, Button, Pressable, TouchableHighlight,ScrollView } from 'react-native';
import React, {useState} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';

export const VirtualizedListExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const example1jsx = '<View />';

  const DATA = [];
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedIndex2, setSelectedIndex2] = useState();
  const [selectedSupport, setSelectedSupport] = useState("None");

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index+1}`,
    index: index
  });
  
  const getItemCount = (data) => 1000;
  
  const Item = ({ title, index }) => (
    <TouchableHighlight style={index === selectedIndex? styles.itemSelected : styles.item} activeOpacity={0.6}
    underlayColor={colors.border} onPress={() => {setSelectedIndex(index)}}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );

  const Item2 = ({ title, index }) => (
    <TouchableHighlight style={index === selectedIndex2? styles.itemSelected : styles.item} activeOpacity={0.6}
    underlayColor={colors.border} onPress={() => {setSelectedIndex2(index)}}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );

  const styles = StyleSheet.create({
    container: {
        height: 300,
        width: 500,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: '#8D8D8D',
    },
    selectionContainer: {
        marginLeft: 30,
    },
    item: {
        padding: 5,
        paddingHorizontal: 10,
        marginVertical: 3,
    },
    itemSelected: {
        borderRadius: 2,
        padding: 5,
        paddingHorizontal: 10,
        marginVertical: 3,
        backgroundColor: colors.border,
    },
    title: {
      fontSize: 20,
      color: colors.text
    },
    list: {
        
    }
  });

  const renderItem = ({item}) => {
    return (<Item title={item.title} index={item.index}/>);
  };

  const renderItem2 = ({item}) => {
    return (<Item2 title={item.title} index={item.index}/>);
  };
  

  return (
    <Page
      title="VirtualizedList"
      description="Base implementation for the more convenient <FlatList> and <SectionList> components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides, e.g. for use with immutable data instead of plain arrays."
      wrappedNativeControl={{
        control: 'ViewPanel',
        url:
          'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewPanel.',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ViewExamplePage.tsx"
      documentation={[
        {
          label: 'View',
          url: 'https://reactnative.dev/docs/view',
        },
        {
          label: 'View Source Code',
          url:
            'https://github.com/microsoft/react-native-windows/blob/master/vnext/Microsoft.ReactNative/Views/ViewViewManager.h',
        },
      ]}>
      <Example title="A simple VirtualizedList." code={example1jsx}>
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <VirtualizedList
                    data={DATA}
                    initialNumToRender={30}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    style={styles.list}
                />
            </View>
        </ScrollView>
      </Example>

      <Example title="A VirtualizedList with Selection Support." code={example1jsx}>
        <ScrollView horizontal={true}>
            <View style={styles.container}>
                <VirtualizedList
                    data={DATA}
                    initialNumToRender={30}
                    renderItem={renderItem2}
                    keyExtractor={item => item.title}
                    getItemCount={getItemCount}
                    getItem={getItem}
                    style={styles.list}
                />
            </View>
            <View style={styles.selectionContainer}>
                <Text>Selection Support</Text>
                <Picker
                    style={{height: 50, width: 200, marginTop:10}}
                    itemStyle={{color: colors.text}}
                    selectedValue={selectedSupport}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedSupport(itemValue)
                      }>
                    
                    <Picker.Item label="None" value="None"/>
                    <Picker.Item label="Single" value="Single" />
                    <Picker.Item label="Multiple" value="Multiple" />
                </Picker>
            </View>
        </ScrollView>
      </Example>
    </Page>
  );
};