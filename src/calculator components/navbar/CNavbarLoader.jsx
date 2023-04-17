import React from "react";
import styles from "./CNavbar.module.scss";
import { logo, times } from "../../PAGES";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className={`fw dd ${styles["navbar-wrapper"]}`}>
        <div className={`sw ${styles["navbar"]}`}>
          <div
            className="skeleton-loading"
            style={{ width: "150px", height: "40px", cursor: "auto" }}
          ></div>

          <h6
            className={`skeleton-loading ${styles["navbar-title"]}`}
            style={{ width: "250px", height: "40px", marginLeft: "5px" }}
          ></h6>

          <div
            className="skeleton-loading"
            style={{ width: "150px", height: "40px", cursor: "auto" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
