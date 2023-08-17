import styles from "./BecomeAVendor.module.scss";

const BecomeAVendor = () => {
  return (
    <section className={styles.wrapper}>
      <span className={`tiny-text ${styles.heading}`}>
        Want to Sell on Imperium?
      </span>
      <button>Become a Vendor</button>
    </section>
  );
};

export default BecomeAVendor;
