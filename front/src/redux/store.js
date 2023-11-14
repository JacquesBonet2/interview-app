import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga, { factoryCombineReducers } from "./state";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store =
    createStore(factoryCombineReducers(["/beers"]), composeEnhancers(applyMiddleware(sagaMiddleware)))


sagaMiddleware.run(rootSaga);
