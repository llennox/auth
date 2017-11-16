/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Header } from './src/components/common';
import  LoginForm  from './src/components/LoginForm';



class App extends Component {
  ComponentWillMount() {
    //get the user's token and data
    //find out if users profile.created == True or False change account settings view based on
  }
  render() {
    return (
      <View>
       <Header headerText="Welcome to anonshot" />
       <LoginForm />
      </View>
    );
  }

}


export default App;