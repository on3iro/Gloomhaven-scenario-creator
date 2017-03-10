/**
  * Root saga combining all application sagas
  */
import testSaga from 'containers/Login/ducks/sagas';


export default function *() {
  yield [
    testSaga(),
  ];
}
