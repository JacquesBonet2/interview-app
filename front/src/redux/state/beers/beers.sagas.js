import { put, call, takeEvery, select } from "redux-saga/effects";
import history from "../../../history";
import { getBeers, postBeer, postBeerRate } from "./beers.api";
import {
  fetchBeers,
  fetchBeersFailure,
  fetchBeersSuccess,
  createBeerSuccess,
  createBeerFailure,
  updateBeerRateFailure,
  updateBeerRateSucces
} from "./beers.actions";
import { BeerActionTypes } from "./beers.model";
import { beerItemsSelector } from "./beers.selectors";

function* fetchBeersIfNotWorker() {
  const items = yield select(beerItemsSelector);
  if (items.length === 0) {
    yield put(fetchBeers());
  }
}

export function* fetchBeersIfNotWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH_IF_NOT, fetchBeersIfNotWorker);
}

function* fetchBeersWorker() {
  try {
    const { data } = yield call(getBeers);
    yield put(fetchBeersSuccess(data));
  } catch (e) {
    yield put(fetchBeersFailure([]));
  }
}

export function* fetchBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_FETCH, fetchBeersWorker);
}

function* createBeersWorker({ beer }) {
  try {
    const { data } = yield call(postBeer, beer);
    history.push("/");
    yield put(createBeerSuccess(data));
  } catch (e) {
    yield put(createBeerFailure());
  }
}

export function* createBeersWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_CREATE, createBeersWorker);
}

export function* updateBeersRateWorker({ uuid, rate }) {
  try {
    const { data } = yield call(postBeerRate, uuid, rate);
    yield put(updateBeerRateSucces(data));
  } catch (e) {
    yield put(updateBeerRateFailure());
  }
}

export function* updateBeersRateWatcher() {
  yield takeEvery(BeerActionTypes.BEERS_UPDATE_RATE, updateBeersRateWorker);
}
