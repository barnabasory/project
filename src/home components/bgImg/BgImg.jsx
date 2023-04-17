import styles from "./BgImg.module.scss";
import bgImage from "../../assets/images/bgImg.jpg";

const BgImg = () => {
  return (
    <>
      <div className={`fw ${styles["bg-image"]}`}>
        <img
          src={bgImage}
          alt="background-imagg"
          className={styles["bg-img"]}
        />
        <div className={styles["bg-image-content"]}>
          <div className={styles["bg-image-content-text"]}>
            <h3>Solar Power for Your Daily Needs.</h3>
            <span className={styles["root-text"]}>
              Choose a package that suits you and make payment in installments.
            </span>
          </div>
          <button
            className={`root-small-bold ${styles["bg-image-content-button"]}`}
          >
            Browse Special Offers
          </button>
        </div>
      </div>
    </>
  );
};

export default BgImg;
