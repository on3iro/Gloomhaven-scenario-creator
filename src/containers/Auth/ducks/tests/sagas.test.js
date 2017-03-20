import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import moxios from 'moxios';

import * as sagas from '../sagas';
import * as types from '../actionTypes';


describe('handleAuthSaga', () => {
  const handleAuthSaga = sagas.handleAuth();

  it('should start task to watch LOGIN_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.LOGIN_SUBMIT, sagas.authorize);
    expect(takeLatestDescriptor).toMatchSnapshot();
  });

  it('should start taks to watch REGISTER_SUBMIT', () => {
    const takeLatestDescriptor = handleAuthSaga.next().value;
    const expectedYield = takeLatest(types.REGISTER_SUBMIT, sagas.register);
    expect(takeLatestDescriptor).toMatchSnapshot();
  });
});

describe('login', () => {
  describe('authorize saga', () => {
    const action = { type: types.LOGIN_SUBMIT, payload: {
      test: 'test',
    }};
    const authorizeSaga = sagas.authorize(action);

    it('should call requestLogin with action.payload', () => {
      const callDescriptor = authorizeSaga.next().value;
      const expectedYield = call(sagas.requestLogin, { test: 'test' });
      expect(callDescriptor).toMatchSnapshot();
    });
  });

  describe('requestLogin', () => {
    const data = { test: 'test' };
    let requestLoginSaga;

    beforeEach(() => {
      requestLoginSaga = sagas.requestLogin(data);
    });

    it('should call axios.post', () => {
      const callDescriptor = requestLoginSaga.next().value;
      const expectedYield = call(axios.post, 'http://localhost:3030/api/auth/login', data, { headers: {'Content-Type': 'application/json'}});
      expect(callDescriptor).toMatchSnapshot();
    });

    it('should put LOGIN_SUCCESS action with payload', () => {
      const response = {
        data: {
          id: 1,
          email: 'foo@bar.com',
          name: 'foo',
          token: 'abc123',
        }
      };
      requestLoginSaga.next().value;
      const putDescriptor = requestLoginSaga.next(response).value;
      const expectedYield = put({ type: types.LOGIN_SUCCESS, payload: {
        id: 1,
        email: 'foo@bar.com',
        name: 'foo',
        token: 'abc123',
      }});
      expect(putDescriptor).toMatchSnapshot();
    });

    it('should put LOGIN_ERROR action', () => {
      const response = new Error('Some error');
      requestLoginSaga.next().value;
      const putDescriptor = requestLoginSaga.throw(response).value;
      const expectedYield = put({ type: types.LOGIN_ERROR, payload: 'Some error'  });
      expect(putDescriptor).toMatchSnapshot();
    });
  });
});
