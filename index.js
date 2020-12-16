/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {setGlobal} from 'reactn';

setGlobal({
  theme: 'system',
});

AppRegistry.registerComponent(appName, () => App);
