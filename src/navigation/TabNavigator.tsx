import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import colors from '../constants/colors';
import MyTasks from '../screens/my-tasks';
import AddTask from '../screens/add-task';
import Calendars from '../screens/task-calendar';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: colors.brandPrimary,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={MyTasks}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="fact-check" size={size} color={color} />
          ),
          tabBarActiveTintColor: colors.brandPrimary,
        }}
      />
      <Tab.Screen
        name="Create"
        component={AddTask}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="assignment-add" size={size} color={color} />
          ),
          tabBarActiveTintColor: colors.brandPrimary,
        }}
      />
      <Tab.Screen
        name="Calendars"
        component={Calendars}
        options={{
          tabBarIcon: ({size, color}) => (
            <Foundation name="calendar" size={size} color={color} />
          ),
          tabBarActiveTintColor: colors.brandPrimary,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons
              name="account-circle"
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: colors.brandPrimary,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
