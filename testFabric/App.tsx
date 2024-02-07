'use strict';
import {TextInput} from 'react-native';
import React from 'react';
import {Example} from './components/Example';
import {Page} from './components/Page';
import {TextInputExamplePage} from './examples/TextInputExamplePage';
import {ViewExamplePage} from './examples/ViewExamplePage';
import {ImageExamplePage} from './examples/ImageExamplePage';
import {ScrollViewExamplePage} from './examples/ScrollViewExample';
import {SwitchExamplePage} from './examples/SwitchExamplePage';
import {TextExamplePage} from './examples/TextExamplePage';
import {ActivityIndicatorExample} from './examples/ActivityIndicatorExamplePage';
import { HomePage } from './HomePage';
import {NavigationContainer, createNativeStackNavigator, StackNavigator, StackScreen} from './components/Navigation';
import { BreadcrumbBar } from './components/BreadcrumbBar';


// import {useTheme} from '@react-navigation/native';

export const App: React.FunctionComponent<{}> = () => {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName='Home'>
        <StackScreen
          name='Home'
          component={HomePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='View'
          component={ViewExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='Image'
          component={ImageExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='TextInput'
          component={TextInputExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='ScrollView'
          component={ScrollViewExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='Switch'
          component={SwitchExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='Switch'
          component={SwitchExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='Text'
          component={TextExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='ActivityIndicator'
          component={ActivityIndicatorExample}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
      </StackNavigator>
    </NavigationContainer>
  )
};
