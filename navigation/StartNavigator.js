import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FormContainer from '../screens/form/FormContainer';
import StartScreen from '../screens/start/StartScreen';

const StartStack = createStackNavigator();

const StartNavigator = () => {
  return (
    <StartStack.Navigator screenOptions={{ headerShown: false }}>
      <StartStack.Screen name='Start' component={StartScreen} />
      <StartStack.Screen name='Form' component={FormContainer} />
    </StartStack.Navigator>
  );
};

export default StartNavigator;
