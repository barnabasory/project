import React, { useState, useEffect } from "react";
import styles from "./EditUnits.module.scss";
import { arrowUp, arrowDown, ProcessingResults } from "../../PAGES";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import { useNavigate, Link } from "react-router-dom";

const EditUnits = () => {
  const navigate = useNavigate();
  const {
    checkedArray,
    setCheckedArray,
    counts,
    setCounts,
    wattage,
    setWattage,
    hours,
    setHours,
  } = useContext(CheckedCards);
  const [loading, setLoading] = useState(false);

  const handleWattageChange = (index) => (e) => {
    const newData = checkedArray.map((item, i) => {
      if (index === i) {
        return { ...item, [e.target.name]: e.target.value };
      } else {
        return item;
      }
    });
    setCheckedArray(newData);
  };

  const decreaseWatt = (id) => {
    const newWattage = checkedArray.map((item) =>
      item.id === id ? { ...item, wattage: item.wattage - 1 } : item
    );
    setCheckedArray(newWattage);
  };

  const increaseWatt = (id) => {
    const newWattage = checkedArray.map((item) => {
      if (item.id === id) {
        return { ...item, wattage: item.wattage + 1 };
      } else {
        return item;
      }
    });
    setCheckedArray(newWattage);
  };
  const decreaseHours = (id) => {
    const newHours = checkedArray.map((item) =>
      item.id === id ? { ...item, hours: item.hours - 1 } : item
    );
    setCheckedArray(newHours);
  };

  const increaseHours = (id) => {
    const newHours = checkedArray.map((item) => {
      if (item.id === id) {
        return { ...item, hours: item.hours + 1 };
      } else {
        return item;
      }
    });
    setCheckedArray(newHours);
  };

  const fetchResult = () => {
    setLoading(true);
    navigate("/result");
    setLoading(false);
  };

  return (
    <>
      <Link to="/processing">
        <button style={{ background: "red" }}>Processing results</button>
      </Link>
      {loading && <ProcessingResults />}

      <div className={`sw ${styles["edit-page"]}`}>
        <div className={` ${styles["top-bar"]}`}>
          <span className="skeleton-loading" style={{ color: "transparent" }}>
            Edit the wattage and hourly usage for each item
          </span>
          <div className={styles.back}>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Back
            </span>
            <button
              className={`root-small-bold skeleton-loading ${styles.button}`}
              style={{ color: "transparent", cursor: "auto" }}
            >
              See Results
            </button>
          </div>
        </div>
        <div className={styles["border-top"]}></div>
        <div className={styles.main}>
          <div className={styles.cards}>
            {checkedArray?.map((checkedItem, index) => {
              const { id, name, count, wattage, hours } = checkedItem;
              return (
                <form className={`skeleton-loading ${styles.card}`} key={index}>
                  <div className={styles.custom_name_div}>
                    <span style={{ visibility: "hidden" }}>{name}</span>
                    <span
                      className={`tiny-text-bold ${styles.count_value}`}
                      style={{ visibility: "hidden" }}
                    >
                      {count + 1}
                    </span>
                  </div>
                  {/* wattage */}
                  <div
                    className={styles.hr}
                    style={{ visibility: "hidden" }}
                  ></div>
                  <div
                    className={styles["wattage-div"]}
                    style={{ visibility: "hidden" }}
                  >
                    <span className={`root-small ${styles.wattage}`}>
                      Wattage
                    </span>
                    <div className={`dd ${styles.calculate}`}>
                      <div className={styles.meter}>
                        <input
                          className={`root-text ${styles.meter_number}`}
                          value={wattage}
                          name="wattage"
                          onChange={handleWattageChange(index)}
                        />
                        <div className={styles.arrows}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["arrow-up"]}
                            onClick={() => increaseWatt(id)}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["arrow-down"]}
                            onClick={() => decreaseWatt(id)}
                          />
                        </div>
                      </div>
                      <span className={`root-small ${styles.acronym}`}>W</span>
                    </div>
                  </div>
                  <div
                    className={styles.hr2}
                    style={{ visibility: "hidden" }}
                  ></div>
                  {/* hours */}
                  <div
                    className={styles["hours-div"]}
                    style={{ visibility: "hidden" }}
                  >
                    <span className={`root-small ${styles.hours}`}>
                      Hours used per day
                    </span>
                    <div className={`dd ${styles.calculate}`}>
                      <div className={styles["h-meter"]}>
                        <input
                          className={`root-text ${styles.h_number}`}
                          value={hours}
                          name="hours"
                          onChange={handleWattageChange(index)}
                        />
                        <div className={styles["h-arrows"]}>
                          <img
                            src={arrowUp}
                            alt="arrow-up"
                            className={styles["h-arrow-up"]}
                            onClick={() => increaseHours(id)}
                          />
                          <img
                            src={arrowDown}
                            alt="arrow-down"
                            className={styles["h-arrow-down"]}
                            onClick={() => decreaseHours(id)}
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
