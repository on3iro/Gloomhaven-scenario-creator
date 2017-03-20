import { takeLatest } from 'redux-saga/effects';
import moxios from 'moxios';

import * as sagas from '../sagas';
import * as types from '../actionTypes';


describe('handleAuthSaga', () => {
  const handleAuthSaga = sagas.handleAuth();

  it('should start task to watch LOGIN_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.LOGIN_SUBMIT, sagas.authorize);
    expect(takeLatestDescriptor).toEqual(expectedYield);
  });

  it('should start taks to watch REGISTER_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.REGISTER_SUBMIT, sagas.register);
    expect(takeLatestDescriptor).toEqual(expectedYield);
  });
});
