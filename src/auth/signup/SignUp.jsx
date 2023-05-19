import React from "react";
import styles from "./SignUp.module.scss";
import { Link } from "react-router-dom";
import { sellerbadge, instagram, facebook, linkedIn, insta } from "../../PAGES";

const SignUp = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <h5 className={styles.title}>Create an Account</h5>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="First name"
          required
          className={`root-small ${styles.input}`}
        />
        <input
          type="text"
          placeholder="Last name"
          required
          className={`root-small ${styles.input}`}
        />
        <input
          type="email"
          placeholder="Email address"
          required
          className={`root-small ${styles.input}`}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className={`root-small ${styles.input}`}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          required
          className={`root-small ${styles.input}`}
        />
        <button className={styles.button}>Create your Account</button>
      </form>
      <div className={styles.after_form}>
        <div className={styles.login_condition}>
          <Link to="/login" className={`root-small ${styles.login}`}>
            Signed up Already? Log in here
          </Link>
          <span className={`root-small ${styles.condition}`}>
            By creating this account, you agree to the Terms & conditions,
            privacy statement and our Privacy Policies
          </span>
        </div>
        <div className={styles.seller}>
          <img src={sellerbadge} alt="sellerbadge" />
          <span className={`root-small ${styles.seller_text}`}>
            Become a Seller on Imperium
          </span>
        </div>
        <div className={styles.socials}>
          <span className={`root-small ${styles.social_title}`}>Follow Us</span>
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
  );
};

export default SignUp;
