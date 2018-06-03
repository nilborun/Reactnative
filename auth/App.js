import React from 'react';
import { View,Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Card, Spinner } from './src/common';
import LoginForm from './src/component/LoginForm';




export default class App extends React.Component {
  state={loggedIn: null}
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBvk7CfBW4kYOWTP0fm5D-LyLkVAiS8lZA',
      authDomain: 'authentication-644e1.firebaseapp.com',
      databaseURL: 'https://authentication-644e1.firebaseio.com',
      projectId: 'authentication-644e1',
      storageBucket: 'authentication-644e1.appspot.com',
      messagingSenderId: '132296263985'
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }


    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
      return(
        <Card>
          <CardSection>   
         <Button 
          onPress={()=>firebase.auth().signOut()}
          buttonText='Log out'
          /> 
        </CardSection>  
        </Card>
         
      );
      case false:
      return <LoginForm/>

      default:
      return <Spinner size='large'/>
    }
  }
 
  render() {
    return (    
        <View>
          <Header headerText='Authentication'/>
          {this.renderContent()}
        </View>
    );
  }
}

