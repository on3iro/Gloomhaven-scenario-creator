import * as types from './actionTypes';


export const submitLogin = data => {
  return {
    type: types.LOGIN_SUBMIT,
    payload: data,
  };
}

export const test = data => {
  return {
    type: 'TEST',
    payload: data
  };
}
