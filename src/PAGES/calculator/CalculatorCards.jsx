import React, { useState, useEffect } from "react";
import { CNavbar, CFilter, CCards } from "../index";
import styles from "./calculator.module.scss";
import { times, minus, plus } from "../../PAGES";
import cards from "../../calculator components/cards/data";

const initialState = {
  name: " ",
  wattage: " ",
  hours: " ",
};

const CalculatorCards = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({ ...initialState });
  const [message, setMessage] = useState(cards);
  var [count, setCount] = useState(1);

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const appendArray = () => {
    setMessage([...message, value]);
    localStorage.setItem("cards", JSON.stringify([...message, value]));
    setValue({ ...initialState });
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 1) {
      return count === 1;
    }
    setCount(count - 1);
  };

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem("cards"));
    if (savedCards) {
      setMessage(savedCards);
    }
  }, []);

  return (
    <div className={styles.calculator}>
      <CNavbar />
      <CFilter handleClick={showModal} />
      <CCards handleClick={showModal} message={message} />
      {show && (
        <div className={styles["custom-overlay-wrapper"]}>
          <div className={styles["custom-overlay"]}>
            <div className={styles["add-custom-item"]}>
              <span>Add Custom Item</span>
              <img src={times} alt="close-modal" onClick={showModal} />
            </div>
            <div className={styles.hr}></div>
            <form className={styles.form}>
              <label htmlFor="name" className={`root-small ${styles.label}`}>
                Name
              </label>
              <input
                type="text"
                placeholder="Custom made Oven"
                name="name"
                value={value.name}
                className={`root-small ${styles.input}`}
                onChange={handleChange}
              />
              <label htmlFor="wattage" className={`root-small ${styles.label}`}>
                Wattage
              </label>
              <input
                type="number"
                placeholder="3000"
                name="wattage"
                value={value.wattage}
                className={`root-small ${styles.input}`}
                onChange={handleChange}
              />
              <label htmlFor="hours" className={`root-small ${styles.label}`}>
                Hours used per day
              </label>
              <input
                type="number"
                placeholder="12"
                name="hours"
                value={value.hours}
                className={`root-small ${styles.input}`}
                onChange={handleChange}
              />

              <div className={styles.quantity}>
                <label htmlFor="">Quantity</label>
                <div className={styles.count}>
                  <img
                    src={minus}
                    alt="minus"
                    className={styles.minus}
                    onClick={decreaseCount}
                  />
                  <div className={styles["border-right"]}></div>
                  <div className={styles.number}>{count}</div>
                  <div className={styles["border-right"]}></div>
                  <img
                    src={plus}
                    alt="add"
                    className={styles.plus}
                    onClick={increaseCount}
                  />
                </div>
                <button
                  className={`root-small-bold ${styles.button}`}
                  onClick={() => {
                    appendArray();
                    setShow(false);
                  }}
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorCards;
