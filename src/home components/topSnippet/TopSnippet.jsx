import styles from "./TopSnippet.module.scss";
import blackBox from "../../assets/icons/black-box.svg";
import { Link } from "react-router-dom";

const TopSnippet = () => {
  return (
    <>
      <div className={`fw ${styles["top-snippet-wrapper"]}`}>
        <div className={`sw tiny-text ${styles["top-snippet"]}`}>
          <p className={` ${styles["top-snippet-text"]}`}>
            At checkout, you could take advantage of our Lease to Own financing
            option. Learn More
          </p>
          <nav>
            <div className={`${styles["top-snippet-nav"]}`}>
              <Link to="/about-us">About Us</Link>
              <Link to="/power-service">Power as a service</Link>
              <Link to="/select-role" className={styles["seller-login"]}>
                Seller Login <img src={blackBox} alt="seller-login" />
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopSnippet;
