// Use of Redux in React Native App | React Native Redux
// https://aboutreact.com/react-native-redux/
import 'react-native-gesture-handler';

import * as React from 'react';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import rootReducer from './src/utils/reducers';
import HeaderSortLabel from './src/components/HeaderSortLabel';
import HeaderCountLabel from './src/components/HeaderCountLabel';

const store = createStore(rootReducer, applyMiddleware(thunk));

import BookmarkScreen from './src/BookmarkScreen';
import PostList from './src/PostList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BookmarkScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="BookmarkScreen"
          component={BookmarkScreen}
          options={{
            title: 'Bookmarks',
            headerRight: () => <HeaderSortLabel />,
          }}
        />
        <Stack.Screen
          name="PostList"
          component={PostList}
          options={{
            title: 'Posts',
            headerRight: () => <HeaderCountLabel />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
