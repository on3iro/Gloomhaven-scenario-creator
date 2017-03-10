import { combineReducers } from 'redux';


const testReducer = (state = [], action) => {
  switch(action.type) {
    default: {
      return state;
    }
  }
}

const HomePageReducers = combineReducers({
  testReducer,
});

export default HomePageReducers;
