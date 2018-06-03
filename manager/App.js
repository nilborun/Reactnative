import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/component/LoginForm';
import NavigatorScreen from './src/NavigatorScreen';


export default class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRbuFwZtuQgdYkcFLdWF_0CACtKaxUwhA',
      authDomain: 'manager-174c3.firebaseapp.com',
      databaseURL: 'https://manager-174c3.firebaseio.com',
      projectId: 'manager-174c3',
      storageBucket: 'manager-174c3.appspot.com',
      messagingSenderId: '549312906783'
    };
    firebase.initializeApp(config);
  }
  render() {
    const initialState = {};
    const store = createStore(reducers, initialState, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
            <NavigatorScreen />
      </Provider>
     
    );
  }
}
