import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from '../common';

class LoginForm extends Component {
    static navigationOptions = {
        title: 'Please Login'
      };
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }
    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
         const { email, password, navigation } = this.props;
         this.props.loginUser({ email, password, navigation });  
    }
    renderButton() {
            if (this.props.loading) {
                return <Spinner size='large' />;
            }
            return (
                <Button 
                   onPress={this.onButtonPress.bind(this)}
                   buttonText='Log in'
                />
            );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ color: 'red', fontSize: 20, alignSelf: 'center' }}> 
                    {this.props.error} 
                    </Text>
                </View>
            );
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    onChangeText={this.onEmailChanged.bind(this)}
                    label='Email'
                    value={this.props.email}
                    hint='enter your email'
                    secureTextEntry={false}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                    label='Password'
                    hint='enter your password'
                    secureTextEntry
                    onChangeText={this.onPasswordChanged.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}
const mapStateToProps = state => {
    return {
        email: state.authentication.email,
        password: state.authentication.password,
        error: state.authentication.error,
        loading: state.authentication.loading
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
