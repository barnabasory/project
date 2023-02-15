import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={`fw ${styles["footer-wrapper"]}`}>
        <footer className={` sw ${styles["footer"]}`}>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className={styles["footer-link-title"]}>Company</h6>
            <span>Blogs</span>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>How to Buy and Sell on Imperium</span>
            <span>Become a Vendor</span>
            <span>Terms & Conditions</span>
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
