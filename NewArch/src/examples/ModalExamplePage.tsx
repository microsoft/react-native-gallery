'use strict';
import {Modal, Button, View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {Example} from '../components/Example';
import {Page} from '../components/Page';
import {useTheme} from '../Navigation';

export const ModalExamplePage: React.FunctionComponent<{}> = () => {
  const {colors} = useTheme();

  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);

  const [onDismissCount, setOnDismissCount] = React.useState(0);
  const [onShowCount, setOnShowCount] = React.useState(0);

  const example1jsx = `Button title='Open Modal' onPress={()=>{setModal1(!modal1)}}></Button>
  <Modal visible={modal1}>
    <View style={{width: 500, height: 200}}>
      <Text>This is a Modal Screen</Text>
      <Button title='Close Modal' onPress={()=>{setModal1(!modal1)}}></Button>
    </View>
  </Modal>`;
  const example2jsx = `<Button title='Open Modal' onPress={()=>{setModal2(!modal2)}}></Button>
   <Modal visible={modal2}>
     <View style={[styles.centeredView, styles.modalBackdrop]}>
      <View style={styles.modalView}>
       <Text style={styles.textStyle}>This is a Modal with more complex styling</Text>
       <Button title='Close Modal' style={styles.button} onPress={()=>{setModal2(!modal2)}}></Button>
      </View>
     </View>
    </Modal>`;
  const example3jsx = `<Button title='Open Modal' onPress={()=>{setModal3(!modal3)}}></Button>
    <Text>onShow event Count = {onShowCount}</Text>
    <Text>onDismiss event Count = {onDismissCount}</Text>
      <Modal visible={modal3} onDismiss={()=>{setOnDismissCount(onDismissCount + 1)}} onShow={()=>{setOnShowCount(onShowCount+1)}}>
        <View style={{width: 500, height: 200}}>
          <Text>This is a simple Modal</Text>
          <Button title='Close Modal' onPress={()=>{setModal3(!modal3)}}></Button>
        </View>
    </Modal>`;

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
          title="Open Modal"
          onPress={() => {
            setModal1(!modal1);
          }}></Button>
        <Modal visible={modal1}>
          <View style={{width: 500, height: 200}}>
            <Text>This is a simple Modal</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setModal1(!modal1);
              }}></Button>
          </View>
        </Modal>
      </Example>
      <Example title="A Modal with events" code={example3jsx}>
        <Button
          title="Open Modal"
          onPress={() => {
            setModal3(!modal3);
          }}></Button>
        <Text>onShow event Count = {onShowCount}</Text>
        <Text>onDismiss event Count = {onDismissCount}</Text>
        <Modal
          visible={modal3}
          onDismiss={() => {
            setOnDismissCount(onDismissCount + 1);
          }}
          onShow={() => {
            setOnShowCount(onShowCount + 1);
          }}>
          <View style={{width: 500, height: 200}}>
            <Text>This is a simple Modal</Text>
            <Button
              title="Close Modal"
              onPress={() => {
                setModal3(!modal3);
              }}></Button>
          </View>
        </Modal>
      </Example>
      <Example
        title="A modal with more complex styling and takes up the whole application"
        code={example2jsx}>
        <Button
          title="Open Modal"
          onPress={() => {
            setModal2(!modal2);
          }}></Button>
        <Modal visible={modal2}>
          <View style={[styles.centeredView, styles.modalBackdrop]}>
            <View style={styles.modalView}>
              <Text style={styles.textStyle}>
                This is a Modal with more complex styling
              </Text>
              <Button
                title="Close Modal"
                style={styles.button}
                onPress={() => {
                  setModal2(!modal2);
                }}></Button>
            </View>
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
    paddingVertical: 30,
  },
  centeredView: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width, // can remove when bumped to 78
    height: Dimensions.get('window').height, // can remove when bumped to 78
  },
  modalBackdrop: {
    backgroundColor: 'rgba(207, 134, 134, 0.5)',
  },
  modalView: {
    margin: 20,
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
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
