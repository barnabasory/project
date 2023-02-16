import React, { useState, useEffect } from "react";
import styles from "./CCards.module.scss";
import { add, plus, minus } from "../../PAGES";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CCards = ({ handleClick, message }) => {
  const [counts, setCounts] = useState(Array(message.length).fill(1));
  const [showSums, setShowSums] = useState(Array(message.length).fill(false));
  const [results, setResults] = useState(Array(message.length).fill(1));

  const increaseCount = (index) => {
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
    setResults(
      results.map((result, i) => (i === index ? counts[i] + 1 : result))
    );
  };

  const decreaseCount = (index) => {
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
    setResults(
      results.map((result, i) =>
        i === index && result > 1 ? counts[i] - 1 : result
      )
    );
  };

  const toggleShowSum = (index) => {
    setShowSums(
      showSums.map((showSum, i) => (i === index ? !showSum : showSum))
    );
  };

  // re-renders the complete array when message arrays changes
  useEffect(() => {
    setCounts(Array(message.length).fill(1));
    setResults(Array(message.length).fill(1));
    setShowSums(Array(message.length).fill(false));
  }, [message]);

  return (
    <div className={`sw ${styles["cards-page"]}`}>
      <div className={styles["cards-section"]}>
        <div className={`cc ${styles["cards"]}`}>
          {message.length > 0 &&
            message.map((card, index) => {
              const { id, name, wattage, hours } = card;
              return (
                <div className={styles.card} key={index}>
                  <div className={styles["card-content"]}>
                    <div className={styles.description}>
                      <span>{name}</span>
                      <span className="root-small">Average kW:{wattage}</span>
                    </div>
                    <input
                      type="checkbox"
                      id="calc-checkbox"
                      className={styles.checkbox}
                      onChange={() => toggleShowSum(index)}
                      checked={showSums[index]}
                    />
                  </div>
                  <div className={styles.total}>
                    {showSums[index] && (
                      <div className={`dd ${styles.sum}`} id="sum">
                        {results[index]}
                      </div>
                    )}
                    <div className={styles.calculate}>
                      <img
                        src={minus}
                        alt="minus"
                        className={styles.minus}
                        onClick={() => decreaseCount(index)}
                      />
                      <div className={styles["border-left"]}></div>
                      <div className={styles.count}>{counts[index]}</div>
                      <img
                        src={plus}
                        alt="plus"
                        className={styles.plus}
                        onClick={() => increaseCount(index)}
                      />
                      <div className={styles["border-right"]}></div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
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
          <Link to="/calculate-units">
            <button className={`root-text-bold ${styles["continue-button"]}`}>
              Continue
            </button>
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
