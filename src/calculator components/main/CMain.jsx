import React from "react";
import styles from "./CMain.module.scss";
import { bgImg } from "../../PAGES";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className={`fw cc ${styles["start-page"]}`}>
      <div className={`fw cc ${styles["wrapper"]}`}></div>
      <div className={`sw cc ${styles["content"]}`}>
        <div className={` cc ${styles["title-details"]}`}>
          <h3 className="h3">Let’s Calculate your Energy Needs</h3>
          <p className={` ${styles["details1"]}`}>
            It’s okay if you are not sure about what product to buy, If you can
            remember how many items or appliances you use, you can use this
            energy needs calculator to narrow down the best set of products that
            will suit your energy needs
          </p>
        </div>
        <div className={` cc ${styles["button-details"]}`}>
          <p className={` tiny-text ${styles["details2"]}`}>
            This energy needs calculator is offered for informational purposes
            only. The results it provides are based on your inputs, and are not
            intended to substitute for professional advice, Please consult an
            expert if you aren’t sure about your results.
          </p>
          <Link to="/calculate-cards">
            <button className={styles.button}>Start</button>
          </Link>
        </div>
      </div>
      <img src={bgImg} alt="bg-img" className={` fw ${styles.image}`} />
    </div>
  );
};

export default Main;
