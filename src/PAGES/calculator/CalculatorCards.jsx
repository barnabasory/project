import React, { useState, useEffect } from "react";
import { CNavbar, CFilter, CCards } from "../index";
import styles from "./calculator.module.scss";
import { times, minus, plus } from "../../PAGES";
import cards from "../../calculator components/cards/data";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
};

const CalculatorCards = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name: "",
    wattage: "",
    hours: "",
  });
  const [data, setData] = useState(cards);
  const [sortOrder, setSortOrder] = useState("ascending");
  const { counts, setCounts } = useContext(CheckedCards);

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

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

  const sortFunction = (a, b) => {
    if (sortOrder === "ascending") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  };

  const sortedCards = data.sort(sortFunction);

  const addCustom = (id) => {
    const customItem = { ...value, id };
    setData([...data, customItem]);
    localStorage.setItem("cards", JSON.stringify([...data, customItem]));
    setValue(initialState);
    setCounts([...counts, 1]);
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
      <CFilter
        handleClick={showModal}
        sortFunction={sortFunction}
        sortedCards={sortedCards}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        message={data}
      />
      <CCards
        handleClick={showModal}
        message={data}
        sortFunction={sortFunction}
        sortedCards={sortedCards}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onAddCustomItem={(id) => increaseCount(id)}
      />

      {show && (
        <div className={styles["custom-overlay-wrapper"]}>
          {sortedCards.map((card, index) => {
            const { id } = card;
            return (
              <div className={styles["custom-overlay"]} key={id}>
                <div className={styles["add-custom-item"]}>
                  <span>Add Custom Item</span>
                  <img src={times} alt="close-modal" onClick={showModal} />
                </div>
                <div className={styles.hr}></div>
                <form className={styles.form} key={id}>
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
      )}
    </div>
  );
};

export default CalculatorCards;
