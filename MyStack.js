import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Login from './Login.js';
import SignUp from './SignUp';

const MyStack = createStackNavigator(
    {
      LoginPage: { screen: Login },
      SignupPage: { screen: SignUp },
    },
    {
      initialRouteName: 'LoginPage',
    }
   );
export default createAppContainer(MyStack);