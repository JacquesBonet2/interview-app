import React from "react";

import styles from "./Rate.module.scss";

const SCORE = {
    INLOVE: 9,
    HAPPY: 7,
    SAD: 3
}

export const Rate = ({ onRate, beer }) => (
  <div className={styles.rate}>
    <button className={styles.inLove} onClick={ () => onRate(beer, SCORE.INLOVE)}/>
    <button className={styles.happy} onClick={ () => onRate(beer, SCORE.HAPPY)} />
    <button className={styles.sad} onClick={ () => onRate(beer, SCORE.SAD)}/>
  </div>
);
