import React, { useState } from "react";
import styles from "./CFilter.module.scss";
import { search, add, arrowDown } from "../../PAGES";
import { Link } from "react-router-dom";

const CFilter = ({ handleClick }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = () => {
    setSelect((prev) => !prev);
  };
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
                  {/* <select
                    name=""
                    id=""
                    className={`root-small ${styles["select"]}`}
                    style={{
                      height: "44px",
                      width: "196px",
                    }}
                  >
                    <option
                      value="KW: High to Low"
                      className={`root-small ${styles.option1}`}
                      disabled
                    >
                      KW: High to Low
                    </option>
                    <option value="">Kilowatts</option>
                    <option value="">Kilowatts</option>
                    <option value="">Kilowatts</option>
                    <option value="">Kilowatts</option>
                    <option value="">Kilowatts</option>
                    <img
                      src={arrowDown}
                      alt="arrowDown"
                      className={styles.arrow}
                    />
                  </select> */}

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
                    <div className={select ? styles.options : styles.dn}>
                      <span className={styles.option}>A-Z</span>
                      <span className={styles.option}>Z-A</span>
                      <span className={styles.option}>Kilowatt</span>
                      <span className={styles.option}>Ascending</span>
                      <span className={styles.option}>Descending</span>
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
            <Link to="/calculate-units">
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
