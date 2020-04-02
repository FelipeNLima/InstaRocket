import 'react-native-gesture-handler';
import React from 'react';

import { StatusBar, YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>
  );
}
