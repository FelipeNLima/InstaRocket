import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/instagram.png';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerRightContainerStyle: { marginRight: 20 },
      }}
      initialRouteName="New"
      mode="modal"
    >
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={({ navigation }) => ({
          headerTitle: <Image source={logo} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Novo');
              }}
            >
              <Icon name="camera" size={30} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#f5f5f5',
            height: 70,
          },
        })}
      />
      <Stack.Screen
        name="Novo"
        component={New}
        options={{
          headerTitle: 'Nova publicação',
          headerStyle: {
            backgroundColor: '#f5f5f5',
            height: 70,
          },
          headerBackTitle: null,
        }}
      />
    </Stack.Navigator>
  );
}
