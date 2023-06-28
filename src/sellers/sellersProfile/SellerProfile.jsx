import styles from "./SellerProfile.module.scss";
import { arrowLeft } from "../../PAGES";
import { Link } from "react-router-dom";
import { useCheckBoxContext } from "../../contexts/CheckboxContext";

const SellerProfile = () => {
  const { toggleCheckBox, checkBoxRef } = useCheckBoxContext();

  console.log(checkBoxRef.current);
  return (
    <section className={`sw ${styles.wrapper}`}>
      <Link to="/vendor-store-profile" className={styles.previous_page}>
        <img src={arrowLeft} alt="Go Back" className={styles.arrowLeft} />
        <span className={`root-text ${styles.go_back}`}>Back</span>
      </Link>
      <div className={styles.links}>
        <div className={styles.first_link}>
          <div className={styles.first_number}>1</div>
          <h6>Store Profile</h6>
        </div>
        <div className={styles.second_link}>
          <div className={styles.second_number}>2</div>
          <h6>Seller Profile</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>3</div>
          <h6>Deposit Method</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>4</div>
          <h6>Summary</h6>
        </div>
      </div>

      <form className={styles.seller_form}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <span className={`tiny-text ${styles.email_info}`}>
          Your account will be linked to this email address. we will also use it
          to send all our communications.
        </span>
        <input
          type="number"
          className={styles.phone_iput}
          placeholder="000 0000 000"
        />
        <span className={`tiny-text ${styles.phone_info}`}>
          When we need to contact you urgently, this is the number we will call.
          please make sure it’s an active number
        </span>
        <input type="password" placeholder="Password" />
        <span className={`tiny-text ${styles.password_info}`}>
          At least 8 characters containing a capital letter, a lower letter and
          a numeric character, if you’re unsure, please use our password
          generator
        </span>
        <input type="password" placeholder="Repeat Password" />
        <div className={`tiny-text ${styles.terms_conditions}`}>
          <input type="checkbox" ref={checkBoxRef} onInput={toggleCheckBox} />
          <span className={styles.terms_text}>
            I have read and accepted the ImperiumNG Seller Contract
          </span>
        </div>
        <Link to="/vendor-deposit-method">
          <button className={styles.button}>Continue</button>
        </Link>
      </form>
    </section>
  );
};

export default SellerProfile;
