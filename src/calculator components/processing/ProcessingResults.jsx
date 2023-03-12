import React, { useState } from "react";
import styles from "./ProcessingResults.module.scss";
import { Link, useNavigate } from "react-router-dom";

const ProcessingResults = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);

  setTimeout(() => {
    navigate("/result");
  }, 5000000);

  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <div className={styles["content-text"]}>
          <h4>Processing Your Results...</h4>
          <span>Give us a moment, this won’t take long :)</span>
        </div>
        <div className={styles.processor}>
          <div className={styles.bars}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>

          <div className={styles["outer-bar"]}></div>
        </div>
      </div>

      <Link to="/result">
        <button>Result Page</button>
      </Link>
    </div>
  );
};

export default ProcessingResults;
