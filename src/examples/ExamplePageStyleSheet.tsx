import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      position: 'absolute',
      padding: 20,
      paddingTop: 55,
    },
    title: {
      fontSize: 24,
      fontWeight: '200',
      marginBottom: 15,
    },
    description: {
      fontSize: 14,
    },
    exampleView: {
      marginTop: 30,
    },
    exampleHeader: {
      fontSize: 20,
      fontWeight: '400',
      marginBottom: 15,
    },
    exampleComponentView: {
      borderStyle: 'solid', 
      borderColor: '#E0E0E0',
      borderWidth: 1,
      padding: 18,
    },
    exampleTextView: {
      backgroundColor: '#E0E0E0',
      padding: 18,
    },
    exampleText: {
      fontFamily: 'Consolas',
    },
  });