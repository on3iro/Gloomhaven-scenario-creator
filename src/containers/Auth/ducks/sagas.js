import { fork, call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './actionTypes';


function *test(action) {
  yield put(actions.test(action.payload));
}


function *login() {
  yield takeEvery(types.LOGIN_SUBMIT, test);
}

export default function *() {
  yield [
    fork(login),
  ];
}
