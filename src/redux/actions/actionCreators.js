import { call, put, takeEvery } from 'redux-saga/effects';
import { TYPES } from '../types';

// Action Creators
const requestDog = () => {
  return { type: TYPES.REQUESTED_DOG };
};

const requestDogSuccess = data => {
  return { type: TYPES.REQUESTED_DOG_SUCCEEDED, url: data.message };
};

const requestDogError = () => {
  return { type: TYPES.REQUESTED_DOG_FAILED };
};

export const fetchDog = () => {
  return { type: TYPES.FETCHED_DOG };
};

// Watcher saga takes the dispatched action and calls the worker saga (fetchDogAsync)
export function* watchFetchDog() {
  yield takeEvery(TYPES.FETCHED_DOG, fetchDogAsync);
}

// Worker saga
function* fetchDogAsync() {
  try {
    yield put(requestDog());
    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random').then(res =>
        res.json()
      );
    });
    yield put(requestDogSuccess(data));
    console.log(data.status);
  } catch (error) {
    yield put(requestDogError());
  }
}
