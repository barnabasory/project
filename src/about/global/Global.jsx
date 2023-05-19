import styles from "./Global.module.scss";

import { usaid, rea, giz, uadf } from "../../PAGES";

const Featured = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.heading}>
          <h4 className={styles.title}>Global Partnership</h4>
          <span className={`large-paragraph ${styles.text}`}>
            A network of local and international organisations dedicated to
            reliable energy sources.
          </span>
        </div>
        <div className={styles.images}>
          <div className={styles.image_div}>
            <img src={usaid} alt="usaid-logo" className={styles.image} />
          </div>
          <div className={styles.image_div}>
            <img src={rea} alt="usaid-logo" className={styles.image} />
          </div>
          <div className={styles.image_div}>
            <img src={giz} alt="usaid-logo" className={styles.image} />
          </div>
          <div className={styles.image_div}>
            <img src={uadf} alt="usaid-logo" className={styles.image} />
          </div>
        </div>
        <div className={styles.heading2}>
          <h5 className={styles.title}>Support & Sponsorship</h5>
          <span className={`large-paragraph ${styles.text}`}>
            A network of local and international organisations dedicated to
            reliable energy sources.
          </span>
        </div>
        <button className={styles.button}>Contact Us</button>
      </div>
    </section>
  );
};

export default Featured;
