'use strict';
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  TouchableHighlight,
  ScrollView,
  Pressable,
  Platform,
  PlatformColor,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
// import CheckBox from '@react-native-community/checkbox';
import {useTheme} from '../Navigation';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';
// import {Picker} from '@react-native-picker/picker';

export const VirtualizedListExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstVirtualizedListRef = usePageFocusManagement(navigation);
  const {colors} = useTheme();

  // Focus the first VirtualizedList when component mounts
  useEffect(() => {
    if (firstVirtualizedListRef?.current) {
      firstVirtualizedListRef.current.focus();
    }
  }, [firstVirtualizedListRef]);

  const example1jsx = `
  var DATA: INT[] = [];
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: \`Item \${index + 1}\`,
    index: index,
  });

  const getItemCount = (data) => 50;

  const renderItem = ({item}) => {
    return (<Item title={item.title} index={item.index}/>);
  };

  const Item = ({ title, index }) => (
    <TouchableHighlight style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );

  <VirtualizedList
    data={DATA}
    initialNumToRender={30}
    renderItem={renderItem}
    keyExtractor={item => item.title}
    getItemCount={getItemCount}
    getItem={getItem}
  />`;

  const example2jsx = `
  var DATA: INT[] = [];
  const [selectedIndex, setSelectedIndex] = useState();
  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: \`Item \${index + 1}\`,
    index: index,
  });

  const getItemCount = (data) => 50;

  const renderItem = ({item}) => {
    return (<Item title={item.title} index={item.index}/>);
  };

  const Item = ({ title, index }) => (
    <TouchableHighlight style={index === selectedIndex? styles.itemSelected : styles.item} activeOpacity={0.6}
    underlayColor={colors.border} onPress={() => {setSelectedIndex(index)}}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );

  return (
  <VirtualizedList
    data={DATA}
    initialNumToRender={30}
    renderItem={renderItem}
    keyExtractor={item => item.title}
    getItemCount={getItemCount}
    getItem={getItem}
  );`;

  const example3jsx = `
  var DATA: INT[] = [];
  const [selectedIndex2, setSelectedIndex2] = useState();
  const [selectedSupport, setSelectedSupport] = useState('None');
  const [getList, setList] = useState([]);

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: \`Item \${index + 1}\`,
    index: index,
  });

  const getItemCount = (data) => 50;

  const Item3 = ({title, index}) => (
    <TouchableHighlight
      style={index === selectedIndex2 ? styles.itemSelected : styles.item}
      activeOpacity={selectedSupport === 'None' ? 1 : 0.6}
      underlayColor={selectedSupport === 'None' ? '' : colors.border}
      onPress={() => {
        onPressSupport({index});
      }}>
      <Text style={styles.title}>{title}</Text>
    </TouchableHighlight>
  );

  const Item3CheckBox = ({title, index}) => (
    <TouchableHighlight
      style={getList.includes(index) ? styles.itemSelected : styles.item}
      activeOpacity={selectedSupport === 'None' ? 1 : 0.6}
      underlayColor={selectedSupport === 'None' ? '' : colors.border}
      onPress={() => {
        onPressSupport({index});
      }}>
      <View style={styles.item}>
        <CheckBox
          value={getList.includes(index) ? true : false}
          onValueChange={() => {
            onPressSupport({index});
          }}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  );

  const onPressSupport = ({index}) => {
    if (selectedSupport === 'None') {
      return;
    } else if (selectedSupport === 'Single') {
      setSelectedIndex2(index);
    } else if (selectedSupport === 'Multiple') {
      if (getList.includes(index)) {
        setList(getList.filter((item) => item !== index));
      } else {
        setList(getList.concat([index]));
      }
    }
  };

  return (
    <View style={styles.container}>
            <VirtualizedList
              data={DATA}
              initialNumToRender={10}
              renderItem={renderItem3}
              keyExtractor={(item) => item.title}
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </View>
          <View style={styles.selectionContainer}>
            <Text>Selection Support</Text>
            <Picker
              style={{height: 50, width: 200, marginTop: 10}}
              itemStyle={{color: colors.text}}
              selectedValue={selectedSupport}
              onValueChange={(itemValue) => {
                setSelectedSupport(itemValue);
                setList([]);
              }}>
              <Picker.Item label="None" value="None" />
              <Picker.Item label="Single" value="Single" />
              <Picker.Item label="Multiple" value="Multiple" />
            </Picker>
          </View>
  );`;

  var DATA: INT[] = [];
  const [selectedIndex, setSelectedIndex] = useState();
  const [selectedIndex2, setSelectedIndex2] = useState();
  const [selectedSupport, setSelectedSupport] = useState('Multiple');
  const [getList, setList] = useState([]);

  // Refs for focus management
  const itemRefs = useRef({});
  const itemRefs2 = useRef({});
  const itemRefs3 = useRef({});

  // Focus management for renderItem2
  useEffect(() => {
    if (selectedIndex !== undefined && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].focus();
    }
  }, [selectedIndex]);

  // Focus management for renderItem3 single selection
  useEffect(() => {
    if (selectedIndex2 !== undefined && itemRefs2.current[selectedIndex2]) {
      itemRefs2.current[selectedIndex2].focus();
    }
  }, [selectedIndex2]);

  // Focus management for renderItem3 multiple selection
  useEffect(() => {
    if (getList.length > 0 && itemRefs3.current[getList[getList.length - 1]]) {
      itemRefs3.current[getList[getList.length - 1]].focus();
    }
  }, [getList]);

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
    index: index,
  });

  const getItemCount = () => 50;

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
    selectionButton: {
      borderRadius: 2,
      padding: 8,
      marginTop: 10,
      minWidth: 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
    },
    selectionButtonText: {
      textAlign: 'center',
      color: colors.text,
    },
    item: {
      padding: 5,
      paddingHorizontal: 10,
      marginVertical: 3,
      display: 'flex',
      flexDirection: 'row',
    },
    itemSelected: {
      borderRadius: 2,
      padding: 5,
      paddingHorizontal: 10,
      marginVertical: 3,
      backgroundColor: colors.primary,
    },
    title: {
      fontSize: 20,
      color: colors.text,
    },
    titleSelected: {
      fontSize: 20,
      color: colors.background,
    },
  });

  const renderItem = ({item}) => {
    return (
      <TouchableHighlight
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        focusable={true}
        style={styles.item}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableHighlight>
    );
  };

  const renderItem2 = ({item}) => {
    return (
      <TouchableHighlight
        ref={(ref) => (itemRefs.current[item.index] = ref)}
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        focusable={true}
        style={item.index === selectedIndex ? styles.itemSelected : styles.item}
        accessibilityState={{selected: item.index === selectedIndex}}
        activeOpacity={0.6}
        underlayColor={colors.border}
        onPress={() => {
          setSelectedIndex(item.index);
      
        }}
        onAccessibilityTap={() => {
          setSelectedIndex(item.index);
        }}>
        <Text style={item.index === selectedIndex ? styles.titleSelected : styles.title}>{item.title}</Text>
      </TouchableHighlight>
    );
  };

  const renderItem3 = ({item}) => {
    return selectedSupport === 'Multiple' ? (
      <TouchableHighlight
        ref={(ref) => (itemRefs3.current[item.index] = ref)}
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        focusable={true}
        style={getList.includes(item.index) ? styles.itemSelected : styles.item}
        accessibilityState={{selected: getList.includes(item.index)}}
        activeOpacity={0.6}
        underlayColor={colors.border}
        onPress={() => {
          if (getList.includes(item.index)) {
            setList(getList.filter((value) => value !== item.index));
          } else {
            setList(getList.concat([item.index]));
          }
        }}>
        <View style={styles.item}>
          <Text style={getList.includes(item.index) ? styles.titleSelected : styles.title}>{item.title}</Text>
        </View>
      </TouchableHighlight>
    ) : (
      <TouchableHighlight
        ref={(ref) => (itemRefs2.current[item.index] = ref)}
        accessibilityLabel={item.title}        
        accessibilityRole="listitem"
        accessible={true}
        focusable={true}
        style={
          item.index === selectedIndex2 ? styles.itemSelected : styles.item
        }
        accessibilityState={{selected: item.index === selectedIndex2}}
        activeOpacity={0.6}
        underlayColor={colors.border}
        onPress={() => {
          setSelectedIndex2(item.index);
        }}
        onAccessibilityTap={() => {
          setSelectedIndex2(item.index);
        }}>
        <Text style={item.index === selectedIndex2 ? styles.titleSelected : styles.title}>{item.title}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <Page
      title="VirtualizedList"
      description="Base implementation for the more convenient <FlatList> and <SectionList> components, which are also better documented. In general, this should only really be used if you need more flexibility than FlatList provides, e.g. for use with immutable data instead of plain arrays."
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/VirtualizedListExamplePage.tsx"
      documentation={[
        {
          label: 'VirtualizedList',
          url: 'https://reactnative.dev/docs/virtualizedlist',
        },
        {
          label: 'VirtualizedList Source Code',
          url: 'https://github.com/facebook/react-native/blob/main/Libraries/Lists/VirtualizedList.js',
        },
      ]}>
      <Example title="A simple VirtualizedList." code={example1jsx}>
        <ScrollView horizontal={true}>
          <View
            ref={firstVirtualizedListRef}
            style={styles.container}
            accessibilityLabel="VirtualizedList container">
            <VirtualizedList
              accessibilityRole="list"
              data={DATA}
              initialNumToRender={10}
              renderItem={renderItem}
              keyExtractor={(item) => item.title}
              getItemCount={getItemCount}
              getItem={getItem}
              accessibilityLabel={'A simple VirtualizedList'}
              focusable={true}
            />
          </View>
        </ScrollView>
      </Example>

      <Example
        title="A VirtualizedList with single selection support"
        code={example2jsx}>
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <VirtualizedList
              accessibilityRole="list"
              data={DATA}
              initialNumToRender={10}
              renderItem={renderItem2}
              keyExtractor={(item) => item.title}
              getItemCount={getItemCount}
              getItem={getItem}
              accessibilityLabel={
                'A VirtualizedList with single selection support'
              }
              focusable={true}
            />
          </View>
        </ScrollView>
      </Example>

      <Example
        title="A VirtualizedList with multiple selection support."
        code={example3jsx}>
        <ScrollView horizontal={true}>
          <View style={styles.container}>
            <VirtualizedList
              accessibilityRole="list"
              data={DATA}
              initialNumToRender={10}
              renderItem={renderItem3}
              keyExtractor={(item) => item.title}
              getItemCount={getItemCount}
              getItem={getItem}
              accessibilityLabel={
                'A VirtualizedList with multiple selection support'
              }
              focusable={true}
            />
          </View>
          <View style={styles.selectionContainer}>
            <Text style={{color: colors.text}}>Selection Support</Text>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={'selection support pressable'}
              accessibilityValue={{text: selectedSupport}}
              accessibilityHint={'click me to change selection support'}
              style={({pressed}) => [
                styles.selectionButton,
                {
                  backgroundColor: pressed
                    ? colors.primary
                    : Platform.OS === 'windows'
                    ? PlatformColor('SystemColorButtonFaceColor')
                    : colors.card,
                  borderColor: colors.border,
                },
              ]}
              onPress={() => {
                if (selectedSupport === 'Single') {
                  setSelectedSupport('Multiple');
                } else {
                  setSelectedSupport('Single');
                }
              }}
            >
              <Text 
                style={[
                  styles.selectionButtonText,
                  // No need for pressed text color as it's handled in base style
                ]}
              >
                Selection Support: {selectedSupport}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </Example>
    </Page>
  );
};
