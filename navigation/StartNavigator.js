import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FormNavigator from './FormNavigator';
import StartScreen from '../screens/start/StartScreen';

const StartStack = createStackNavigator();

const StartNavigator = () => {
  return (
    <StartStack.Navigator screenOptions={{ headerShown: false }}>
      <StartStack.Screen name='Start' component={StartScreen} />
      <StartStack.Screen name='Form' component={FormNavigator} />
    </StartStack.Navigator>
  );
};

export default StartNavigator;
