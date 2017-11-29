

// local color scheme file
var colorscheme = require('./app/colorscheme')

import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation'
//import Swiper from 'react-native-swiper'

//const ensureComponentIsNative = require('ensureComponentIsNative');

// page views
import Login from './app/components/Login'
var LoginScreen = require('./app/components/Login')

import Home from './app/components/Home'
var HomeScreen = require('./app/components/Home')

import Profile from './app/components/Profile'
var ProfileScreen = require('./app/components/Profile')

import Friends from './app/components/Friends'
var FriendsScreen = require('./app/components/Friends')

import Splash from './app/components/Splash'
var SplashScreen = require('./app/components/Splash')


// app screen navigator
const NavigationApp = StackNavigator({ 
    //Splash: { screen: SplashScreen },
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Profile: {screen: ProfileScreen},
    Friends: {screen: FriendsScreen}
  },
  {
    navigationOptions: ({navigation}) => ({
      title: null,
      headerTintColor: '#FFF',
      header: false
    })
  })

export default class App extends React.Component {
  render() {
    return <NavigationApp />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
