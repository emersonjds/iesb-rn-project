import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screen/Login';
import { Register } from '../screen/Register';
import Home from '../screen/Home';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Routes;
