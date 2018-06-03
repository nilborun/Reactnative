import firebase from 'firebase';

import { 
  EMAIL_CHANGED, 
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED, 
  LOGIN_USER } from './types'; 

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGED,
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, navigation }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user, navigation))
    .catch(
      () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user, navigation))
        .catch(() => loginUserFail(dispatch));
      }
    );
  }; 
}; 

const loginUserSuccess = (dispatch, user, navigation) => {
  navigation.navigate("Employees");
  dispatch({ 
    type: LOGIN_USER_SUCCESS, 
    payload: user });
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILED,
  });
};
