import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import HomePage from 'containers/HomePage/ducks/reducers';


export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  HomePage,
});
