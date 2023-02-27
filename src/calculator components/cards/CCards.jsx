import React, { useState, useEffect } from "react";
import styles from "./CCards.module.scss";
import { add, plus, minus } from "../../PAGES";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const CCards = ({ handleClick, message }) => {
  const [counts, setCounts] = useState(Array(message.length).fill(1));
  const [toggleCheckBox, setToggleCheckBox] = useState(
    Array(message.length).fill(false)
  );
  const [results, setResults] = useState(Array(message.length).fill(1));

  const { checkedArray, setCheckedArray } = useContext(CheckedCards);

  const increaseCount = (index) => {
    // increase Count
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
    setResults(
      results.map((result, i) => (i === index ? counts[index] + 1 : result))
    );
  };

  const decreaseCount = (index) => {
    // decrease count
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
    setResults(
      // set count result
      results.map((result, i) =>
        i === index && result > 1 ? counts[index] - 1 : result
      )
    );
  };

  const handleCheckBox = (id) => {
    setToggleCheckBox(
      toggleCheckBox.map((checked, index) =>
        index === id ? !checked : checked
      )
    );
  };

  const CheckedItems = message.map((card) => card);

  // re-renders the complete array when message arrays changes
  useEffect(() => {
    setCounts(Array(message.length).fill(1));
    setResults(Array(message.length).fill(1));
    setToggleCheckBox(Array(message.length).fill(false));
  }, [message]);

  return (
    <div className={`sw ${styles["cards-page"]}`}>
      <div className={styles["cards-section"]}>
        <ul className={`cc ${styles["cards"]}`}>
          {message.length > 0 &&
            message.map((card, index) => {
              const { id, name, wattage, hours } = card;
              return (
                <li className={styles.card} key={index}>
                  <div className={styles["card-content"]}>
                    <div className={styles.description}>
                      <span>{name}</span>
                      <span className="root-small">Average kW:{wattage}</span>
                    </div>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckBox(index)}
                      checked={toggleCheckBox[index]}
                    />
                  </div>
                  <div className={styles.total}>
                    {toggleCheckBox[index] && (
                      <div className={`dd ${styles.sum}`} id="sum">
                        {results[index]}
                      </div>
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
            <div className={styles["add-custom-card"]} onClick={handleClick}>
              <img src={add} alt="add-icon" className={styles["add-icon"]} />
              <span className="root-small">Add Custom Item</span>
            </div>
          </div>
          <Link
            to="/calculate-units"
            onClick={() => {
              const checkedItems = message.filter(
                (card, index) => toggleCheckBox[index]
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
          only. The results it provides are based on your inputs, and are not
          intended to substitute for professional advice, Please consult an
          expert if you aren’t sure about your results.
        </p>
      </div>
    </div>
  );
};

export default CCards;
