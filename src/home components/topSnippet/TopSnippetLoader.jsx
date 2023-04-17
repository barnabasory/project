import { useState, useEffect } from "react";
import styles from "./TopSnippet.module.scss";
import blackBox from "../../assets/icons/black-box.svg";

const TopSnippet = () => {
  return (
    <>
      <div className={`fw ${styles["top-snippet-wrapper"]}`}>
        <div className={`sw tiny-text ${styles["top-snippet"]}`}>
          <p
            className={`skeleton-loading ${styles["top-snippet-text"]}`}
            style={{ width: "450px", height: "20px" }}
          ></p>
          <nav>
            <ul
              className={`skeleton-loading ${styles["top-snippet-nav"]}`}
              style={{ width: "300px", height: "20px" }}
            >
              <li>
                <a href="#About Us"></a>
              </li>
              <li>
                <a href="#Power"></a>
              </li>
              <li>
                <a href="#seller" className={styles["seller-login"]}></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopSnippet;
