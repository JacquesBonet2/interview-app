import { fork } from "redux-saga/effects";

import {} from "./docs";
import {createBeersWatcher, fetchBeersIfNotWatcher, fetchBeersWatcher, updateBeersWatcher} from "./beers";

export { factoryCombineReducers} from "./docs"

export default function* rootSaga() {
  yield fork(fetchBeersIfNotWatcher);
  yield fork(fetchBeersWatcher);
  yield fork(createBeersWatcher);
  yield fork(updateBeersWatcher);
}
