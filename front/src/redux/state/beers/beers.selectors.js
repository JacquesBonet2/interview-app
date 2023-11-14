import {docItemsSelector, docLoadingSelector} from "../docs";

export const beerItemsSelector = state => docItemsSelector( state, "/beers");
export const beerLoadingSelector = state => docLoadingSelector( state, "/beers");
