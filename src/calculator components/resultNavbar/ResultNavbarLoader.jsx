import React from "react";
import styles from "./ResultNavbarLoader.module.scss";
import { logo, times } from "../../PAGES";
import { Link } from "react-router-dom";

const ResultNavbar = () => {
  return (
    <div>
      <div className={`fw dd ${styles["navbar-wrapper"]}`}>
        <div className={`sw ${styles["navbar"]}`}>
          <Link to="/">
            <div
              className={styles["skeleton-loading"]}
              style={{ height: "30px", width: "135px" }}
            ></div>
          </Link>
          <h6 className={styles["skeleton-loading"]}>
            View Recommended Solutions
          </h6>
          <Link to="/" className={`dd ${styles.close}`}>
            <span
              className={styles["skeleton-loading"]}
              style={{ height: "30px", width: "65px" }}
            >
              Close
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultNavbar;
