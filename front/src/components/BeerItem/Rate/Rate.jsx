import React from "react";

import styles from "./Rate.module.scss";

const SCORE = {
    INLOVE: 9,
    HAPPY: 7,
    SAD: 3
}

export const Rate = ({ onRate, uuid }) => (
  <div className={styles.rate}>
    <button className={styles.inLove} onClick={ () => onRate(uuid, SCORE.INLOVE)}/>
    <button className={styles.happy} onClick={ () => onRate(uuid, SCORE.HAPPY)} />
    <button className={styles.sad} onClick={ () => onRate(uuid, SCORE.SAD)}/>
  </div>
);
