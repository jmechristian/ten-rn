import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StartNavigator from '../navigation/StartNavigator';
import EntryNavigator from '../navigation/EntryNavigator';

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
              size={32}
              color={tabInfo.color}
            />
          ),
        }}
      />
      <HomeStack.Screen
        name='Entries'
        component={EntryNavigator}
        options={{
          tabBarIcon: (tabInfo) => (
            <Ionicons name='calendar-outline' size={32} color={tabInfo.color} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
