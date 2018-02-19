import { take, put, call, apply } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { GET_CURRENT_USER_INFO, setCurrentUser } from '../actions';

export function* currentUserSaga () {
  // user load event
  const { id } = yield take(GET_CURRENT_USER_INFO);
  console.info('USER ID:', id);
  // fetch user info
  const userResponse = yield call(fetch,`http://localhost:8081/user/${id}`);
  const data = yield apply(userResponse, userResponse.json);
  console.info('USER:', data);
  // set user info
  yield put(setCurrentUser(data));
}
