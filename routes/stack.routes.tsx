import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from '../screens/Home';
import  Agendamento  from '../screens/Agendamento';
import  Dados  from '../screens/Dados';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator initialRouteName="SignIn">
      <Screen 
        name='Home' 
        component={Home}
        options={{
          headerShown: true,
        }}
      />
      <Screen 
        name='Agendamento' 
        component={Agendamento}
        options={{
          headerShown: true,
        }}
      />
      <Screen
        name='Dados'
        component={Dados}
        options={{
          headerShown:true,
        }}
      />
    </Navigator>
  )
}