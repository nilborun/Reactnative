import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from '../common';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
    state ={ showModal: false}
    static navigationOptions = {
        title: 'Edit Empoyee'
      };
    componentWillMount() {
        const { navigation } = this.props;
        console.log(navigation.getParam('employee', null));
        _.each(navigation.getParam('employee', null), (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { navigation } = this.props; 
        const employee = navigation.getParam('employee', null);
        
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: employee.uid, navigation });
    }

    onSendText() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is ${shift}`);
    }
    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        const { navigation } = this.props; 
        const employee = navigation.getParam('employee', null);
        this.props.employeeDelete({ uid: employee.uid, navigation });
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button 
                        onPress={this.onButtonPress.bind(this)}
                         buttonText='Save Changes' 
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={this.onSendText.bind(this)}
                         buttonText='Text Schedule' 
                    />
                </CardSection>
                <CardSection>
                    <Button 
                        onPress={() => this.setState({ showModal: !this.state.showModal })}
                         buttonText='Fire Employee' 
                    />
                </CardSection>
                <Confirm
                 visible={this.state.showModal}
                 onAccept={this.onAccept.bind(this)}
                 onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire the employee?
                </Confirm>
            </Card>
        );
    }
}

const maptStateProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(maptStateProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);