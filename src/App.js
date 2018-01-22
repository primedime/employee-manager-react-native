import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC9EYPuBOJ1ng8Z9Pk7_l8hL_em8Z1U23c",
      authDomain: "manager-b5d44.firebaseapp.com",
      databaseURL: "https://manager-b5d44.firebaseio.com",
      projectId: "manager-b5d44",
      storageBucket: "manager-b5d44.appspot.com",
      messagingSenderId: "275753443447"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
          Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

