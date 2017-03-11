import { combineReducers } from 'redux';

import * as types from './actionTypes';


const user = (state = {
  isLoggedIn: false,
  token: '',
  data: {},
}, action) => {
  switch(action.type) {
    case types.LOGIN_SUCCESS: {
      const { data } = action.payload;

      return Object.assign({}, ...state, {
        isLoggedIn: true,
        token: data.token,
        data: data.user,
      });
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
