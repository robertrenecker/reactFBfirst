import React from 'react';
import * as firebase from "firebase";
import { StyleSheet, Text, View } from 'react-native';


const firebaseConfig = {
    apiKey: "AIzaSyAuB3_v1pUdRpahozmh0mvtr1THXaujvQc",
    authDomain: "firstapp-d78e7.firebaseapp.com",
    databaseURL: "https://firstapp-d78e7.firebaseio.com",
    projectId: "firstapp-d78e7",
    storageBucket: "firstapp-d78e7.appspot.com",
    messagingSenderId: "597561685388"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
