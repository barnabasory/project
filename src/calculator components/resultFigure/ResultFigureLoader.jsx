import React, { useState, useEffect } from "react";
import styles from "./ResultFigureLoader.module.scss";

const ResultFigure = () => {
  useEffect(() => {}, []);

  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <span className={styles["skeleton-loading"]}>
          YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
        </span>

        <h4 className={styles["skeleton-loading"]}> kWH</h4>

        <div className={styles.buttons}>
          <button
            className={styles["skeleton-loading"]}
            style={{ padding: "8px 46px 8px 46px", color: "transparent" }}
          >
            Restart
          </button>
          <button
            className={styles["skeleton-loading"]}
            style={{ padding: "8px 32px 8px 32px", color: "transparent" }}
          >
            Full Energy Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultFigure;
