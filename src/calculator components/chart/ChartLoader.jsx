import React from "react";
import styles from "./ChartLoader.module.scss";

const ChartLoader = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <div className={` ${styles.chart}`}>
          <span
            className={styles["skeleton-loading"]}
            style={{ width: "60px", height: "50px" }}
          >
            a
          </span>

          <div
            className={`${styles["skeleton-loading"]}`}
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "50%",
              marginTop: "30px",
            }}
          ></div>
        </div>
        <div className={` ${styles.form}`}>
          <div className={styles.request}>
            <h4
              className={`${styles["skeleton-loading"]}`}
              style={{ maxWidth: "80%" }}
            >
              .
            </h4>
            <p
              className={`${styles["skeleton-loading"]}`}
              style={{ height: "10px" }}
            ></p>
            <p
              className={`${styles["skeleton-loading"]}`}
              style={{ height: "10px", maxWidth: "80%" }}
            ></p>
          </div>
          <form>
            <input
              className={`${styles["skeleton-loading"]}`}
              style={{ height: "250px" }}
            />
            <div className={styles.country_code}></div>
          </form>
          <div className={styles.snippet}>
            <div
              className={styles["skeleton-loading"]}
              style={{ height: "30px", minWidth: "65%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartLoader;
