import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  MaterialHeaderButtons,
  Item,
  HiddenItem,
} from './components/shared/HeaderButtons';

import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Messages',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'ProductSans-Regular',
              color: '#444',
            },
            headerRight: () => (
              <MaterialHeaderButtons>
                <Item title="add" iconName="search" />
                <HiddenItem title="Mark all as read" />
                <HiddenItem title="Messages for web" />
                <HiddenItem title="Blocked Contatacts" />
                <HiddenItem title="Enable dark mode" />
                <HiddenItem title="Archived" />
                <HiddenItem title="Settings" />
                <HiddenItem title="Help & feedback" />
              </MaterialHeaderButtons>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
