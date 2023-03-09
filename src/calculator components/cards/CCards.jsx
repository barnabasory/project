import React, { useState, useEffect } from "react";
import styles from "./CCards.module.scss";
import { add, plus, minus, checkmark } from "../../PAGES";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import Checkbox from "./Checkbox";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
  counts: "",
};

const CCards = ({ handleClick, message, sortedCards }) => {
  const { counts, setCounts, results, setResults } = useContext(CheckedCards);
  const [toggleCheckBox, setToggleCheckBox] = useState(
    Array(message.length).fill(false)
  );

  const { checkedArray, setCheckedArray } = useContext(CheckedCards);
  const [value, setValue] = useState({ ...initialState });
  const [data, setData] = useState(message);
  const [checkbox, setCheckbox] = useState(false);

  const checkCheckBox = (index) => {
    setCheckbox(toggleCheckBox[index]);
    setToggleCheckBox(
      toggleCheckBox.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const increaseCount = (index) => {
    // increase Count
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
    setResults(
      results.map((result, i) => (i === index ? counts[i] + 1 : result))
    );
  };

  const decreaseCount = (index) => {
    // decrease count
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  // const handleCheckBox = (index) => {
  //   setToggleCheckBox(
  //     toggleCheckBox.map((checked, i) => (i === index ? !checked : checked))
  //   );
  // };

  const handleCheckboxChange = (index) => {
    setToggleCheckBox(
      toggleCheckBox.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  useEffect(() => {
    const savedCards = JSON.parse(sessionStorage.getItem("cards"));
    if (savedCards) {
      setData(savedCards);
    }
  }, []);

  // re-renders the complete array when message arrays changes
  useEffect(() => {
    setCounts(Array(message.length).fill(1));
    setResults(Array(message.length).fill(1));
    setToggleCheckBox(Array(message.length).fill(false));
  }, [message]);

  return (
    <>
      <div className={`fw ${styles.wrapper}`}>
        <div className={`sw ${styles["cards-page"]}`}>
          <div className={styles["cards-section"]}>
            <ul className={`cc ${styles["cards"]}`}>
              {sortedCards.map((card, index) => {
                const { id, name, wattage, hours } = card;
                return (
                  <li className={styles.card} key={index}>
                    <div className={styles["card-content"]}>
                      <div className={styles.description}>
                        <span>{name}</span>
                        <span className="root-small">Average kW:{wattage}</span>
                        <span>{hours}</span>
                      </div>

                      <Checkbox
                        index={index}
                        checked={toggleCheckBox[index]}
                        onChange={(index) => handleCheckboxChange(index)}
                      />
                    </div>
                    <div className={styles.total}>
                      {toggleCheckBox[index] && (
                        <div className={`dd ${styles.sum}`}>{counts[id]}</div>
                      )}
                      <div className={styles.calculate}>
                        <img
                          src={minus}
                          alt="minus"
                          className={styles.minus}
                          onClick={() => decreaseCount(id)}
                        />
                        <div className={styles["border-left"]}></div>
                        <div className={styles.count}>{counts[id]}</div>
                        <img
                          src={plus}
                          alt="plus"
                          className={styles.plus}
                          onClick={() => increaseCount(id)}
                        />
                        <div className={styles["border-right"]}></div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.footer}>
              <div className={`cc ${styles["footer-content"]}`}>
                <span className={`tiny-text ${styles["footer-instruction"]}`}>
                  Can’t find what you are looking for? You can add a custom item
                </span>
                <div
                  className={styles["add-custom-card"]}
                  onClick={handleClick}
                >
                  <img
                    src={add}
                    alt="add-icon"
                    className={styles["add-icon"]}
                  />
                  <span className="root-small">Add Custom Item</span>
                </div>
              </div>
              <Link
                to={"/calculate-units"}
                onClick={() => {
                  const checkedItems = message.filter(
                    (card, id) => toggleCheckBox[id]
                  );

                  setCheckedArray([...checkedArray, ...checkedItems]);
                }}
              >
                <button className={styles["continue-button"]}>Continue</button>
              </Link>
            </div>
          </div>
          <div className={styles["footer-snippet-div"]}>
            <div className={styles["border-bottom"]}></div>
            <p className={`root-small ${styles["footer-snippet"]}`}>
              This energy needs calculator is offered for informational purposes
              only. The results it provides are based on your inputs, and are
              not intended to substitute for professional advice, Please consult
              an expert if you aren’t sure about your results.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CCards;
