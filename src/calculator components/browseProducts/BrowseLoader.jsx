import React from "react";
import styles from "./BrowseLoader.module.scss";

const BrowseLoader = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        {" "}
        <h5 className={styles["skeleton-loading"]}>See Your Offers</h5>
        <span className={styles["skeleton-loading"]}>
          Based on your energy usage, these are the products we recommend{" "}
        </span>
        <span className={styles["skeleton-loading"]} style={{ height: "10px" }}>
          Note: Please consult an expert if you aren’t sure about your results.
        </span>
      </div>
      <div className={`sw ${styles.images}`}>
        <div
          className={styles["skeleton-loading"]}
          style={{ height: "330px", width: "300px" }}
        ></div>
        <div
          className={styles["skeleton-loading"]}
          style={{ height: "330px", width: "300px" }}
        ></div>
        <div
          className={styles["skeleton-loading"]}
          style={{ height: "330px", width: "300px" }}
        ></div>
        <div
          className={styles["skeleton-loading"]}
          style={{ height: "330px", width: "300px" }}
        ></div>
      </div>
      <button
        className={styles["skeleton-loading"]}
        style={{
          padding: "10px 51px 10px 51px",
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
      >
        Browse all products
      </button>
    </section>
  );
};

export default BrowseLoader;
