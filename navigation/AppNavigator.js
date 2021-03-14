import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StartScreen from '../screens/start/StartScreen';
import EntriesScreen from '../screens/entries/EntriesScreen';

const HomeStack = createBottomTabNavigator();

export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Start' component={StartScreen} />
      <HomeStack.Screen name='Entries' component={EntriesScreen} />
    </HomeStack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
