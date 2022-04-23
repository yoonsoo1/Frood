import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login.js';
import SignUp from './SignUp';

const MyStack = createStackNavigator(
    {
      HomePage: { screen: Login },
      ProfilePage: { screen: SignUp },
    },
    {
      initialRouteName: 'Login',
    }
   );
export default createAppContainer(MyStack);