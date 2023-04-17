import React from "react";
import styles from "./BgImgLoader.module.scss";
import bgImage from "../../assets/images/bgImg.jpg";
import { BgImgLoader } from "../../PAGES";

const BgImg = () => {
  return (
    <>
      <div className={`fw ${styles["bg-image"]}`}>
        <div className={styles["bg-img"]}></div>
        <div className={styles["bg-image-content"]}>
          <div className={styles["bg-image-content-text"]}>
            <h3
              className={styles["skeleton-loading"]}
              style={{ width: "700px", height: "60px" }}
            ></h3>
            <span
              className={` skeleton-loading ${styles["root-text"]}`}
              style={{ width: "700px", height: "30px" }}
            ></span>
          </div>
          <button
            className={`root-small-bold skeleton-loading ${styles["bg-image-content-button"]}`}
            style={{ width: "300px", height: "30px" }}
          ></button>
        </div>
      </div>
    </>
  );
};

export default BgImg;
