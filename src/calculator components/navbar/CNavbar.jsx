import React from "react";
import styles from "./CNavbar.module.scss";
import { logo, times } from "../../PAGES";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={`fw dd ${styles["navbar-wrapper"]}`}>
        <div className={`sw ${styles["navbar"]}`}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h6 className={styles["navbar-title"]}>Energy Needs Calculator</h6>
          <Link to="/">
            <div className={`dd ${styles.close}`}>
              <img src={times} alt="" />
              <span className="root-text">Close</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
