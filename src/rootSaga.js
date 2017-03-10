/**
  * Root saga combining all application sagas
  */
import testSaga from 'containers/HomePage/ducks/sagas';


export default function *() {
  yield [
    testSaga(),
  ];
}
