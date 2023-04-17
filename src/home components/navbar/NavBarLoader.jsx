import { useState, useEffect } from "react";
import styles from "./NavbarLoader.module.scss";
import logo from "../../assets/icons/logo.svg";
import energyNeed from "../../assets/icons/energy-green.svg";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);
  return (
    <>
      <div className={`fw ${styles["navbar-wrapper"]}`}>
        <div className={`sw ${styles.navbar}`}>
          <div
            className={`${styles.logo} skeleton-loading`}
            style={{ width: "180px", height: "40px" }}
          ></div>
          <div
            className={`skeleton-loading ${styles["energy-needs"]}`}
            style={{ width: "300px", height: "40px" }}
          >
            <Link to="/start-calculating">
              <p className={`${styles["energy-title"]}`}>
                Calculate your Energy Needs
              </p>
            </Link>
          </div>
          <div>
            <ul
              className={`root-small skeleton-loading ${styles.navlinks}`}
              style={{ width: "180px", height: "40px" }}
            >
              <li>
                <a href="#Search"></a>
              </li>
              <li>
                <a href="#My-account"></a>
              </li>
              {/* <li className={styles.count}></li> */}
            </ul>
          </div>
          <div className={styles["mobile-menu"]}>
            {showMenu && (
              <div
                className={styles["menu-wrapper"]}
                onClick={handleShowMenu}
              ></div>
            )}
            {!showMenu && (
              <div
                size={40}
                style={{ cursor: "pointer", width: "50px", height: "40px" }}
                onClick={handleShowMenu}
                className={`skeleton-loading ${styles.open_menu}`}
              ></div>
            )}
            {showMenu && (
              <div
                size={40}
                style={{ cursor: "pointer", width: "50px", height: "40px" }}
                onClick={handleShowMenu}
                className={`skeleton-loading ${styles.close_menu}`}
              ></div>
            )}
            <div>
              {showMenu && (
                <>
                  <ul className={styles.dropdown}>
                    <li>
                      <a href="#Search">Search</a>
                    </li>
                    <li>
                      <a href="#My-account">My Account</a>
                    </li>
                    <li>
                      <a href="#My-account">Calculate Your Energy Needs</a>
                    </li>
                    <li className={styles["mobile-count"]}>0</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
