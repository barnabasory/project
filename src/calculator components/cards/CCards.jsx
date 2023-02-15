import React, { useState } from "react";
import styles from "./CCards.module.scss";
import { add } from "../../PAGES";
import { Link } from "react-router-dom";

const CCards = ({ handleClick, message }) => {
  return (
    <div className={`sw ${styles["cards-page"]}`}>
      <div className={styles["cards-section"]}>
        <div className={`cc ${styles["cards"]}`}>
          {message.length > 0 &&
            message.map((card) => {
              const { id, name, wattage, hours } = card;
              return (
                <div className={styles.card} key={id}>
                  <div className={styles["card-content"]}>
                    <div className={styles.description}>
                      <span>{name}</span>
                      <span className="root-small">Average kW:{wattage}</span>
                      <span>{hours}</span>
                    </div>
                    <input type="checkbox" className={styles.checkbox} />
                  </div>
                  <div className={styles.total}></div>
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
