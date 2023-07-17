import styles from "./Featured.module.scss";
import {
  sf,
  privida,
  electric_hand,
  green_crest,
  solar_direct,
  blue_camel,
} from "../../PAGES";

const Featured = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.heading}>
          <h4 className={styles.title}>Featured Ventures</h4>
          <span className={`large-paragraph ${styles.text}`}>
            We are creating an ecosystem of consumers — individuals, corporates
            or clusters — funding agencies, energy solution providers, technical
            support and regulators.
          </span>
        </div>
        <div className={styles.images}>
          <div className={styles.image_div}>
            <img src={sf} alt="usaid-logo" className={styles.image} />
          </div>

          <img src={privida} alt="usaid-logo" className={styles.image} />

          <img src={electric_hand} alt="usaid-logo" className={styles.image} />

          <img src={green_crest} alt="usaid-logo" className={styles.image} />

          <img src={blue_camel} alt="usaid-logo" className={styles.image} />
          <img src={solar_direct} alt="usaid-logo" className={styles.image} />
        </div>
        <button className={styles.button}>Become a Vendor</button>
      </div>
    </section>
  );
};

export default Featured;
