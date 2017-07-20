import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){
    return <Text> Welcome! -  Home - </Text>;
  }
}

module.exports = HomeScreen;
