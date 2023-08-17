import styles from "./ProductContent.module.scss";

const ProductContent = () => {
  return (
    <section className={styles.wrapper}>
      <span>What's in the box</span>
      <div className={styles.line_break}></div>
      <ul className={`root-small ${styles.product_content}`}>
        <li>
          12 x 400W Monocrystalline Solar Panels - 25-Year Power Output Warranty
        </li>
        <li>
          Sol-Ark 12K 120/240/208V 48V Hybrid All-In-One Stackable
          Inverter/Charger/Controller - 10-Year Warranty
        </li>
        <li>
          2 x Mammoth [PLUS] 48V 9.6kWh Lithium Batteries - 10-Year Warranty,
          Designed & Assembled in USA
        </li>
        <li>
          1 x 10 string disconnecting lithium battery combiner, rated to
          1/0input, 5/16 stud output (MNLBC-250)
        </li>
        <li>
          1 x AC Battery Charger 48V for charging batteries from grid or
          generator
        </li>
        <li>2 x 8AWG Solar Extension Cables PV, approx. 10ft, SET</li>
        <li>2 x 8AWG Solar Extension Cables PV, approx. 100ft, SET</li>
        <li>2 x 1/0AWG SB175 Anderson Cable, approx. 3ft, Assembly</li>
        <li>1 x 4/0AWG Inverter Cable, approx. 3ft, SET</li>
      </ul>
    </section>
  );
};

export default ProductContent;
