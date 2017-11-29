/*
* @Author: homeuser
* @Date:   2017-11-27 22:30:13
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 16:18:05
*/
import React from 'react';
import { StyleSheet, Text, View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Keyboard
 } from 'react-native';
import { StackNavigator } from 'react-navigation'

import { Button } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'


// input validator
var Validator = require('../models/validatorclass')
var valid = new Validator()

// color scheme
var colorscheme = require('../colorscheme')

// Apple blocks http:// (versus https://) unless building settings for ATP set
let baseUrl = 'https://whispering-beach-15540.herokuapp.com/users/login/mobile'
//let baseUrl = 'http://192.168.1.64:5000/users/login/mobile'


var User = require('../models/userclass')
//var user = new User()

// login page view
class LoginScreen extends React.Component {

  // login page constructor
  constructor(props) {
    super(props);

    // login page property variables
    this.state = {
      username: '',
      password: ''
    }
  }

  // here we check if user is already logged in
  componentDidMount() {
    this._loadInitialState().done()
  }
  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user', (err, result) => {
      //console.log(result)
    })
    if (value !== null) {
      // user is already logged in
      this.props.navigation.navigate('Home')
    }
  }

  render() {
    const {navigate} = this.props.navigation
    const submitBtn = <Button
                  raised
                  icon={{name: 'home', size: 32}}
                  buttonStyle={{
                    //backgroundColor: global.color001,
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderRadius: 5}}
                  textStyle={{textAlign: 'center'}}
                  title={`Login to\nSafe Leash`}
                  onPress={this.login}
                />
    const fbBtn = <SocialIcon
                    title='Facebook'
                    button
                    type='facebook'
                  />

    return(
      <KeyboardAvoidingView 
        behavior={'padding'}
        style={styles.wrapper}
        >

        <View style={styles.container} >



            <Text
              onPress={Keyboard.dismiss}
              style={styles.header}>[ LOGIN ]</Text>

            <TextInput 
              keyboardAppearance={'dark'}
              maxLength={ 32 }
              keyboardType={'emailAddress'}
              //autofocus={true}
              style={styles.textInput}
              placeholder='Username'
              onChangeText={ (username) => this.setState({ username }) }></TextInput>

            <TextInput 
              keyboardAppearance={'dark'}
              secureTextEntry={ true }
              maxLength={ 16 }
              style={styles.textInput}
              placeholder='Password'
              onChangeText={ (password) => this.setState({ password }) }></TextInput>


              <View>

                {fbBtn}

                {submitBtn}







              </View>

{/*            <TouchableOpacity style={styles.btn} onPress={this.login} >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>*/}

        </View>
      </KeyboardAvoidingView>
    )
  }

  // login button action
  login = () => {
    var username = ""
    var password = ""


    // check username
    if (valid.isValidUsername(this.state.username)) {
      username = this.state.username
    }

    // check password
    if (valid.isValidPassword(this.state.password)) {
      password = this.state.password
    }

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // SEND USER LOGIN CREDENTIALS
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    .then((response) => response.json())
    .then((res) => {

      if (res.success === true){
        // get user object from server db

        var user = new User(
          res.user.user_id,
          res.user.username,
          res.user.email,
          res.user.password,
          res.user.phone,
          res.user.image_url
        )

        //console.log(user.valueOf())

        AsyncStorage.setItem('user', JSON.stringify(user), () => {
          AsyncStorage.getItem('user', (err, result) => {
            //console.log(result)
          })
        })

        // open user Home page (later, splash page)
        this.props.navigation.navigate('Home')
      }
      else {
        // user doesn't exist in db
        //alert(res.message)
      }

    })// end 2nd .then() method invoked
    .done() 
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    //justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: global.color002
  },
  header: {
    fontSize: 36,
    marginBottom: 60,
    fontWeight: 'bold',
    color: '#FFF'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontWeight: 'bold'
  }
})

module.exports = LoginScreen