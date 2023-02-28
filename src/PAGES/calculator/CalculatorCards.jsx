import React, { useState, useEffect } from "react";
import { CNavbar, CFilter, CCards } from "../index";
import styles from "./calculator.module.scss";
import { times, minus, plus } from "../../PAGES";
import cards from "../../calculator components/cards/data";

import { useContext } from "react";
import { CheckedCards } from "../../Context";

const initialState = {
  name: " ",
  wattage: " ",
  hours: " ",
};

const CalculatorCards = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({ ...initialState });
  const [data, setData] = useState(cards);

  const { counts, setCounts } = useContext(CheckedCards);

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const appendArray = () => {
    setData([...data, value]);
    localStorage.setItem("cards", JSON.stringify([...data, value]));
    setValue({ ...initialState });
  };

  const increaseCount = (index) => {
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  const decreaseCount = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  useEffect(() => {
    const savedCards = JSON.parse(sessionStorage.getItem("cards"));
    if (savedCards) {
      setData(savedCards);
    }
  }, []);

  return (
    <div className={styles.calculator}>
      <CNavbar />
      <CFilter handleClick={showModal} />
      <CCards handleClick={showModal} message={data} />
      {show && (
        <div className={styles["custom-overlay-wrapper"]}>
          {data.map((card, index) => {
            const { id, name, wattage } = card;
            return (
              <div className={styles["custom-overlay"]} key={id}>
                <div className={styles["add-custom-item"]}>
                  <span>Add Custom Item</span>
                  <img src={times} alt="close-modal" onClick={showModal} />
                </div>
                <div className={styles.hr}></div>
                <form className={styles.form}>
                  <label
                    htmlFor="name"
                    className={`root-small ${styles.label}`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Custom made Oven"
                    name="name"
                    value={value.name}
                    className={`root-small ${styles.input}`}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="wattage"
                    className={`root-small ${styles.label}`}
                  >
                    Wattage
                  </label>
                  <input
                    type="number"
                    placeholder="3000"
                    name="wattage"
                    value={value.wattage}
                    className={`root-small ${styles.input}`}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="hours"
                    className={`root-small ${styles.label}`}
                  >
                    Hours used per day
                  </label>
                  <input
                    type="number"
                    placeholder="12"
                    name="hours"
                    value={value.hours}
                    className={`root-small ${styles.input}`}
                    onChange={handleChange}
                    required
                  />

                  <div className={styles.quantity}>
                    <label htmlFor="">Quantity</label>
                    <div className={styles.count}>
                      <img
                        src={minus}
                        alt="minus"
                        className={styles.minus}
                        onClick={() => decreaseCount(index)}
                      />
                      <div className={styles["border-right"]}></div>
                      <div className={styles.number}>{counts[index]}</div>

                      <div className={styles["border-right"]}></div>
                      <img
                        src={plus}
                        alt="add"
                        className={styles.plus}
                        onClick={() => increaseCount(index)}
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
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CalculatorCards;
