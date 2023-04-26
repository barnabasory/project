import React, { useState, useEffect } from "react";
import styles from "./CCards.module.scss";
import { add, plus, minus, checkmark, vertical, horizontal } from "../../PAGES";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
};

const CCards = () => {
  const {
    counts,
    setCounts,
    sum,
    setSum,
    checkedItems,
    setCheckedItems,
    show,
    setShow,
    setCheckedArray,
  } = useContext(CheckedCards);

  const handleIncrement = (id) => {
    const newCount = counts.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count + 1,
          sum: count.sum + 1,
          checked: true,
        };
      }
      return count;
    });

    setCounts(newCount);
    setSum(sum);
  };

  const handleDecrement = (id) => {
    const oldCount = counts.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count === 0 ? 0 : count.count - 1,
          sum: count.sum === 0 ? 0 : count.sum - 1,
        };
      }
      return count;
    });

    setCounts(oldCount);
    setSum(sum);
  };

  const handleChange = (id) => {
    const updatedCheckedItems = checkedItems.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );

    setCheckedItems(updatedCheckedItems);
  };
  const displayForm = () => {
    setShow(!show);
  };

  //get all the checked boxes and send them to the edit-units page
  const allCheckedItems = () => {
    const checkedArray = counts.filter(
      (item) => checkedItems[item.id] === !item.isChecked
    );
    setCheckedArray(checkedArray);
    localStorage.removeItem("checkedArray");
  };
  useEffect(() => {
    const checkedArray = counts.filter(
      (item) => checkedItems[item.id] === !item.isChecked
    );
    setCheckedArray(checkedArray);
    localStorage.setItem("checkedArray", JSON.stringify(checkedArray));
  }, [counts, checkedItems, setCheckedArray]);

  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem("checkedArray"));
    setCheckedArray(checked);
  }, [setCheckedArray]);

  return (
    <>
      <div className={`fw ${styles.wrapper}`}>
        <div className={`sw ${styles["cards-page"]}`}>
          <div className={styles["cards-section"]}>
            <ul className={`cc ${styles["cards"]}`}>
              {counts?.map((card, index) => {
                const { id, name, wattage, count } = card;
                return (
                  <li className={styles.card} key={id}>
                    <div className={styles["card-content"]}>
                      <div className={styles.description}>
                        <span>{name}</span>
                        <span className={`root-small ${styles.average}`}>
                          Average kW:{` ${wattage}`}
                        </span>
                      </div>
                      <div
                        aria-roledescription="checkbox"
                        className={
                          checkedItems[id]
                            ? styles.checkbox
                            : styles.checkbox_empty
                        }
                        onClick={() =>
                          setCheckedItems({
                            ...checkedItems,
                            [id]: !checkedItems[id],
                          })
                        }
                        onChange={handleChange}
                      >
                        <img src={checkmark} alt="checkmark" />
                      </div>
                    </div>
                    <div className={styles.total}>
                      {checkedItems[id] && (
                        <div className={`dd ${styles.sum}`}>
                          {checkedItems[id] ? count + 1 : 0}
                        </div>
                      )}

                      <div className={styles.calculate}>
                        <img
                          src={minus}
                          alt="minus"
                          className={styles.minus}
                          onClick={() => handleDecrement(id)}
                        />
                        <div className={styles["border-left"]}></div>
                        <div className={styles.count}>
                          {checkedItems[id] ? count + 1 : 0}
                        </div>
                        <img
                          src={plus}
                          alt="plus"
                          className={styles.plus}
                          onClick={() => handleIncrement(id)}
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
                <div className={styles["add-custom-div"]} onClick={displayForm}>
                  <div className={styles.img_bg}>
                    <img
                      src={vertical}
                      alt="add-icon"
                      className={styles.vertical}
                    />
                    <img
                      src={horizontal}
                      alt="add-icon"
                      className={styles.horizontal}
                    />
                  </div>
                  <span className={styles[""]}>Add Custom Item</span>
                </div>
              </div>
              <Link to={"/calculate-units"}>
                <button
                  className={styles["continue-button"]}
                  onClick={allCheckedItems}
                >
                  Continue
                </button>
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
