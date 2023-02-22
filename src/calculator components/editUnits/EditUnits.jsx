import React, { useState } from "react";
import styles from "./EditUnits.module.scss";
import { arrowUp, arrowDown } from "../../PAGES";
import { useSelector } from "react-redux";
import { getAllCheckedItems } from "../../redux/checkedSlice";
import data from "../cards/data";

const EditUnits = () => {
  const [wattage, setWattage] = useState(20);
  const [hours, setHours] = useState(1);

  const checkedIds = useSelector(getAllCheckedItems);
  const checkedItems = data.filter((card, index) =>
    checkedIds.includes(card.index)
  );
  console.log(checkedItems); //the empty array in the console

  const increaseWattage = () => {
    setWattage(wattage + 20);
  };

  const decreaseWattage = () => {
    if (wattage === 20) {
      return wattage === 20;
    }
    setWattage(wattage - 20);
  };

  const increaseHours = () => {
    if (hours === 12) {
      return hours === 12;
    }
    setHours(hours + 1);
  };

  const decreaseHours = () => {
    if (hours === 1) {
      return hours === 1;
    }
    setHours(hours - 1);
  };
  return (
    <>
      {" "}
      <div className={`sw ${styles["edit-page"]}`}>
        <div className={`${styles["top-bar"]}`}>
          <span>Edit the wattage and hourly usage for each item</span>
          <div className={styles.back}>
            <span>Back</span>
            <button className={`root-small-bold ${styles.button}`}>
              See Results
            </button>
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles["border-top"]}></div>
          <div className={styles.cards}>
            {checkedItems.map((checkedItem, index) => {
              const { name, wattage, hours } = checkedItem;
              return (
                <div className={styles.card} key={index}>
                  <span>{name}</span>
                  {/* wattage */}
                  <div className={styles.hr}></div>
                  <div className={styles["wattage-div"]}>
                    <span className={`root-small ${styles.wattage}`}>
                      Wattage{" "}
                    </span>
                    <div className={`dd ${styles.calculate}`}>
                      <div className={styles.meter}>
                        <div className={styles["meter-number"]}>{wattage}</div>
                        <div className={styles.arrows}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["arrow-up"]}
                            onClick={increaseWattage}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["arrow-down"]}
                            onClick={decreaseWattage}
                          />
                        </div>
                      </div>
                      <span className={`root-small ${styles.acronym}`}>W</span>
                    </div>
                  </div>
                  <div className={styles.hr2}></div>
                  {/* hours */}
                  <div className={styles["hours-div"]}>
                    <span className={`root-small ${styles.hours}`}>
                      Hours used per day
                    </span>
                    <div className={`dd ${styles.calculate}`}>
                      <div className={styles["h-meter"]}>
                        <div className={styles["h-number"]}>{hours}</div>
                        <div className={styles["h-arrows"]}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["h-arrow-up"]}
                            onClick={increaseHours}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["h-arrow-down"]}
                            onClick={decreaseHours}
                          />
                        </div>
                      </div>
                      <span className={`root-small ${styles["h-acronym"]}`}>
                        Hrs
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="calc-edit-footer"></div>
      </div>
    </>
  );
};

export default EditUnits;
