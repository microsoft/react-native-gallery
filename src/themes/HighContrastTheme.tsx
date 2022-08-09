import {Theme} from '@react-navigation/native';
import {AppTheme} from 'react-native-windows';

const HighContrastTheme: Theme = {
  dark: false, //is this going to be a problem?
  colors: {
    primary: '#FFFFFF',
    background: '#FFFFFF',
    card: '#FFFFFF',
    text: '#FFFFFF',
    border: '#FFFFFF',
    notification: '#FFFFFF',
  },
};

export default HighContrastTheme;
