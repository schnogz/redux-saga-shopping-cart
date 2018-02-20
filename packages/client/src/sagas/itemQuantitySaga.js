import { takeLatest, select, put, call } from 'redux-saga/effects'
import fetch from 'isomorphic-fetch'
import { currentUserSelector } from "../selectors";
import {
  INCREASE_ITEM_QUANTITY,
  DECREASE_ITEM_QUANTITY,
  setItemQuantityFetchStatus,
  decreaseItemQuantity,
  FETCHED,
  FETCHING
} from '../actions';

export function* handleIncreaseItemQuantity({id}) {
  yield put(setItemQuantityFetchStatus(FETCHING));
  const user = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/add/${user.get('id')}/${id}`);
  
  if (response.status !== 200) {
    yield put(decreaseItemQuantity(id, true));
    alert('Sorry, not enough inventory.');
  } else {
    console.info('Item +1:', id);
  }
  
  yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* handleDecreaseItemQuantity({id, local}) {
  if (local) {
    return;
  }
  yield put(setItemQuantityFetchStatus(FETCHING));
  const user = yield select(currentUserSelector);
  const response = yield call(fetch, `http://localhost:8081/cart/remove/${user.get('id')}/${id}`);
  
  if (response.status !== 200) {
    console.warn('Error removing item:::', response);
  }
  
  yield put(setItemQuantityFetchStatus(FETCHED));
}

export function* itemQuantitySaga () {
  yield [
    takeLatest(INCREASE_ITEM_QUANTITY, handleIncreaseItemQuantity),
    takeLatest(DECREASE_ITEM_QUANTITY, handleDecreaseItemQuantity)
  ]
}
