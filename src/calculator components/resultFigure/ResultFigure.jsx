import React from "react";
import styles from "./ResultFigure.module.scss";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const ResultFigure = () => {
  const { counts, wattage, hours } = useContext(CheckedCards);
  const cardProducts = counts.map((count, index) => {
    const wattagePerCard = wattage[index];
    const hoursPerCard = hours[index];
    return count * wattagePerCard * hoursPerCard * 2 * 30;
  });

  const monthlyConsumption = cardProducts.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <span className={styles.title}>
          YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
        </span>

        <h4>{monthlyConsumption} kWH</h4>

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
  );
};

export default ResultFigure;
