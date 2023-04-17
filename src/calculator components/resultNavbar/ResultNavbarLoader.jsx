import styles from "./ResultNavbar.module.scss";
import { logo, times } from "../../PAGES";
import { Link } from "react-router-dom";

const ResultNavbar = () => {
  return (
    <>
      <div>
        <div className={`fw dd ${styles["navbar-wrapper"]}`}>
          <div className={`sw ${styles["navbar"]}`}>
            <div
              className={`skeleton-loading ${styles.logo}`}
              style={{ width: "150px", height: "40px", cursor: "auto" }}
            ></div>
            <h6
              className={`skeleton-loading ${styles["navbar-title"]}`}
              style={{ width: "250px", height: "40px", marginLeft: "5px" }}
            ></h6>
            <div
              className={`dd skeleton-loading ${styles.close}`}
              style={{ width: "150px", height: "40px", cursor: "auto" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultNavbar;
