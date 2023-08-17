import styles from "./WhatToExpect.module.scss";
import { hand_shake } from "../../PAGES/productPage";

const WhatToExpect = () => {
  return (
    <section className={styles.wrapper}>
      <span className={styles.heading}>What To Expect</span>
      <div className={styles.line_break}></div>
      <div className={styles.expectations}>
        <img src={hand_shake} alt="hand-shake" />
        <div className={styles.details}>
          <span className={`root-small-bold ${styles.title}`}>
            Human Support
          </span>
          <div className={styles.info}>
            <span className={`root-small ${styles.info_text}`}>
              After Sale Support, via Phone, Live chat & Email.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.line_break}></div>
      <div className={styles.expectations}>
        <img src={hand_shake} alt="hand-shake" />
        <div className={styles.details}>
          <span className={`root-small-bold ${styles.title}`}>
            Reliable Shipping
          </span>
          <div className={styles.info}>
            <span className={`root-small ${styles.info_text}`}>
              Guaranteed Safe & Reliable Shipping
            </span>
          </div>
        </div>
      </div>
      <div className={styles.line_break}></div>
      <div className={styles.expectations}>
        <img src={hand_shake} alt="hand-shake" />
        <div className={styles.details}>
          <span className={`root-small-bold ${styles.title}`}>
            Financing Options
          </span>
          <div className={styles.info}>
            <span className={`root-small ${styles.info_text}`}>
              Instant Financing Available at Checkout
            </span>
          </div>
        </div>
      </div>
      <div className={styles.line_break}></div>
      <div className={styles.expectations}>
        <img src={hand_shake} alt="hand-shake" />
        <div className={styles.details}>
          <span className={`root-small-bold ${styles.title}`}>
            Professionals
          </span>
          <div className={styles.info}>
            <span className={`root-small ${styles.info_text}`}>
              Set up & Installation by Professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
