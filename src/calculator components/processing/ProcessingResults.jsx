import React, { useState, useEffect } from "react";
import styles from "./ProcessingResults.module.scss";
import { Link, useNavigate } from "react-router-dom";

const ProcessingResults = () => {
  const [loadingTime, setLoadingTime] = useState(2);
  const [animationFinished, setAnimationFinished] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timeout to change the animationFinished state after the loading time has passed
    const timeout = setTimeout(() => {
      setAnimationFinished(true);
    }, loadingTime * 1000);

    // Return a function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timeout);
    };
  }, [loadingTime]);

  useEffect(() => {
    // Navigate to Component B after the animation finishes
    if (animationFinished) {
      navigate("/result");
    }
  }, [animationFinished, navigate]);

  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <div className={styles["content-text"]}>
          <h4>Processing Your Results...</h4>
          <span>Give us a moment, this won’t take long :)</span>
        </div>
        <div className={styles.processor}>
          <div className={styles.bars}>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
            <div
              className={styles.bar}
              style={{ animationDuration: `${loadingTime}s` }}
            ></div>
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
