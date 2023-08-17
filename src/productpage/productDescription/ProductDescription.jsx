import styles from "./ProductDescription.module.scss";

const ProductDescription = () => {
  return (
    <section className={styles.wrapper}>
      <span>About this Product</span>
      <div className={styles.line_break}></div>
      <p className={`root-small ${styles.text}`}>
        The is a 30kw solar solar solution with high performance, low operating
        cost alternative to a standard diesel powered solution. It is a clean,
        sustainable and environmentally friendly solution, delivering all year
        round lighting even through darker months. this solution ensures that
        even on winter days, the unit operates consistently and reliably.
        Creating zero noise or emissions. a perfect addition to many different
        applications including Hospitality, schools and other commercial
        applications as well.
      </p>
    </section>
  );
};

export default ProductDescription;
