import { combineReducers } from 'redux';

export const testSaga = () => {
  return {
    type: 'testSaga'
  };
}

const testReducer = (state = [], action) => {
  switch(action.type) {
    case 'test': {
      return ['test successful'];
    }
    default: {
      return state;
    }
  }
}

const HomePageReducers = combineReducers({
  testReducer,
});

export default HomePageReducers;
