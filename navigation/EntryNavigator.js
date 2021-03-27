import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EntriesScreen from '../screens/entries/EntriesScreen';
import EntryScreen from '../screens/entries/EntryScreen';

const EntryStack = createStackNavigator();

const EntryNavigator = () => {
  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      <EntryStack.Screen name='entries' component={EntriesScreen} />
      <EntryStack.Screen name='entry' component={EntryScreen} />
    </EntryStack.Navigator>
  );
};

export default EntryNavigator;
