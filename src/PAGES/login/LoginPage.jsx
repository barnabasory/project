import React from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";
import {
  sellerbadge2,
  instagram,
  facebook,
  linkedIn,
  insta,
  Navbar,
  TopSnippet,
} from "../../PAGES";

const LoginPage = () => {
  return (
    <>
      <TopSnippet />
      <Navbar />
      <section className={`sw ${styles.wrapper}`}>
        <h5 className={styles.title}>Welcome Back!</h5>
        <span className={`root-text ${styles.intruction}`}>
          Login in to your Imperium Account
        </span>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            required
            className={`root-small ${styles.input}`}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={`root-small ${styles.input}`}
          />
          <div className={styles.forgot_password}>
            <span className={styles.for_pass}>I forgot my Password</span>
            <div className={`root-small ${styles.remember_me}`}>
              <input type="checkbox" className="checkbox" /> Remember me
            </div>
          </div>
          <button className={styles.button}>Login</button>
        </form>
        <div className={styles.after_form}>
          <Link to="/signup" className={`${styles.signup}`}>
            Don't have an Account? Sign up here
          </Link>
          <div className={styles.seller}>
            <img src={sellerbadge2} alt="sellerbadge" />
            <span className={`root-small ${styles.seller_text}`}>
              Become a Seller on Imperium
            </span>
          </div>
          <div className={styles.socials}>
            <span className={`root-small ${styles.social_title}`}>
              Follow Us
            </span>
            <div className={styles.icons}>
              <img src={instagram} alt="instagram" className="icon" />
              <img src={facebook} alt="facebook" className="icon" />
              <img src={linkedIn} alt="linkedIn" className="icon" />
              <img src={insta} alt="instagram" className="icon" />
            </div>
          </div>
          <div className={styles.privacy_terms}>
            <span className={styles.privacy}>Privacy Policy</span>
            <span className={styles.terms}>Terms & Condition</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
