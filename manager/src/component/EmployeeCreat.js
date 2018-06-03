import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from '../common';
import EmployeeForm from './EmployeeForm';


class EmployeeCreat extends Component {
    static navigationOptions = {
        title: 'Employee'
      };
      
    onButtonPress() {
        const { name, phone, shift, navigation } = this.props;

        this.props.employeeCreate({ name, phone, shift: shift || 'Monday', navigation });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button 
                        onPress={this.onButtonPress.bind(this)}
                        buttonText='Create' 
                    />
                </CardSection>
            </Card>
            
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};


export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreat);
