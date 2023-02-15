import { useState, useEffect } from "react";
import "./Navbar.scss";
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
      <div className="fw navbar-wrapper">
        <div className=" navbar sw">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="energy-needs">
            <img src={energyNeed} alt="" />
            <Link to="/start-calculating">
              <p className="energy-title">Calculate your Energy Needs</p>
            </Link>
          </div>
          <div>
            <ul className="navlinks root-small">
              <li>
                <a href="#Search">Search</a>
              </li>
              <li>
                <a href="#My-account">My Account</a>
              </li>
              <li className="count">0</li>
            </ul>
          </div>

          <div className="mobile-menu">
            {showMenu && (
              <div className="menu-wrapper" onClick={handleShowMenu}></div>
            )}
            {!showMenu && (
              <RxDragHandleHorizontal
                size={40}
                style={{ cursor: "pointer" }}
                onClick={handleShowMenu}
              />
            )}
            {showMenu && (
              <FiX
                size={40}
                style={{ cursor: "pointer" }}
                onClick={handleShowMenu}
              />
            )}
            <div>
              {showMenu && (
                <>
                  <ul className="dropdown">
                    <li>
                      <a href="#Search">Search</a>
                    </li>
                    <li>
                      <a href="#My-account">My Account</a>
                    </li>
                    <li>
                      <a href="#My-account">Calculate Your Energy Needs</a>
                    </li>
                    <li className="mobile-count">0</li>
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
