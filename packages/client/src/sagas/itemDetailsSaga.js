import { take, fork, put } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { SET_CART_ITEMS, setItemDetails } from '../actions';

export function* loadItemDetails(item) {
  console.info('ITEM:', item);
  // fetch item info
  const response = yield fetch(`http://localhost:8081/items/${item.id}`);
  const data = yield response.json();
  // info found, set item details
  yield put(setItemDetails(data[0]));
}

export function* itemDetailsSaga () {
  // items found in cart
  const { items } = yield take(SET_CART_ITEMS);
  // fetch each item async
  yield items.map(item=>fork(loadItemDetails, item));
}
