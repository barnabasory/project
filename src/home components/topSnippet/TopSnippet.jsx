import React from "react";
import "./TopSnippet.scss";
import blackBox from "../../assets/icons/black-box.svg";
const TopSnippet = () => {
  return (
    <div className="fw top-snippet-wrapper">
      <div className="tiny-text sw top-snippet">
        <p className="top-snippet-text">
          At checkout, you could take advantage of our Lease to Own financing
          option. Learn More
        </p>
        <nav>
          <ul className="top-snippet-nav">
            <li>
              <a href="#About Us">About Us</a>
            </li>
            <li>
              <a href="#Power">Power as a service</a>
            </li>
            <li>
              <a href="#seller" className="seller-login">
                Seller Login <img src={blackBox} alt="seller-login" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopSnippet;
