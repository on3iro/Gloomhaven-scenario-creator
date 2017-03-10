import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


function* testAction(action) {
  console.log(action.type);
  yield put({ type: 'test' });
}

function* testSaga() {
  yield takeEvery('testSaga', testAction);
}

export default function *() {
  yield [
  ];
}
