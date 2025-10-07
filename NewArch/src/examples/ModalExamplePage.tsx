'use strict';
import {Modal, Button, View, Text, StyleSheet, Dimensions, PlatformColor, AccessibilityInfo} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {usePageFocusManagement} from '../hooks/usePageFocusManagement';

export const ModalExamplePage: React.FunctionComponent<{navigation?: any}> = ({navigation}) => {
  const firstModalExampleRef = usePageFocusManagement(navigation);
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const changeModal1 = () => {
    AccessibilityInfo.announceForAccessibility("This is a simple modal")
    setModal1(!modal1);
  };
  const changeModal2 = () => {
    AccessibilityInfo.announceForAccessibility("This is a modal with more complex styling")
    setModal2(!modal2);
  };
  const changeModal3 = () => {
    AccessibilityInfo.announceForAccessibility("Modal Events onShow onDismiss events count close Modal")
    setModal3(!modal3);
  };

  const [onDismissCount, setOnDismissCount] = React.useState(0);
  const [onShowCount, setOnShowCount] = React.useState(0);

  const example1jsx = `
  const [modal1, setModal1] = React.useState(false);
  <Button title='Open Modal' accessibilityLabel='Open Modal' onPress={()=>{setModal1(!modal1)}} onAccessibilityTap={()=>{setModal1(!modal1)}}/>
  <Modal visible={modal1}>
    <View style={{width: 500, height: 200}}>
      <Text>This is a Modal Screen</Text>
      <Button title='Close Modal' accessibilityLabel='Close Modal' onPress={()=>{setModal1(!modal1)}} onAccessibilityTap={()=>{setModal1(!modal1)}}/>
    </View>
  </Modal>`;
  const example2jsx = `
  const [modal2, setModal2] = React.useState(false);
  <Button title='Open Modal' accessibilityLabel='Open Modal' onPress={()=>{setModal2(!modal2)}} onAccessibilityTap={()=>{setModal2(!modal2)}}/>
   <Modal visible={modal2}>
     <View style={[styles.centeredView, styles.modalBackdrop]}>
      <View style={styles.modalView}>
       <Text style={styles.textStyle}>This is a Modal with more complex styling</Text>
       <Button title='Close Modal' accessibilityLabel='Close Modal' style={styles.button} onPress={()=>{setModal2(!modal2)}} onAccessibilityTap={()=>{setModal2(!modal2)}}/>
      </View>
     </View>
    </Modal>`;
  const example3jsx = `
  const [modal3, setModal3] = React.useState(false);
  <Button title='Open Modal' accessibilityLabel='Open Modal' onPress={()=>{setModal3(!modal3)}} onAccessibilityTap={()=>{setModal3(!modal3)}}/>
    <Modal
      visible={modal3}
      onDismiss={() => {
      setOnDismissCount(onDismissCount + 1);
      }}
      onShow={() => {
        setOnShowCount(onShowCount + 1);
      }}>
      <View style={{width: 500, height: 400}}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}}>Modal Events</Text>
        <Text>onShow event Count = {onShowCount}</Text>
        <Text>onDismiss event Count = {onDismissCount}</Text>
        <Text style={styles.textStyle}> </Text>
      </View>
        <Button
          title="Close Modal"
          accessibilityLabel="Close Modal"
          onPress={() => {
          setModal3(!modal3);
          }} 
          onAccessibilityTap={() => {
            setModal3(!modal3);
          }}/>
      </View>
    </Modal>`;

  // Add refs for the first focusable element in each modal
  const modal1FirstButtonRef = React.useRef<any>(null);
  const modal2FirstButtonRef = React.useRef<any>(null);
  const modal3FirstButtonRef = React.useRef<any>(null);

  // Focus the first element when modal opens
  React.useEffect(() => {
    if (modal1 && modal1FirstButtonRef.current && typeof modal1FirstButtonRef.current.focus === 'function') {
      modal1FirstButtonRef.current.focus();
    }
  }, [modal1]);
  React.useEffect(() => {
    if (modal2 && modal2FirstButtonRef.current && typeof modal2FirstButtonRef.current.focus === 'function') {
      modal2FirstButtonRef.current.focus();
    }
  }, [modal2]);
  React.useEffect(() => {
    if (modal3 && modal3FirstButtonRef.current && typeof modal3FirstButtonRef.current.focus === 'function') {
      modal3FirstButtonRef.current.focus();
    }
  }, [modal3]);

  return (
    <Page
      title="Modal"
      description="Modal is a basic way to present content above an enclosing view."
      wrappedNativeControl={{
        control: '',
        url: '',
      }}
      componentType="Core"
      pageCodeUrl="https://github.com/microsoft/react-native-gallery/blob/main/src/examples/ModalExamplePage.tsx"
      documentation={[
        {
          label: 'Modal',
          url: 'https://reactnative.dev/docs/modal',
        },
        {
          label: 'Modal Source Code',
          url: 'https://github.com/microsoft/react-native-windows/tree/main/vnext/Microsoft.ReactNative/Fabric/Composition/Modal',
        },
      ]}>
      <Example title="A simple Modal." code={example1jsx}>
        <Button
          ref={firstModalExampleRef}
          title="Open Modal"
          accessibilityLabel="Open Modal"
          onPress={changeModal1}
          onAccessibilityTap={changeModal1}/>
        <Modal visible={modal1}>
            <View style={styles.simpleModalView}>
              <Text style={styles.simpleModalText}>This is a simple Modal</Text>
              <Button
                color={'#8D8383'}
                ref={modal1FirstButtonRef}
                title="Close Modal"
                accessibilityLabel="Close Modal"
                onPress={changeModal1}
                onAccessibilityTap={changeModal1}/>
            </View>
        </Modal>
      </Example>
      <Example
        title="A modal with more complex styling and takes up the whole application"
        code={example2jsx}>
        <Button
          title="Open Modal"
          accessibilityLabel="Open Modal"
          onPress={changeModal2}
          onAccessibilityTap={changeModal2}/>
        <Modal visible={modal2}>
          <View style={[styles.centeredView, styles.modalBackdrop]}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>
                This is a Modal with more complex styling
              </Text>
              <Button
                ref={modal2FirstButtonRef}
                title="Close Modal"
                accessibilityLabel="Close Modal"
                onPress={changeModal2}
                onAccessibilityTap={changeModal2}/>
            </View>
          </View>
        </Modal>
      </Example>
      <Example title="A Modal with events" code={example3jsx}>
        <Button
          title="Open Modal"
          accessibilityLabel="Open Modal"
          onPress={changeModal3}
          onAccessibilityTap={changeModal3}/>
          <View style={styles.container}>
              <Text style={{fontWeight: 'bold'}}>Modal Events</Text>
              <Text>onShow event Count = {onShowCount}</Text>
              <Text>onDismiss event Count = {onDismissCount}</Text>
              <Text style={styles.textStyle}> </Text>
            </View>
        <Modal
          visible={modal3}
          onDismiss={() => {
            setOnDismissCount(onDismissCount + 1);
          }}
          onShow={() => {
            setOnShowCount(onShowCount + 1);
          }}>
          <View style={{width: 500, height: 400}}>
            <View style={styles.container}>
              <Text style={{fontWeight: 'bold'}}>Modal Events</Text>
              <Text>onShow event Count = {onShowCount}</Text>
              <Text>onDismiss event Count = {onDismissCount}</Text>
            </View>
            <Button
              ref={modal3FirstButtonRef}
              title="Close Modal"
              accessibilityLabel="Close Modal"
              onPress={changeModal3}
              onAccessibilityTap={changeModal3}/>
          </View>
        </Modal>
      </Example>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    //display: 'flex',
    alignItems: 'center',
    padding: 10,
  },
  centeredView: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width, // can remove when bumped to 78
    height: Dimensions.get('window').height, // can remove when bumped to 78
  },
  modalBackdrop: {
    backgroundColor: PlatformColor('ControlFillColorSecondaryBrush'),
  },
  modalView: {
    margin: 20,
    backgroundColor: PlatformColor('ControlFillColorDefaultBrush'),
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
    elevation: 2,
  },
  textStyle: {
    color: PlatformColor('TextControlForeground'),
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    marginBottom: 20,
  },
  simpleModalView: {
    width: 500,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  simpleModalText: {
    color: 'black',
    marginBottom: 20,
  },
});