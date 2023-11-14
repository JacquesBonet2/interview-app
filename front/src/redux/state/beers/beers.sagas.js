import { takeEvery } from "redux-saga/effects";
import {
  createDocsWorker,
  DocActionTypes,
  fetchDocsIfNotWorker,
  fetchDocsWorker,
  updateDocsWorker
} from "../docs";

export function* fetchBeersIfNotWatcher() {
  yield takeEvery(DocActionTypes.DOCS_FETCH_IF_NOT, fetchDocsIfNotWorker, "/beers");
}

export function* fetchBeersWatcher() {
  yield takeEvery(DocActionTypes.DOCS_FETCH, fetchDocsWorker, "/beers");
}

export function* createBeersWatcher() {
  yield takeEvery(DocActionTypes.DOCS_CREATE, createDocsWorker, "/beers");
}

export function* updateBeersWatcher() {
  yield takeEvery(DocActionTypes.DOCS_UPDATE, updateDocsWorker, "/beers");
}
