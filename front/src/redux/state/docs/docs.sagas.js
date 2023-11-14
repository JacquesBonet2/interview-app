import { put, call, select } from "redux-saga/effects";
import history from "../../../history";
import { getDocs, postDoc, putDoc } from "./docs.api";
import {
  fetchDocs,
  fetchDocsFailure,
  fetchDocsSuccess,
  createDocSuccess,
  createDocFailure,
  updateDocFailure,
  updateDocSucces
} from "./docs.actions";
import { docItemsSelector } from "./docs.selectors";

export function* fetchDocsIfNotWorker(path) {
  const items = yield select(docItemsSelector, path);
  if (items.length === 0) {
    yield put(fetchDocs( path));
  }
}

export function* fetchDocsWorker(path) {
  try {
    const { data } = yield call(getDocs, path);
    yield put(fetchDocsSuccess(path, data));
  } catch (e) {
    yield put(fetchDocsFailure( path, []));
  }
}

export function* createDocsWorker(path, { payload }) {
  try {
    const data = yield call(postDoc, path, payload);
    history.push("/");
    yield put(createDocSuccess(path, data));
  } catch (e) {
    yield put(createDocFailure(path));
  }
}

export function* updateDocsWorker( path, { payload }) {
  try {
    const { data } = yield call(putDoc, path, payload.uuid, payload);
    yield put(updateDocSucces(path, data));
  } catch (e) {
    yield put(updateDocFailure(path, payload));
  }
}

