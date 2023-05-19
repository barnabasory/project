import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import logo from "../../assets/icons/logo.svg";
import energyNeed from "../../assets/icons/energy-green.svg";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CheckedCards } from "../../Context";
import { Login } from "../../PAGES";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const { showLogin, setShowLogin } = useContext(CheckedCards);

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
        <div className={`sw ${styles.navbar}`}>
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
          <div>
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
          <div className={styles["mobile-menu"]}>
            {showMenu && (
              <div
                className={styles["menu-wrapper"]}
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
