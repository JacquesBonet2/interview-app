import React from "react";

import styles from "./BeerItem.module.scss";
import { Rate } from "./Rate/Rate";
import {RenderCount} from "../RenderCount";

export const BeerItemComponent = ({ beer: { name, ibu, score, uuid }, onRate }) => (
  <div className={styles.beerItem}>
    <div className={styles.name}>{name}</div>
    <div className={styles.ibu}>IBU: {ibu}</div>
    <div className={styles.score}>Score: {score.toPrecision(1)}</div>
    <div className={styles.rate}>
      <Rate uuid={uuid} onRate={onRate} score={score}/>
    </div>
    <RenderCount />
  </div>
);
