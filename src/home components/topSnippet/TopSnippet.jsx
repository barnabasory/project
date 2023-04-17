import { useState, useEffect } from "react";
import styles from "./TopSnippet.module.scss";
import blackBox from "../../assets/icons/black-box.svg";
import { TopSnippetLoader } from "../../PAGES";

const TopSnippet = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <TopSnippetLoader />
      ) : (
        <div className={`fw ${styles["top-snippet-wrapper"]}`}>
          <div className={`sw tiny-text ${styles["top-snippet"]}`}>
            <p className={` ${styles["top-snippet-text"]}`}>
              At checkout, you could take advantage of our Lease to Own
              financing option. Learn More
            </p>
            <nav>
              <ul className={`${styles["top-snippet-nav"]}`}>
                <li>
                  <a href="#About Us">About Us</a>
                </li>
                <li>
                  <a href="#Power">Power as a service</a>
                </li>
                <li>
                  <a href="#seller" className={styles["seller-login"]}>
                    Seller Login <img src={blackBox} alt="seller-login" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default TopSnippet;
