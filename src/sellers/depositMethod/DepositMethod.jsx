import styles from "./DepositMethod.module.scss";
import { arrowLeft, arrowDown } from "../../PAGES";
import { Link } from "react-router-dom";

const DepositMethod = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <Link to="/vendor-seller-profile" className={styles.previous_page}>
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
        <div className={styles.third_link}>
          <div className={styles.third_number}>3</div>
          <h6>Deposit Method</h6>
        </div>
        <div className={styles.link}>
          <div className={styles.number}>4</div>
          <h6>Summary</h6>
        </div>
      </div>

      <form className={styles.seller_form}>
        <input type="text" placeholder="Account Holder’s Name" />
        <input type="text" placeholder="Account Number" />
        <img src={arrowDown} alt="arrow_down" className={styles.arrowDown} />
        <select name="" id="" className={styles.branches}>
          <option value="" readonly>
            Sterling Bank Branch
          </option>
          <option value="">AAAA</option>
          <option value="">AAAA</option>
          <option value="">AAAA</option>
        </select>
        <input
          type="number"
          className={styles.phone_iput}
          placeholder="000 0000 000"
        />

        <span className={`tiny-text ${styles.phone_info}`}>
          Enter the Phone number associated with this Sterling bank account
        </span>
        <Link to="/summary">
          <button className={styles.button}>Continue</button>
        </Link>
      </form>
    </section>
  );
};

export default DepositMethod;
