import { combineReducers } from 'redux';

import * as types from './actionTypes';


const user = (state = {
  isLoggedIn: false,
  token: '',
  data: {},
  error: {},
}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        token: data.token,
        data: data.user,
        error: '',
      };
    }

    case types.LOGIN_ERROR: {
      const error = action.payload;

      return {
        ...state,
        error: error,
      };
    }

    default: {
      return state;
    }
  }
}

const authReducer = combineReducers({
  user,
});

export default authReducer;
