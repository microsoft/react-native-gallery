import {Theme} from '@react-navigation/native';
import {AppTheme} from 'react-native-windows';


const [highContrastColorValues, setHighContrastColorValues] = React.useState(
  AppTheme.currentHighContrastColors,
);

const HighContrastTheme: Theme = {
  dark: false,
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
