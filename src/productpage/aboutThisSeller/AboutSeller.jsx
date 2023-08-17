import styles from "./AboutSeller.module.scss";
import { seller_logo, rating_icon } from "../../PAGES/productPage";

const AboutSeller = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.about_this_seller}>About this seller</span>
      <div className={styles.line_break}></div>
      <div className={styles.company_div}>
        <img src={seller_logo} alt="seller_logo" />
        <div className={styles.seller_details}>
          <span className={`root-text-bold ${styles.seller_title}`}>
            Nasa Energy Limited
          </span>
          <span className={`tiny-text ${styles.name}`}>
            Imperium Verified Seller
          </span>
          <span className={`tiny-text ${styles.duration}`}>
            2yrs, on Imperium
          </span>
        </div>
      </div>
      <div className={styles.line_break}></div>
      <div className={styles.seller_rating_div}>
        <div className={styles.seller_rating}>
          <span>Seller Rating:</span>
          <div className={styles.seller_rating_value}>
            4.8 <img src={rating_icon} alt="" />
          </div>
        </div>
        <div className={`tiny-text ${styles.details}`}>
          <span>Details</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSeller;
