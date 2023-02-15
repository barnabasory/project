import React from "react";
import styles from "./CFilter.module.scss";
import { search, add, arrowDown } from "../../PAGES";
import { Link } from "react-router-dom";

const CFilter = ({ handleClick }) => {
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
                <select
                  name=""
                  id=""
                  className={`root-small ${styles["select"]}`}
                  style={{
                    height: "44px",
                    width: "196px",
                    position: "relative",
                  }}
                >
                  <option value="KW: High to Low" className="root-small">
                    KW: High to Low
                  </option>
                  <option value="">Kilowatts</option>
                  <option value="">Kilowatts</option>
                  <option value="">Kilowatts</option>
                  <option value="">Kilowatts</option>
                  <option value="">Kilowatts</option>
                </select>
                <img
                  src={arrowDown}
                  alt="arrowDown"
                  className={styles["arrow-down"]}
                />
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

        <div className={styles["filter-border-bottom"]}></div>
      </div>
    </>
  );
};

export default CFilter;
