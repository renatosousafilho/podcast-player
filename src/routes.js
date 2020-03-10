import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/Main';
import Book from './pages/Book';

const Stack = createStackNavigator();

export default function CustomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
      <Stack.Screen name="Book" component={Book} />
    </Stack.Navigator>
  )
}