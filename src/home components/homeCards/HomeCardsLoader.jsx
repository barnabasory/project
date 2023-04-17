import React from "react";
import styles from "./HomeCardsLoader.module.scss";
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
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={house} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Complete Solution
          </p>
        </div>
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={solar} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Solar Panel
          </p>
        </div>
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={inverter} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Inverter
          </p>
        </div>
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={battery} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Battery
          </p>
        </div>
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={bulb} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Accessory
          </p>
        </div>
        <div className={`skeleton-loading ${styles["home-card"]}`}>
          <img src={equipment} alt="house" style={{ visibility: "hidden" }} />
          <p
            className={`root-small ${styles["home-card-text"]}`}
            style={{ visibility: "hidden" }}
          >
            Home Equipment
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCards;
