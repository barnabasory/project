import { useState, useEffect } from "react";
import styles from "./ResultNavbar.module.scss";
import { logo, times, ResultNavbarLoader } from "../../PAGES";
import { Link } from "react-router-dom";

const ResultNavbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <ResultNavbarLoader />
      ) : (
        <div>
          <div className={`fw dd ${styles["navbar-wrapper"]}`}>
            <div className={`sw ${styles["navbar"]}`}>
              <Link to="/">
                <img src={logo} alt="logo" className={styles.logo} />
              </Link>
              <h6 className={styles["navbar-title"]}>
                View Recommended Solutions
              </h6>
              <Link to="/" className={`dd ${styles.close}`}>
                <img src={times} alt="" />
                <span className="root-text">Close</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultNavbar;
