import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers';
import { Header } from './src/common';
import LibraryList from './src/component/LibraryList';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
             <Header headerText="Tech Stack" />
             <LibraryList />
             
        </View>
        
      </Provider>
      
    );
  }
}

