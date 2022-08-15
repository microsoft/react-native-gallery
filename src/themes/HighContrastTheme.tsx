import {Theme} from '@react-navigation/native';
import {AppTheme} from 'react-native-windows';

const HighContrastTheme: Theme = {
  dark: false,
  colors: {
    primary: AppTheme.currentHighContrastColors.HighlightColor,
    background: AppTheme.currentHighContrastColors.WindowColor,
    card: AppTheme.currentHighContrastColors.WindowColor,
    text: AppTheme.currentHighContrastColors.WindowTextColor,
    border: AppTheme.currentHighContrastColors.ButtonTextColor,
    notification: AppTheme.currentHighContrastColors.HotlightColor,
  },
};

export default HighContrastTheme;
