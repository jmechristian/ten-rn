import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StartNavigator from '../navigation/StartNavigator';
import EntriesScreen from '../screens/entries/EntriesScreen';

const HomeStack = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: '#000000',
      }}
    >
      <HomeStack.Screen
        name='Start'
        component={StartNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons
              name='add-circle-outline'
              size={36}
              color={tabInfo.color}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name='Entries'
        component={EntriesScreen}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name='calendar-outline' size={36} color={tabInfo.color} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
