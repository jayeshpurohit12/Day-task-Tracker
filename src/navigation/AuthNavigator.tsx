import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBording from '../screens/onbording';
import Signup from '../screens/signup';
import Login from '../screens/login';

const AuthStack = createStackNavigator();

const AuthNavigator = ({error, isLoading}) => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="OnBording" component={OnBording} />
      <AuthStack.Screen
        name="Login"
        children={() => <Login error={error} isLoading={isLoading} />}
      />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
