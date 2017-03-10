import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import Login from 'containers/Login/ducks/reducers';


export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  Login,
});
