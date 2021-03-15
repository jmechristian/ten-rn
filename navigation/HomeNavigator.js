import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import StartNavigator from '../navigation/StartNavigator';
import EntriesScreen from '../screens/entries/EntriesScreen';

const HomeStack = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Start' component={StartNavigator} />
      <HomeStack.Screen name='Entries' component={EntriesScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
