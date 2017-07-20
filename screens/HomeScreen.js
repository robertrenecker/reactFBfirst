import React, {Component} from 'react';
import { Text, View } from 'react-native';
const styles = require('../styles.js');

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render(){

    return(
    <View style ={styles.container}>

        <Text style={styles.navbarTitle}> Navigation </Text>

        <View style = {styles.liContainer}>
          <Text style={styles.li}> Link 1 </Text>


          <Text style={styles.li}> Link 2 </Text>


          <Text style={styles.li}> Link 3 </Text>
        </View>


    
    </View>

    )
  }
}

module.exports = HomeScreen;
