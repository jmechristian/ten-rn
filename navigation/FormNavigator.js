import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ResentfulScreen from '../screens/form/ResentfulScreen';
import FearfulScreen from '../screens/form/FearfulScreen';
import SelfishScreen from '../screens/form/SelfishScreen';
import DishonestScreen from '../screens/form/DishonestScreen';
import ObsessingScreen from '../screens/form/ObsessingScreen';
import SecretsScreen from '../screens/form/SecretsScreen';
import HarmScreen from '../screens/form/HarmScreen';
import KindScreen from '../screens/form/KindScreen';
import ChecklistScreen from '../screens/form/ChecklistScreen';

const FormStack = createStackNavigator();

const FormNavigator = () => {
  return (
    <FormStack.Navigator screenOptions={{ headerShown: false }}>
      <FormStack.Screen name='Resentful' component={ResentfulScreen} />
      <FormStack.Screen name='Fearful' component={FearfulScreen} />
      <FormStack.Screen name='Selfish' component={SelfishScreen} />
      <FormStack.Screen name='Dishonest' component={DishonestScreen} />
      <FormStack.Screen name='Obsessing' component={ObsessingScreen} />
      <FormStack.Screen name='Secrets' component={SecretsScreen} />
      <FormStack.Screen name='Harm' component={HarmScreen} />
      <FormStack.Screen name='Kind' component={KindScreen} />
      <FormStack.Screen name='Checklist' component={ChecklistScreen} />
    </FormStack.Navigator>
  );
};

export default FormNavigator;
