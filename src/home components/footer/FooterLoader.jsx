import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <div
        className={`fw ${styles["footer-wrapper"]}`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <footer className={` sw ${styles["footer"]}`}>
          <div className={` ${styles["footer-links"]}`}>
            <h6
              className={`skeleton-loading ${styles["footer-link-title"]}`}
              style={{ color: "transparent" }}
            >
              Company
            </h6>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Blogs
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              About Us
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Contact Us
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              How to Buy and Sell on Imperium
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Become a Vendor
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Terms & Conditions
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Privacy Policy
            </span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6
              className={` skeleton-loading ${styles["footer-link-title"]}`}
              style={{ color: "transparent" }}
            >
              Offerings
            </h6>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Energy Calculator
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Power as a Service
            </span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6
              className={` skeleton-loading ${styles["footer-link-title"]}`}
              style={{ color: "transparent" }}
            >
              Get in Touch
            </h6>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              FAQs
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              20, Marina, Lagos State
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              +234 (081) 3547 3439
            </span>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              info@imperiumng.com
            </span>
          </div>
          <div className={` ${styles["footer-links"]}`}>
            <h6 className="skeleton-loading" style={{ color: "transparent" }}>
              Follow Us
            </h6>
            <span className="skeleton-loading" style={{ color: "transparent" }}>
              Can't find what you're looking for?
            </span>
            <button
              className={`skeleton-loading ${styles["footer-button"]}`}
              style={{ color: "transparent" }}
            >
              Send us an Email
            </button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
