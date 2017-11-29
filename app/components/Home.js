/*
* @Author: homeuser
* @Date:   2017-11-28 18:11:01
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 18:31:29
*/

// local image assets
var ref = require('../assets/girl_leash.png')

import React from 'react';
import { 
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Swiper from 'react-native-swiper'

// home page view
class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation
    const resizeMode = 'stretch';
    const text = <Text
          onPress= {()=> navigate('Profile')}>Safe Leash
        </Text>

    const swipeDash = <Swiper style={styles.wrapper}
    activeDotColor={global.color005}
    dotColor={'#FFF'}
    showsButtons={false}
    loop={false}>

{/*	<View style={styles.splashSlide1}>
            <Text style={styles.splashText} onPress= {()=> alert("Page Doesn't Exist Yet!")} >My Pets</Text>
          </View>*/}

          <View style={styles.splashSlide2}>
            <Text style={styles.splashText} onPress= {()=> navigate('Friends')} >My Friends</Text>
          </View>
          <View style={styles.splashSlide3}>
              <Text style={styles.splashText} onPress= {()=> navigate('Profile')} >
            My Profile</Text>
    </View>

      </Swiper>

    return (
      
      <View

        style={ styles.container }>

        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
          }} >
          <Image style={styles.backgroundImage} source={ref}>  
                    {this.props.children}
          </Image>


        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
          }} >


        </View>

        {swipeDash}


      </View>
    );
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
    flex: 1,
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

module.exports = HomeScreen