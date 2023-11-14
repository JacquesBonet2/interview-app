
export const docItemsSelector = (state, doc)=> {
    return state[doc].items;
}
export const docLoadingSelector = (state, doc) => state[doc].loading;

