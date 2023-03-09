import React, { useState, useEffect } from "react";
import styles from "./CFilter.module.scss";
import { search, add, arrowDown } from "../../PAGES";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import data from "../cards/data";

const CFilter = ({ handleClick, setSortOrder, message }) => {
  const [select, setSelect] = useState(false);
  const { checkedArray, setCheckedArray } = useContext(CheckedCards);
  const [toggleCheckBox, setToggleCheckBox] = useState(
    Array(data.length).fill(false)
  );

  const handleSelect = () => {
    setSelect((prev) => !prev);
  };

  const handleCheckBox = (index) => {
    setToggleCheckBox(
      toggleCheckBox.map((checked, i) => (i === index ? !checked : checked))
    );
  };

  useEffect(() => {
    console.log("checkedArray:", checkedArray);
  }, [checkedArray]);

  return (
    <>
      <div className={`sw ${styles["filter-section"]}`}>
        <div className={styles["filter-div"]}>
          <div className={styles.filter}>
            <span className={`root-text ${styles["filter-text"]}`}>
              Let’s start with selecting the Items you want to power with your
              solar system
            </span>
            <div className={`dd ${styles["filter-bars"]}`}>
              <form className={styles.form}>
                <div className={styles.select}>
                  <div
                    className={`root-small ${styles.select_input}`}
                    onClick={handleSelect}
                  >
                    KW: High to Low
                    <img
                      src={arrowDown}
                      alt="arrowDown"
                      className={styles.arrow}
                    />
                  </div>
                  {select && (
                    <div
                      className={styles.select_overlay}
                      onClick={() => setSelect(false)}
                    ></div>
                  )}

                  {select && (
                    <div className={select ? styles.options : styles.dn}>
                      <div
                        className={styles.option}
                        onClick={() => setSortOrder("ascending")}
                      >
                        Ascending
                      </div>
                      <div
                        className={styles.option}
                        onClick={() => setSortOrder("descending")}
                      >
                        Descending
                      </div>
                      <span className={styles.option}>Kilowatt</span>
                      <span className={styles.option}>Ascending</span>
                    </div>
                  )}
                </div>
              </form>

              <div className={`dd ${styles["search-box"]}`}>
                <input
                  type="search"
                  className={`root-small ${styles["search"]}`}
                  placeholder="Search"
                />
                <img
                  src={search}
                  alt="search-icon"
                  className={styles["search-icon"]}
                />
              </div>
            </div>
          </div>
          <div className={styles["continue-custom-div"]}>
            <div className={styles["add-custom-div"]} onClick={handleClick}>
              <img src={add} alt="add-icon" className={styles["add-icon"]} />
              <span className={styles[""]}>Add Custom Item</span>
            </div>
            <Link
              to={"/calculate-units"}
              onClick={() => {
                const checkedItems = message.filter(
                  (card, id) => toggleCheckBox[id]
                );
                setCheckedArray([...checkedArray, ...checkedItems]);
                console.log("checkedArray:", checkedArray);
              }}
            >
              <button className={`root-text-bold ${styles["button"]}`}>
                Continue
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.hr}></div>
      </div>
    </>
  );
};

export default CFilter;
