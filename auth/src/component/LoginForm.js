import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import { Card, CardSection,Button,Input,Spinner } from '../common';

class LoginForm extends Component{
    state={ email:'',password:'',error:'',loading:false};
    

    onButtonPress(){
        const {email, password}=this.state;
        this.setState({error:'', loading:true});
        
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailed.bind(this))
        });

    }
    onLoginFailed(){
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password: '',
            loading:false,
            error:''
        })
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size='small'/>
        }

        return(
                <Button
                     onPress={this.onButtonPress.bind(this)}
                     buttonText='Log in'/>
            );
        
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    hint={'user@email.com'}
                    value={ this.state.email }
                    onChangeText={ text=> this.setState({ email: text })}
                    label={'Email:' }
                    />
                </CardSection>
                
                <CardSection>
                  <Input
                    secureTextEntry={true}
                    hint={'passwordyours'}
                    value={ this.state.password }
                    onChangeText={ password=> this.setState({ password })}
                    label={'Password:' }
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};

export default LoginForm;