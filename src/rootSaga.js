/**
  * Root saga combining all application sagas
  */
import AuthSaga from 'containers/Auth/ducks/sagas';


export default function *() {
  yield [
    AuthSaga(),
  ];
}
