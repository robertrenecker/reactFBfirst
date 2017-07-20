import React from 'react';
import {AppRegistry, Stylesheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {StackNavigator} from 'react-navigation';
const styles = require('./styles.js');
import HomeScreen from './screens/HomeScreen';



/**
*A beginners guide to building a React-Native & Firebase
*As of last update:
*    Firebase Authentication
*    User login, account creation, signout
*    User Mobile number
*
*
*
*
**/


/**
*We are incorporating new ES7 Async functions / Promise Functions
*Read this article for reference on why they are useful in Javascript:
  *https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html
**/

const firebaseConfig = {
    apiKey: "AIzaSyAuB3_v1pUdRpahozmh0mvtr1THXaujvQc",
    authDomain: "firstapp-d78e7.firebaseapp.com",
    databaseURL: "https://firstapp-d78e7.firebaseio.com",
    projectId: "firstapp-d78e7",
    storageBucket: "firstapp-d78e7.appspot.com",
    messagingSenderId: "597561685388"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


var {
  TextInput,
  ListView
} = React;





class Database {
  /**
  * sets a user mobile number
  * @param userId
  * @param mobile
  * @returns {firebase.Promise<any> | !firebase.Promise.<void>}
  */

  static setUserMobile(userId, mobile) {

    let userMobilePath = "/user/" + userId + "/details";

    return firebase.database().ref(userMobilePath).set({
      mobile: mobile
    })
  }
}

const ourApp = StackNavigator({
  Home: { screen: HomeScreen },
});
AppRegistry.registerComponent('ourApp', () => ourApp);

export default ourApp;






/**              **/
/**User Functions**/

signup = async (email, pass) => {

  try {
    await firebase.auth()
      .createUserWithEmailAndPassword(email, pass);
    console.log("Account created");
  } catch(error){
    console.log(error.toString())
  }
}

login = async(email, pass) => {

  try {
    await firebase.auth()
      .signInWithEmailAndPassword(email,pass);
    console.log("Logged In!");

    //Navigate to homepage...
  } catch (error) {
    console.log(error.toString())
  }

}

logout = async() => {
  try{
    await firebase.auth().signOut();

    //Nav to login View

  } catch (error) {
    console.log(error);
  }
}
