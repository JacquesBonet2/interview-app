import {useRef} from "react";
import styles from "./RenderCount.module.scss";

export const RenderCount = () => {
    const renderCounter  = useRef(0);
    renderCounter.current = renderCounter.current + 1;

    return (
      <div className={styles.container}>Renders: {renderCounter.current}</div>
    )
}