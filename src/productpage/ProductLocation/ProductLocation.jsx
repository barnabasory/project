import styles from "./ProductLocation.module.scss";

const ProductLocation = () => {
  return (
    <section className={styles.wrapper}>
      <span>Sellers ships to</span>
      <div className={styles.line_break}></div>
      <ul className={`root-small ${styles.states}`}>
        <li className={styles.li}>
          <strong>•</strong>
          Lagos
        </li>
        <li>
          <strong>•</strong>Anambra
        </li>
        <li>
          <strong>•</strong>Cross River
        </li>
        <li>
          {" "}
          <strong>•</strong>Ogun
        </li>
        <li>
          <strong>•</strong>Bauchi
        </li>
        <li>
          <strong>•</strong>Delta
        </li>
        <li>
          <strong>•</strong>Bayelsa
        </li>
        <li>
          {" "}
          <strong>•</strong>Kano
        </li>
        <li>
          <strong>•</strong>FCT - Abuja
        </li>
        <li>
          <strong>•</strong>Benue
        </li>
        <li>
          <strong>•</strong>Ebonyi
        </li>
        <li>
          <strong>•</strong>Borno
        </li>
        <li>
          <strong>•</strong>FCT - Abuja
        </li>
        <li>
          <strong>•</strong>Benue
        </li>
        <li>
          <strong>•</strong>Ebonyi
        </li>
        <li>
          <strong>•</strong>Borno
        </li>
      </ul>
    </section>
  );
};

export default ProductLocation;
