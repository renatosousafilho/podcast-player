import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './pages/Main';
import BookContainer from './pages/Book';

const Stack = createStackNavigator();

export default function CustomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainContainer} />
      <Stack.Screen name="Book" component={BookContainer} />
    </Stack.Navigator>
  )
}