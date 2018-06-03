import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, Input } from '../common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Input 
                    onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    label='Name'
                     hint='Borun'
                     value={this.props.name}
                    />
                </CardSection>
                
                <CardSection>
                    <Input 
                    onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    label='Phone'
                     hint='01947965401'
                     value={this.props.phone}
                    />
                </CardSection>
                
                <CardSection>
                    <Text style={styles.pickerTextStyle}> Select Day</Text>
                    <Picker
                    mode='dropdown'
                    style={{ flex: 1 }}
                    selectedValue={this.props.shift}
                    onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}
                    >
                     <Picker.Item label="Monday" value="Monday" />
                     <Picker.Item label="Tuesday" value="Tuesday" />
                     <Picker.Item label="Wednesday" value="Wednesday" />
                     <Picker.Item label="Thursday" value="Thursday" />
                     <Picker.Item label="Friday" value="Friday" />
                     <Picker.Item label="Satureday" value="Satureday" />
                     <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}
const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
