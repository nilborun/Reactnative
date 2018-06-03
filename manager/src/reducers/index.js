import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeerReducer from './EmployeerReducer';

export default combineReducers({
    authentication: AuthReducer,
    employeeForm: EmployeeFormReducer,
    employees: EmployeerReducer
});
