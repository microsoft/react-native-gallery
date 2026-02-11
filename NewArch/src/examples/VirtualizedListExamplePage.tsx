'use strict';
import {
  View,
  VirtualizedList,
  StyleSheet,
  Text,
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
    <Pressable style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
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
    <Pressable style={index === selectedIndex? styles.itemSelected : styles.item}
    onPress={() => {setSelectedIndex(index)}}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
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
    <Pressable
      style={index === selectedIndex2 ? styles.itemSelected : styles.item}
      onPress={() => {
        onPressSupport({index});
      }}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );

  const Item3CheckBox = ({title, index}) => (
    <Pressable
      style={getList.includes(index) ? styles.itemSelected : styles.item}
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
    </Pressable>
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
  const itemRefs = useRef<{[key: number]: any}>({});
  const itemRefs2 = useRef<{[key: number]: any}>({});
  const itemRefs3 = useRef<{[key: number]: any}>({});

  // Track focused index for arrow key navigation
  const [focusedIndex1, setFocusedIndex1] = useState<number | null>(null);
  const [focusedIndex2, setFocusedIndex2] = useState<number | null>(null);
  const [focusedIndex3, setFocusedIndex3] = useState<number | null>(null);

  const ITEM_COUNT = 50;

  // Arrow key navigation handler factory
  const createKeyDownHandler = (
    focusedIndex: number | null,
    setFocusedIndex: (index: number) => void,
    refs: React.MutableRefObject<{[key: number]: any}>,
  ) => {
    return (e: any, currentIndex: number) => {
      if (e.nativeEvent.key === 'ArrowDown') {
        e.preventDefault();
        e.stopPropagation?.();
        const nextIndex = Math.min(currentIndex + 1, ITEM_COUNT - 1);
        if (refs.current[nextIndex]) {
          refs.current[nextIndex].focus();
          setFocusedIndex(nextIndex);
        }
      } else if (e.nativeEvent.key === 'ArrowUp') {
        e.preventDefault();
        e.stopPropagation?.();
        const prevIndex = Math.max(currentIndex - 1, 0);
        if (refs.current[prevIndex]) {
          refs.current[prevIndex].focus();
          setFocusedIndex(prevIndex);
        }
      }
    };
  };

  const handleKeyDown1 = createKeyDownHandler(focusedIndex1, setFocusedIndex1, itemRefs);
  const handleKeyDown2 = createKeyDownHandler(focusedIndex2, setFocusedIndex2, itemRefs2);
  const handleKeyDown3 = createKeyDownHandler(focusedIndex3, setFocusedIndex3, itemRefs3);

  // Focus management for renderItem2 - focus selected item after selection
  useEffect(() => {
    if (selectedIndex !== undefined && itemRefs2.current[selectedIndex]) {
      itemRefs2.current[selectedIndex].focus();
    }
  }, [selectedIndex]);

  // Focus management for renderItem3 single selection
  useEffect(() => {
    if (selectedIndex2 !== undefined && itemRefs3.current[selectedIndex2]) {
      itemRefs3.current[selectedIndex2].focus();
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

  const renderItem = ({item}: {item: any}) => {
    return (
      <Pressable
        ref={(ref) => (itemRefs.current[item.index] = ref)}
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        style={styles.item}
        onFocus={() => setFocusedIndex1(item.index)}
        {...({
          onKeyDown: (e: any) => handleKeyDown1(e, item.index),
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}
      >
        <Text style={styles.title}>{item.title}</Text>
      </Pressable>
    );
  };

  const renderItem2 = ({item}: {item: any}) => {
    return (
      <Pressable
        ref={(ref) => (itemRefs2.current[item.index] = ref)}
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        style={item.index === selectedIndex ? styles.itemSelected : styles.item}
        accessibilityState={{selected: item.index === selectedIndex}}
        onPress={() => {
          setSelectedIndex(item.index);
      
        }}
        onAccessibilityTap={() => {
          setSelectedIndex(item.index);
        }}
        onFocus={() => setFocusedIndex2(item.index)}
        {...({
          onKeyDown: (e: any) => handleKeyDown2(e, item.index),
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <Text style={item.index === selectedIndex ? styles.titleSelected : styles.title}>{item.title}</Text>
      </Pressable>
    );
  };

  const renderItem3 = ({item}: {item: any}) => {
    return selectedSupport === 'Multiple' ? (
      <Pressable
        ref={(ref) => (itemRefs3.current[item.index] = ref)}
        accessibilityLabel={item.title}
        accessibilityRole="listitem"
        accessible={true}
        style={getList.includes(item.index) ? styles.itemSelected : styles.item}
        accessibilityState={{selected: getList.includes(item.index)}}
        onPress={() => {
          if (getList.includes(item.index)) {
            setList(getList.filter((value) => value !== item.index));
          } else {
            setList(getList.concat([item.index]));
          }
        }}
        onFocus={() => setFocusedIndex3(item.index)}
        {...({
          onKeyDown: (e: any) => handleKeyDown3(e, item.index),
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <View style={styles.item}>
          <Text style={getList.includes(item.index) ? styles.titleSelected : styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    ) : (
      <Pressable
        ref={(ref) => (itemRefs3.current[item.index] = ref)}
        accessibilityLabel={item.title}        
        accessibilityRole="listitem"
        accessible={true}
        style={
          item.index === selectedIndex2 ? styles.itemSelected : styles.item
        }
        accessibilityState={{selected: item.index === selectedIndex2}}
        onPress={() => {
          setSelectedIndex2(item.index);
        }}
        onAccessibilityTap={() => {
          setSelectedIndex2(item.index);
        }}
        onFocus={() => setFocusedIndex3(item.index)}
        {...({
          onKeyDown: (e: any) => handleKeyDown3(e, item.index),
          keyboardEvents: ['keyDown'],
          focusable: true,
        } as any)}>
        <Text style={item.index === selectedIndex2 ? styles.titleSelected : styles.title}>{item.title}</Text>
      </Pressable>
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
