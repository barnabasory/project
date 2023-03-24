import React, { useState, useEffect } from "react";
import styles from "./EditUnits.module.scss";
import { arrowUp, arrowDown, ProcessingResults } from "../../PAGES";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import { useNavigate } from "react-router-dom";

const EditUnits = () => {
  const navigate = useNavigate();
  const { checkedArray, counts, wattage, setWattage, hours, setHours } =
    useContext(CheckedCards);
  const [loading, setLoading] = useState(false);

  const increaseWattage = (index) => {
    const newWattage = [...wattage]; // Make a copy of the wattage array
    newWattage[index] = parseInt(newWattage[index]) + 1; // Increment the value at the current index by 1
    setWattage(newWattage); // Update the state with the new array
  };

  const decreaseWattage = (index) => {
    const newWattage = [...wattage]; // Make a copy of the wattage array
    newWattage[index] = parseInt(newWattage[index]) - 1; // Decrement the value at the current index by 1
    setWattage(newWattage); // Update the state with the new array
  };

  const increaseHours = (index) => {
    const newHours = [...hours];
    newHours[index] = parseInt(newHours[index] + 1);
    setHours(newHours);
  };
  const decreaseHours = (index) => {
    const newHours = [...hours];
    newHours[index] = parseInt(newHours[index] - 1);
    setHours(newHours);
  };

  const fetchResult = () => {
    setLoading(true);
    navigate("/result");
    setLoading(false);
  };

  return (
    <>
      {loading && <ProcessingResults />}
      <div className={`sw ${styles["edit-page"]}`}>
        <div className={`${styles["top-bar"]}`}>
          <span>Edit the wattage and hourly usage for each item</span>
          <div className={styles.back}>
            <span>Back</span>
            <button
              className={`root-small-bold ${styles.button}`}
              onClick={fetchResult}
            >
              See Results
            </button>
          </div>
        </div>
        <div className={styles["border-top"]}></div>
        <div className={styles.main}>
          <div className={styles.cards}>
            {checkedArray?.map((checkedItem, index) => {
              const { id, name, count } = checkedItem;
              return (
                <form className={styles.card} key={index}>
                  <div className={styles.custom_name_div}>
                    <span>{name}</span>
                    <span className={`tiny-text-bold ${styles.count_value}`}>
                      {count + 1}
                    </span>
                  </div>
                  {/* wattage */}
                  <div className={styles.hr}></div>
                  <div className={styles["wattage-div"]}>
                    <span className={`root-small ${styles.wattage}`}>
                      Wattage
                    </span>
                    <div className={`dd ${styles.calculate}`}>
                      <div className={styles.meter}>
                        <input
                          className={`root-text ${styles.meter_number}`}
                          value={wattage[index]}
                          name="wattage"
                          onChange={(e) => {
                            const newWattage = [...wattage]; // Make a copy of the wattage array
                            newWattage[index] = e.target.value; // Update the value at the current index
                            setWattage(newWattage); // Update the state with the new array
                          }}
                        />
                        <div className={styles.arrows}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["arrow-up"]}
                            onClick={() => increaseWattage(index)}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["arrow-down"]}
                            onClick={() => decreaseWattage(index)}
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
                        <input
                          className={`root-text ${styles.h_number}`}
                          value={hours[index]}
                          name="hours"
                          onChange={(e) => {
                            const newHours = [...hours];
                            newHours[index] = e.target.value;
                            setHours(newHours);
                          }}
                        />
                        <div className={styles["h-arrows"]}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["h-arrow-up"]}
                            onClick={() => increaseHours(index)}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["h-arrow-down"]}
                            onClick={() => decreaseHours(index)}
                          />
                        </div>
                      </div>
                      <span className={`root-small ${styles["h-acronym"]}`}>
                        Hrs
                      </span>
                    </div>
                  </div>
                </form>
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
