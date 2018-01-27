import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


export default class App extends Component {

  componentWillMount() {
  const config = {
    apiKey: 'AIzaSyC9EYPuBOJ1ng8Z9Pk7_l8hL_em8Z1U23c',
    authDomain: 'manager-b5d44.firebaseapp.com',
    databaseURL: 'https://manager-b5d44.firebaseio.com',
    projectId: 'manager-b5d44',
    storageBucket: 'manager-b5d44.appspot.com',
    messagingSenderId: '275753443447'
  };
  firebase.initializeApp(config);
  }

  render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
    <LoginForm />
    </Provider>
  );
  }
}

