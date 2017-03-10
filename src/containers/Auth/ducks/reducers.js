import { combineReducers } from 'redux';


const user = (state = {
  isAuthenticated: false,
  isLoggedIn: false,
  data: {},
}, action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

const authReducer = combineReducers({
  user,
});

export default authReducer;
