/*
* @Author: homeuser
* @Date:   2017-11-28 13:03:44
* @Last Modified 2017-11-28
* @Last Modified time: 2017-11-28 13:43:15
*/

import React from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements'
import { Button } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  // more items
]

class FriendsScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation

    return (
      
      <View style={ styles.container } >
      <Text style={styles.subtext}>{"\n"}</Text>

      <Text style={styles.header}>My Friends Page</Text>


		<List containerStyle={{margin: 20}}>
		{
			list.map((l, i) => (
				<ListItem
					roundAvatar
					avatar={{uri:l.avatar_url}}
					key={i}
					title={l.name}
			  	/>
			))
		}

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
    );
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

module.exports = FriendsScreen