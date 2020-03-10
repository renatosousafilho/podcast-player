/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import './config/ReactotronConfig';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>    
  );
}
