/*
* @Author: homeuser
* @Date:   2017-11-27 22:30:13
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 14:13:02
*/

import { Button } from 'react-native-elements';
import { List, ListItem } from 'react-native-elements'


// color scheme
//var colorscheme = require('../colorscheme')

//const Image = require('Image');

// local image
var ref = require('../assets/girl_leash.png')

//var BackgroundImage = require('../models/backgroundimageclass')

import React from 'react';
import { StyleSheet, Text, View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
 } from 'react-native';
import { StackNavigator } from 'react-navigation'

var User = require('../models/userclass')
var user = new User()

function clearCurrentUser() {
  AsyncStorage.removeItem('user')
}

function getCurrentUser() {
  if (user.username != null) {
    return user
  }

  // else make a new copy
  AsyncStorage.getItem('user', (err, result) => {
    result = JSON.parse(result)

    user = new User(
      result.user_id,
      result.username,
      result.email,
      result.password,
      result.phone,
      result.image_url
    )
    console.log(user)

  })
  return user;
}



// profile page view
class ProfileScreen extends React.Component {

  static navigationOptions = {
    title: 'Profile',
    user: getCurrentUser()
  }

  render() {
    const {navigate} = this.props.navigation

    return(

        <View style={styles.container} >
        <Text style={styles.subtext}>{"\n"}</Text>
        <Text style={styles.header}>My Profile</Text>

            <List containerStyle={{margin: 20}}>
                <ListItem
                  avatar={{uri:getCurrentUser().image_url}}
                  />

                <ListItem

                  title={getCurrentUser().username}
                  />

                <ListItem
                  title={getCurrentUser().email}
                  />

                <ListItem
                  title={getCurrentUser().password}
                  />

                <ListItem
                  title={getCurrentUser().phone}
                  />

            </List>


            <Button
              raised
              icon={{name: 'home', size: 32}}
              buttonStyle={{
                //backgroundColor: global.color001,
                backgroundColor: 'rgba(0,0,0,0)',
                borderRadius: 5}}
              textStyle={{textAlign: 'center'}}
              title={`Back to\nHome Page`}
              onPress= {()=> navigate('Home')}
            />


        </View>
    )
  }
  logout = () => {
    //navigate('Login')
    alert('Coming Soon')
  }

}
const styles = StyleSheet.create({
  container: {
      //justifyContent: 'space-between',
      flex: 1,
  },
    header: {
    //marginBottom: 60,
    textAlign: 'center',
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.1, height: 0.1},
    textShadowRadius: 2,
    backgroundColor: 'rgba(0,0,0,0)',

  },
})


module.exports = ProfileScreen