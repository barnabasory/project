import React, { useState, useEffect } from "react";
import styles from "./ResultFigure.module.scss";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const ResultFigure = () => {
  const { checkedArray } = useContext(CheckedCards);
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);

  useEffect(() => {
    const total = checkedArray.reduce((acc, item) => {
      return acc + (item.count + 1) * item.wattage * item.hours;
    }, 0);
    setMonthlyConsumption(total * 30);
  }, [checkedArray]);

  return (
    <>
      <div className={`fw ${styles.wrapper}`}>
        <div className={`sw ${styles.content}`}>
          <span
            className={`skeleton-loading ${styles.title}`}
            style={{ color: "transparent" }}
          >
            YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
          </span>
          <h4
            className={`${styles["skeleton-loading"]}`}
            style={{ width: "150px", height: "30px" }}
          ></h4>
          <div className={styles.buttons}>
            <button
              className={`root-small-bold skeleton-loading ${styles.restart}`}
              style={{ color: "transparent" }}
            >
              Restart
            </button>
            <button
              className={`root-small-bold skeleton-loading ${styles.report}`}
              style={{ color: "transparent" }}
            >
              Full Energy Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultFigure;
