import { combineReducers } from 'redux';


const user = (state = {
  isAuthenticated: false,
  isLoggedIn: false,
  data: {},
}, action) => {
  switch(action.type) {
    case 'TEST': {
      console.log(action.payload);

      return state;
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
