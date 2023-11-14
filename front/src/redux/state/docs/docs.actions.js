import { DocActionTypes } from "./docs.model";

export const fetchDocsIfNot = (path) => ({
  path,
  type: DocActionTypes.DOCS_FETCH_IF_NOT
});
export const fetchDocs = (path) => ({
  path,
  type: DocActionTypes.DOCS_FETCH
});

export const fetchDocsSuccess = (path, payload) => ({
  path,
  type: DocActionTypes.DOCS_FETCH_SUCCESS,
  payload
});

export const fetchDocsFailure = (path) => ({
  path,
  type: DocActionTypes.DOCS_FETCH_FAILURE
});

export const createDoc = (path, payload) => ({
  path,
  type: DocActionTypes.DOCS_CREATE,
  payload
});

export const createDocSuccess = (path, payload) => ({
  path,
  type: DocActionTypes.DOCS_CREATE_SUCCESS,
  payload
});

export const createDocFailure = (path) => ({
  path,
  type: DocActionTypes.DOCS_CREATE_FAILURE
});

export const updateDoc = (path, payload) => ({
  path,
  type: DocActionTypes.DOCS_UPDATE,
  payload
});

export const updateDocSucces = (path, payload) => ({
  path,
  type: DocActionTypes.DOCS_UPDATE_SUCCESS,
  payload
});

export const updateDocFailure = (path) => ({
  path,
  type: DocActionTypes.DOCS_UPDATE_FAILURE
});

