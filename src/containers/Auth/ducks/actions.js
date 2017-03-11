import * as types from './actionTypes';


export const loginSubmit = data => {
  return {
    type: types.LOGIN_SUBMIT,
    payload: data,
  };
}
