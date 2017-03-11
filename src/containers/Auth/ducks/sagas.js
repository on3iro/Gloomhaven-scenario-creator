import axios from 'axios';
import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';


function *requestLogin(data) {
  const url = 'http://localhost:3030/api/auth/login';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(axios.post, url, data, config);

    yield put({ type: types.LOGIN_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error });
  }
}

function *authorize(action) {
  yield call(requestLogin, action.payload);
}

function *handleLogin() {
  yield takeLatest(types.LOGIN_SUBMIT, authorize);
}

export default function *() {
  yield [
    fork(handleLogin),
  ];
}
