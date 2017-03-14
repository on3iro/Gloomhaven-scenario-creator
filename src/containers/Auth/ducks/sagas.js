import axios from 'axios';
import { fork, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import * as types from './actionTypes';


// Login
function *requestLogin(data) {
  const url = 'http://localhost:3030/api/auth/login';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(axios.post, url, data, config);

    yield put({ type: types.LOGIN_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.LOGIN_ERROR, payload: error.response });
  }
}

function *authorize(action) {
  yield call(requestLogin, action.payload);
}

// Register
function *requestRegister(data) {
  const url = 'http://localhost:3030/api/auth/register';
  const config = {
    headers: {'Content-Type': 'application/json'},
  };

  try {
    const response = yield call(axios.post, url, data, config);
    yield put({ type: types.REGISTER_SUCCESS, payload: response.data });
  }catch (error) {
    yield put({ type: types.REGISTER_ERROR, payload: error.response });
  }
}

function *register(action) {
  yield call(requestRegister, action.payload);
}

// Auth thread
function *handleAuth() {
  yield takeLatest(types.LOGIN_SUBMIT, authorize);
  yield takeLatest(types.REGISTER_SUBMIT, register)
}

export default function *() {
  yield [
    fork(handleAuth),
  ];
}
