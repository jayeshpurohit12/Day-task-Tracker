import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import TabNavigator from './TabNavigator';
import MyTasks from '../screens/my-tasks';
import AddTask from '../screens/add-task';
import Calendars from '../screens/task-calendar';
import Profile from '../screens/profile';

const RootStackNavigator = createStackNavigator();

const RootNavigatior = () => {
  return (
    <RootStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <RootStackNavigator.Screen name="TabNavigator" component={TabNavigator} />

      <RootStackNavigator.Screen name="Activity" component={MyTasks} />
      <RootStackNavigator.Screen name="AddTask" component={AddTask} />
      <RootStackNavigator.Screen name="Calendars" component={Calendars} />
      <RootStackNavigator.Screen name="Profile" component={Profile} />
    </RootStackNavigator.Navigator>
  );
};

export default RootNavigatior;
