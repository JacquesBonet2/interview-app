import { combineReducers } from 'redux'
import { factoryReducer } from './docs.factoryreducer'

export const factoryCombineReducers = paths =>
    combineReducers(paths.reduce((acc, path) => ({ ...acc, [path]: factoryReducer(path) }), {}))