import crudReducer from './docs.reducer'

const initialState = {
    loading: true,
    items: [],
}

export const factoryReducer =
    path =>
        (state = initialState, action) =>
            crudReducer(state, [path], action)