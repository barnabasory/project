import { useState } from "react";
import styles from "./VendorNavbar.module.scss";
import { logo } from "../../PAGES";
import { Link } from "react-router-dom";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FiX } from "react-icons/fi";

const VendorNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.navbar_wrapper}`}>
        <div className={styles.navbar}>
          <Link to="/" className={styles.logo_div}>
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
          <h6 className={styles.title}>Create a Vendor account</h6>
          <ul className={styles.links}>
            <li className={styles.link}>Shop</li>
            <li className={styles.link}>Help & Support</li>
            <Link to="/terms-of-service">
              <li className={styles.link}>Terms of Service</li>
            </Link>
          </ul>
        </div>
        <div className={styles.mobile_navbar}>
          <Link to="/" className={styles.logo_div}>
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>
          <h6 className={styles.title}>Create a Vendor account</h6>
          <RxDragHandleHorizontal
            className={styles.open_menu_icon}
            onClick={handleShowMenu}
          />
        </div>
      </div>
      {showMenu && (
        <div className={styles.dropdown_menu}>
          <FiX className={styles.close_menu_icon} onClick={handleShowMenu} />
          <ul className={styles.links}>
            <li className={styles.link}>Shop</li>
            <li className={styles.link}>Help & Support</li>
            <Link to="/terms-of-service">
              <li className={styles.link}>Terms of Service</li>
            </Link>
          </ul>
        </div>
      )}
    </section>
  );
};

export default VendorNavbar;
