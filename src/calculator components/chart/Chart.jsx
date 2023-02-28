import React from "react";
import styles from "./Chart.module.scss";

const Chart = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <div className={styles.chart}>
          <span className={styles.title}>
            YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
          </span>
          <h3>585 KWH</h3>
          <div className={styles.toggle}>
            <span className={`root-small ${styles.month}`}>Per Month</span>
            <div className={styles["toggle-button"]}>
              <div className={styles["toggle-ball"]}></div>
            </div>
            <span className={`root-small ${styles.year}`}>Per Year</span>
          </div>
        </div>
        <div className={styles.form}></div>
      </div>
    </div>
  );
};

export default Chart;
