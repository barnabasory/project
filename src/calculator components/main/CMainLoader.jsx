import React from "react";
import styles from "./CMain.module.scss";
import { bgImg } from "../../PAGES";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={`fw cc ${styles["start-page"]}`}>
      <div
        className={`fw cc ${styles["wrapper"]}`}
        style={{ background: "rgba(0, 0, 0, 0.04)" }}
      ></div>
      <div className={`sw cc ${styles["content"]}`}>
        <div className={` cc ${styles["title-details"]}`}>
          <h3 className="h3 skeleton-loading" style={{ color: "transparent" }}>
            Let’s Calculate your Energy Needs
          </h3>
          <p
            className={`skeleton-loading ${styles["details1"]}`}
            style={{ color: "transparent" }}
          >
            It’s okay if you are not sure about what product to buy, If you can
            remember how many items or appliances you use, you can use this
            energy needs calculator to narrow down the best set of products that
            will suit your energy needs
          </p>
        </div>
        <div className={` cc ${styles["button-details"]}`}>
          <p
            className={` skeleton-loading tiny-text ${styles["details2"]}`}
            style={{ color: "transparent" }}
          >
            This energy needs calculator is offered for informational purposes
            only. The results it provides are based on your inputs, and are not
            intended to substitute for professional advice, Please consult an
            expert if you aren’t sure about your results.
          </p>

          <button
            className={`skeleton-loading ${styles.button}`}
            style={{ color: "transparent", cursor: "text" }}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
