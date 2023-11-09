import { BeerActionTypes } from "./beers.model";

export const fetchBeersIfNot = () => ({
  type: BeerActionTypes.BEERS_FETCH_IF_NOT
});
export const fetchBeers = () => ({
  type: BeerActionTypes.BEERS_FETCH
});

export const fetchBeersSuccess = beers => ({
  type: BeerActionTypes.BEERS_FETCH_SUCCESS,
  beers
});

export const fetchBeersFailure = () => ({
  type: BeerActionTypes.BEERS_FETCH_FAILURE
});

export const createBeer = beer => ({
  type: BeerActionTypes.BEERS_CREATE,
  beer
});

export const createBeerSuccess = beer => ({
  type: BeerActionTypes.BEERS_CREATE_SUCCESS,
  beer
});

export const createBeerFailure = () => ({
  type: BeerActionTypes.BEERS_CREATE_FAILURE
});

export const updateBeerRate = (uuid, rate) => ({
  type: BeerActionTypes.BEERS_UPDATE_RATE,
  uuid, rate
});

export const updateBeerRateSucces = (beer) => ({
  type: BeerActionTypes.BEERS_UPDATE_RATE_SUCCESS,
  beer
});

export const updateBeerRateFailure = () => ({
  type: BeerActionTypes.BEERS_UPDATE_RATE_FAILURE
});

