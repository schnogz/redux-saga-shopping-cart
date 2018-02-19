import { take, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { SET_CURRENT_USER, setCartItems } from '../actions';

export function* fetchCartSaga () {
  // user set, fetch cart event
  const { user } = yield take(SET_CURRENT_USER);
  // fetch cart details
  const response = yield fetch(`http://localhost:8081/cart/${user.id}`);
  const { items } = yield response.json();
  console.info('CART ITEMS:', items);
  // set cart items
  yield put(setCartItems(items));
}
