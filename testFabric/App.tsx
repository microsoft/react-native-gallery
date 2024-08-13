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
import { ButtonExamplePage } from './examples/ButtonExamplePage';
import { TouchableHighlightExamplePage } from './examples/TouchableHighlightExamplePage';
import { TouchableOpacityExamplePage } from './examples/TouchableOpacityExamplePage';
import { TouchableWithoutFeedbackExamplePage } from './examples/TouchableWithoutFeedbackExamplePage';
import { PressableExamplePage } from './examples/PressableExamplePage';
import { FlatListExamplePage } from './examples/FlatListExamplePage';
import { VirtualizedListExamplePage } from './examples/VirtualizedListExamplePage';


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
          name='Button'
          component={ButtonExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='FlatList'
          component={FlatListExamplePage}
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
          name='Pressable'
          component={PressableExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='TextInput'
          component={TextInputExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='TouchableHighlight'
          component={TouchableHighlightExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='TouchableOpacity'
          component={TouchableOpacityExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='TouchableWithoutFeedback'
          component={TouchableWithoutFeedbackExamplePage}
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
          name='Text'
          component={TextExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='ActivityIndicator'
          component={ActivityIndicatorExample}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
        <StackScreen
          name='VirtualizedList'
          component={VirtualizedListExamplePage}
          options={({navigation}) => ({header: () => <BreadcrumbBar navigation={navigation}/>})}
        />
      </StackNavigator>
    </NavigationContainer>
  )
};
