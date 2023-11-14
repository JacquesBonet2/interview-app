import {updateDoc} from "../docs";

export const updateBeerRate = (path, beer, score) =>
    updateDoc( path, { ...beer, score: (beer.score * beer.nbRate + score ) / (beer.nbRate + 1), nbRate: beer.nbRate + 1})
