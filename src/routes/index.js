import React from 'react';

import { createStackNavigator } from '@react-navigation/native'
import { Login } from "../screen/Login";

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown:false}}
      >
      </Stack.Screen>
    </Stack.Navigator>
  )
}
