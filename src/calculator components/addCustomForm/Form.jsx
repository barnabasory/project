import React, { useState } from "react";
import styles from "./Form.module.scss";
import { times, minus, plus } from "../../PAGES";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import cards from "../../calculator components/cards/data";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
};

const Form = () => {
  const [show, setShow] = useState(false);
  const { counts, setCounts } = useContext(CheckedCards);
  const [data, setData] = useState(cards);
  const [value, setValue] = useState({
    name: "",
    wattage: "",
    hours: "",
  });

  const increaseCount = (index) => {
    // increase Count
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  const decreaseCount = (index) => {
    // decrease count
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const addCustom = (id) => {
    const customItem = { ...value, id };
    setData([...data, customItem]);
    localStorage.setItem("cards", JSON.stringify([...data, customItem]));
    setValue(initialState);
    setCounts([...counts, 1]);
  };
  return (
    <div className={styles["custom-overlay-wrapper"]}>
      {data.map((card, index) => {
        const { id } = card;
        return (
          <div className={styles["custom-overlay"]} key={id}>
            <div className={styles["add-custom-item"]}>
              <span>Add Custom Item</span>
              <img src={times} alt="close-modal" onClick={showModal} />
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
                value={value.name}
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
                value={value.wattage}
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
                    onClick={() => decreaseCount(id)}
                  />
                  <div className={styles["border-right"]}></div>

                  <div className={styles.number}>{counts[id]}</div>

                  <div className={styles["border-right"]}></div>
                  <img
                    src={plus}
                    alt="add"
                    className={styles.plus}
                    onClick={() => increaseCount(id)}
                  />
                </div>
                <button
                  className={`root-small-bold ${styles.button}`}
                  onClick={() => {
                    addCustom(id);
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
