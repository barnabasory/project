import React, { useState, useEffect } from "react";
import styles from "./Form.module.scss";
import { times, minus, plus } from "../../PAGES";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
  count: 0,
};

const Form = () => {
  const { counts, setCounts, show, setShow } = useContext(CheckedCards);
  const [values, setValues] = useState({
    name: "",
    wattage: "",
    hours: "",
    count: 0,
  });

  const handleMinusClick = () => {
    setValues((prevValues) => ({
      ...prevValues,
      count: prevValues.count === 0 ? 0 : prevValues.count - 1,
    }));
  };

  const handlePlusClick = () => {
    setValues((prevValues) => ({
      ...prevValues,
      count: prevValues.count + 1,
    }));
  };

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (event) => {
    setValues((prevInputs) => ({
      ...prevInputs,
      [event.target.name]: event.target.value,
    }));
  };

  const addCustomItem = (id) => {
    const customItem = { ...values, id: counts.length + 1 };
    const newData = [...counts, customItem];
    console.log(newData);
    setCounts(newData);
    localStorage.setItem("cards", JSON.stringify(newData));
    setValues(initialState);
  };

  useEffect(() => {
    const savedCards = JSON.parse(sessionStorage.getItem("cards"));
    if (savedCards) {
      setCounts(savedCards);
    }
  }, []);

  return (
    <div className={styles.custom_form}>
      <div
        className={styles["custom-overlay-wrapper"]}
        onClick={() => setShow(false)}
      ></div>
      {counts.map((card, index) => {
        const { id, count } = card;
        return (
          <div className={styles["custom-overlay"]}>
            <div className={styles["add-custom-item"]}>
              <span>Add Custom Item</span>
              <img
                src={times}
                alt="close-modal"
                onClick={() => setShow(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className={styles.hr}></div>
            <form className={styles.form} key={id}>
              <label htmlFor="name" className={`root-small ${styles.label}`}>
                Name
              </label>
              <input
                type="text"
                placeholder="Custom made Oven"
                name="name"
                value={values.name}
                className={`root-small ${styles.input}`}
                onChange={handleChange}
                required
              />
              <label htmlFor="wattage" className={`root-small ${styles.label}`}>
                Wattage
              </label>
              <input
                type="number"
                placeholder="3000"
                name="wattage"
                value={values.wattage}
                className={`root-small ${styles.input}`}
                onChange={handleChange}
                required
              />
              <label htmlFor="hours" className={`root-small ${styles.label}`}>
                Hours used per day
              </label>
              <input
                type="number"
                placeholder="12"
                name="hours"
                value={values.hours}
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
                    onClick={handleMinusClick}
                  />
                  <div className={styles["border-right"]}></div>
                  <input
                    type="number"
                    placeholder="12"
                    name="hours"
                    value={values.count}
                    className={`root-small ${styles.number}`}
                    onChange={handleChange}
                    required
                  />
                  <div className={styles["border-right"]}></div>
                  <img
                    src={plus}
                    alt="add"
                    className={styles.plus}
                    onClick={handlePlusClick}
                  />
                </div>
                <button
                  className={`root-small-bold ${styles.button}`}
                  onClick={() => {
                    addCustomItem(id);
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
  );
};

export default Form;
