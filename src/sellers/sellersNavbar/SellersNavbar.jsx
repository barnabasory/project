import styles from "./SellersNavbar.module.scss";
import { logo } from "../../PAGES";
import { Link } from "react-router-dom";

const SellersNavbar = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.navbar}`}>
        <Link to="/" className={styles.logo_div}>
          <img src={logo} alt="logo" className={styles.logo} />
        </Link>
        <h6 className={styles.title}>Create a Vendor account</h6>
        <ul className={styles.links}>
          <li className={styles.link}>Shop</li>
          <li className={styles.link}>Help & Support</li>
          <li className={styles.link}>Terms of Service</li>
        </ul>
      </div>
    </section>
  );
};

export default SellersNavbar;
