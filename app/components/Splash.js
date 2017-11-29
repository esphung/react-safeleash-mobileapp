/*
* @Author: homeuser
* @Date:   2017-11-28 18:16:07
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 18:18:21
*/

// local image assets
//var ref = require('../assets/girl_leash.png')

import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'

// splash page (with swipes)
class SplashScreen extends React.Component {
  static navigationOptions = {
    title: 'Splash'
  }
  render() {
    const {navigate} = this.props.navigation
    //const {navigate} = this.props.navigation.navigate('Home', { user:  'Lucy' });
    return(
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
          <View style={styles.splashSlide1}>
            <Text style={styles.splashText}>Welcome to SafeLeash</Text>
          </View>
          <View style={styles.splashSlide2}>
            <Text style={styles.splashText}>Beautiful</Text>
          </View>
          <View style={styles.splashSlide3}>
            <Text style={styles.splashText}>And simple</Text>
          </View>
          <View style={styles.splashSlide3}>
            <Text style={styles.splashText}
              onPress= {()=> navigate('Home')} >
              Click here to finish
              </Text>
              <Text style={styles.splashSkipText} onPress= {()=> navigate('Home')} >
            Skip</Text>
          </View>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  subtext: {
    textAlign: 'center',
    fontSize: 24,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.1, height: 0.1},
    textShadowRadius: 2,
    backgroundColor: 'rgba(0,0,0,0)',

  },

  subheading: {
    textAlign: 'right',
    flexDirection: 'row',
    fontSize: 24,
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.1, height: 0.1},
    textShadowRadius: 2,
    backgroundColor: 'rgba(0,0,0,0)',
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
  container: {
    //justifyContent: 'space-between',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },

  wrapper: {
  },
  splashSlide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.color001,
  },
  splashSlide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.color002,
  },
  splashSlide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: global.color003,
  },
  splashText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 0.1, height: 0.1},
    textShadowRadius: 2,
  }
});

module.exports = SplashScreen