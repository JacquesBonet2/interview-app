import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate";
import { RenderCount } from "../RenderCount";

export const BeerItemComponent = ({ beer, onRate }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{beer.name}</div>
    <div className={styles.ibu}>IBU: {beer.ibu}</div>
    <div className={styles.score}>Score: {beer.score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate beer={beer} onRate={onRate} />
    </div>
    <RenderCount />
  </div>
);
