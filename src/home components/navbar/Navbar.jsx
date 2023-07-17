import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo.svg";
import energyNeed from "../../assets/icons/energy-green.svg";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../contexts/Context";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { setShowLogin } = useContext(CheckedCards);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const showLoginDropDown = () => {
    setShowLogin(true);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <>
      <div className={`fw ${styles["navbar-wrapper"]}`}>
        <div className={`sw ${styles.desktop_navbar}`}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={styles["energy-needs"]}>
            <img src={energyNeed} alt="" />
            <Link to="/start-calculating">
              <p className={styles["energy-title"]}>
                Calculate your Energy Needs
              </p>
            </Link>
          </div>
          <ul className={`root-small ${styles.navlinks}`}>
            <li>
              <a href="#Search">Search</a>
            </li>
            <li>
              <a href="#" onClick={showLoginDropDown}>
                My Account
              </a>
            </li>
            <li className={styles.count}>0</li>
          </ul>
        </div>
        <div className={`sw ${styles.mobile_navbar}`}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
          </Link>

          <div className={styles.mobile_menu}>
            {showMenu && (
              <div
                className={styles.mobile_wrapper}
                onClick={handleShowMenu}
              ></div>
            )}
            {!showMenu && (
              <RxDragHandleHorizontal
                size={40}
                style={{ cursor: "pointer" }}
                onClick={handleShowMenu}
                className={styles.open_menu}
              />
            )}
            {showMenu && (
              <FiX
                size={40}
                style={{ cursor: "pointer" }}
                onClick={handleShowMenu}
                className={styles.close_menu}
              />
            )}

            {showMenu && (
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
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
