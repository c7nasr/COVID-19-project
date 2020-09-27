import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../screens/main';
import AboutPage from '../screens/about';
import HistoricalData from '../screens/history';
const Stack = createStackNavigator();
 function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="TodaysReport" component={MainPage} />
      </Stack.Navigator>
    );
  }
   function History() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="History" component={HistoricalData} />
      </Stack.Navigator>
    );
  }
