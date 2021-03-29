import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EntriesScreen from '../screens/entries/EntriesScreen';
import EntryScreen from '../screens/entries/EntryScreen';

const EntryStack = createStackNavigator();

const EntryNavigator = () => {
  return (
    <EntryStack.Navigator>
      <EntryStack.Screen
        name='entries'
        component={EntriesScreen}
        options={{ headerShown: false }}
      />
      <EntryStack.Screen
        name='entry'
        component={EntryScreen}
        options={({ route }) => ({
          title: route.params.date,
        })}
      />
    </EntryStack.Navigator>
  );
};

export default EntryNavigator;
