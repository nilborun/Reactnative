import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREAT, EMPLOYEE_FETCH, EMPLOYEE_SAVE_SUCCESS } from './types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({ type: EMPLOYEE_CREAT });
            navigation.navigate('Employees');
        });
    };
};

export const employeesFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH, payload: snapshot.val() });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid, navigation }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
                .set({ name, phone, shift })
                .then(() => {
                    dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
                    navigation.navigate('Employees');
                });
    };
};

export const employeeDelete = ({ uid, navigation }) => {
    console.log(uid);
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
                .remove()
                .then(() => {
                    navigation.navigate('Employees');
                });
    };
}
