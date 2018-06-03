import React, { Component } from 'react';
import { Button, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';


class EmployeeList extends Component {
    static navigationOptions = ({ navigation }) => {
        const params = navigation.state.params || {};
        return {
          headerTitle: 'Employee List',
          headerLeft: null,
          headerRight: (
            <Button onPress={params.gotoEmployeePage} title="Add" />
          ),
        };
      };
      componentWillMount() {
        this.props.navigation.setParams({ gotoEmployeePage: this.gotoEmployeePage });
        this.props.employeesFetch();
        this.createDataSource(this.props);
      }

      componentWillReceiveProps(nextProps) {
          this.createDataSource(nextProps);
      }

      createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
      }

      gotoEmployeePage = () => {
           this.props.navigation.navigate('NewEmployee');
    }
    renderRow(employees) {
        return (<ListItem 
                 employee={employees}
                 navigation={this.props.navigation}
        />);
    }
    render() {
        return (
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow.bind(this)}
            />       
        );
    }
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
