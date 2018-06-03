import { createStackNavigator } from 'react-navigation';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreat from './component/EmployeeCreat';
import EmployeeEdit from './component/EmployeeEdit';


const NavigatorScreen = createStackNavigator({
        Login: { screen: LoginForm },
        Employees: { screen: EmployeeList },
        NewEmployee: { screen: EmployeeCreat },
        UpdateEmpoyee: { screen: EmployeeEdit }

    },
    {
        initialRouteName: 'Login'
    }
);


export default NavigatorScreen;
