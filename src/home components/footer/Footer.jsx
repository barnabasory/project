import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`fw ${styles["footer-wrapper"]}`}>
        <footer className={` sw ${styles["footer"]}`}>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className={styles["footer-link-title"]}>Company</h6>
            <Link to="/blogs">
              {" "}
              <span>Blogs</span>
            </Link>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>How to Buy and Sell on Imperium</span>
            <span>Become a Vendor</span>
            <Link to="/terms-and-conditions">
              <span>Terms & Conditions</span>
            </Link>
            <span>Privacy Policy</span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className={styles["footer-link-title"]}>Offerings</h6>
            <span>Energy Calculator</span>
            <span>Power as a Service</span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className={styles["footer-link-title"]}>Get in Touch</h6>
            <span>FAQs</span>
            <span>20, Marina, Lagos State</span>
            <span>+234 (081) 3547 3439</span>
            <span>info@imperiumng.com</span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className={styles["footer-link-title"]}>Follow Us</h6>
            <span>Can't find what you're looking for?</span>
            <button className={styles["footer-button"]}>
              Send us an Email
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
