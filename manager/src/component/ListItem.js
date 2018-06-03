import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from '../common';

class ListItem extends Component {

    onRowPress() {
        this.state.navigation.navigate('NewEmployee');
    }
    render() {
        const { employee, navigation } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('UpdateEmpoyee', { employee: employee })}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {employee.name}
                         </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
       
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 20,
        paddingLeft: 15
    }
};
export default ListItem;
