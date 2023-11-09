import { BeerActionTypes } from "./beers.model";

const defaultBeersState = {
  items: [],
  loading: false
};
export const beersReducer = (state = defaultBeersState, action) => {
  switch (action.type) {
    case BeerActionTypes.BEERS_FETCH:
      return { ...state, loading: true };
    case BeerActionTypes.BEERS_FETCH_SUCCESS:
      return { ...state, items: action.beers, loading: false };
    case BeerActionTypes.BEERS_FETCH_FAILURE:
      return { ...state, loading: false };
    case BeerActionTypes.BEERS_CREATE_SUCCESS:
      return { ...state, items: [...state.items, action.beer] };
    case BeerActionTypes.BEERS_UPDATE_RATE_SUCCESS:
      return { ...state, items: state.items.map( item => item.uuid === action.beer.uuid ? action.beer : item) };
    default:
      return state;
  }
};
