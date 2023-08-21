import styles from "./CartHeader.module.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const CartHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.logo_div}>
          <img src={logo} alt="imperium_logo" className={styles.logo} />
        </div>
        <h6>Your Cart (5 items)</h6>
        <div className={styles.links}>
          <Link className={styles.link}>Shop</Link>
          <Link className={styles.link}>Help & Support</Link>
          <Link className={styles.link}>Terms of Service</Link>
        </div>
        <div className={styles.open_menu_icon_div}>
          <RxDragHandleHorizontal
            className={styles.open_menu_icon}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <div className={styles.close_menu}>
            <FiX
              className={styles.close_menu_icon}
              onClick={() => setShowMenu(!showMenu)}
            />

            <div className={styles.mobile_links}>
              <Link className={styles.link}>Shop</Link>
              <Link className={styles.link}>Help & Support</Link>
              <Link className={styles.link}>Terms of Service</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartHeader;
