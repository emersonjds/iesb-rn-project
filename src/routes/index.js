import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screen/Login';
import { Register } from '../screen/Register';
import ToDoTasks from '../screen/TodoTasks';
import DoneTasks from '../screen/DoneTasks';
import Task from '../screen/Task';
import App from '../screen/App';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

export const TaskTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        iconStyle: { width: 20, height: 20 },
      }}>
      <Tab.Screen name="To Do" component={ToDoTasks} />
      <Tab.Screen name="Done" component={DoneTasks} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="App"
        component={App}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="TaskList" component={TaskTab} />
      <Stack.Screen name="Task" component={Task} />
    </Stack.Navigator>
  );
};

export default Routes;
