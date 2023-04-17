import React from "react";
import styles from "./HomeCards.module.scss";
import {
  house,
  battery,
  inverter,
  bulb,
  solar,
  equipment,
} from "../../PAGES/index";

const HomeCards = () => {
  return (
    <>
      <div className={`sw ${styles["home-cards"]}`}>
        <div className={styles["home-card"]}>
          <img src={house} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>
            Complete Solution
          </p>
        </div>
        <div className={styles["home-card"]}>
          <img src={solar} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>
            Solar Panel
          </p>
        </div>
        <div className={styles["home-card"]}>
          <img src={inverter} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>Inverter</p>
        </div>
        <div className={styles["home-card"]}>
          <img src={battery} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>Battery</p>
        </div>
        <div className={styles["home-card"]}>
          <img src={bulb} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>Accessory</p>
        </div>
        <div className={styles["home-card"]}>
          <img src={equipment} alt="house" />
          <p className={`root-small ${styles["home-card-text"]}`}>
            Home Equipment
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
