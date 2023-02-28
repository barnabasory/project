import React from "react";
import styles from "./ResultFigure.module.scss";

const ResultFigure = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <span className={styles.title}>
          YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
        </span>
        <h4>585 kWH</h4>
        <div className={styles.buttons}>
          <button className={`root-small-bold ${styles.restart}`}>
            Restart
          </button>
          <button className={`root-small-bold ${styles.report}`}>
            Full Energy Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultFigure;
