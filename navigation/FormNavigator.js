import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ResentfulScreen from '../screens/form/ResentfulScreen';
import SelfishScreen from '../screens/form/SelfishScreen';
import DishonestScreen from '../screens/form/DishonestScreen';
import FearfulScreen from '../screens/form/FearfulScreen';
import ObsessingScreen from '../screens/form/ObsessingScreen';
import SecretsScreen from '../screens/form/SecretsScreen';
import HarmScreen from '../screens/form/HarmScreen';
import ActScreen from '../screens/form/ActScreen';
import ChecklistScreen from '../screens/form/ChecklistScreen';
import StartScreen from '../screens/start/StartScreen';

const FormStack = createStackNavigator();

const FormNavigator = () => {
  return (
    <FormStack.Navigator screenOptions={{ headerShown: false }}>
      <FormStack.Screen name='resentful' component={ResentfulScreen} />
      <FormStack.Screen name='selfish' component={SelfishScreen} />
      <FormStack.Screen name='dishonest' component={DishonestScreen} />
      <FormStack.Screen name='fearful' component={FearfulScreen} />
      <FormStack.Screen name='obsessing' component={ObsessingScreen} />
      <FormStack.Screen name='secrets' component={SecretsScreen} />
      <FormStack.Screen name='harm' component={HarmScreen} />
      <FormStack.Screen name='act' component={ActScreen} />
      <FormStack.Screen name='checklist' component={ChecklistScreen} />
      <FormStack.Screen name='start' component={StartScreen} />
    </FormStack.Navigator>
  );
};

export default FormNavigator;
