import React, { useState, useEffect } from "react";
import styles from "./ResultFigure.module.scss";
import { useContext } from "react";
import { CheckedCards } from "../../contexts/Context";

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
          <span className={styles.title}>
            YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
          </span>

          <h4>{monthlyConsumption.toLocaleString()} kWH</h4>

          <div className={styles.buttons}>
            <button className={`root-small-bold ${styles.restart}`}>
              Restart
            </button>
            <button className={`root-small-bold ${styles.report}`}>
              Full Energy Report
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultFigure;
