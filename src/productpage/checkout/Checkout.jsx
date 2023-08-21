import styles from "./Checkout.module.scss";
import { arrowDown } from "../../PAGES/index";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className={styles.wrapper}>
      <h5>₦3,400,000</h5>
      <div className={styles.representative_div}>
        <span className={`tiny-text ${styles.require_a_loan}`}>
          Require a loan or need help with your choice{" "}
        </span>
        <button className={styles.rep_button}>
          Speak with a Representative{" "}
        </button>
      </div>
      <div className={styles.customer_action}>
        <span className={`tiny-text ${styles.your_choice}`}>
          Sure about about your choice?
        </span>
        <Link to="/your-cart">
          <button className={styles.checkout_button}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
      <div className={styles.line_break}></div>
      <div className={styles.location_div}>
        <div className={styles.location_title}>
          <span className={`root_small_bold ${styles.select_location}`}>
            Select Your Location
          </span>
          <span className={`tiny-text ${styles.details}`}>Details</span>
        </div>
        <img src={arrowDown} alt="arrow_down" className={styles.select_arrow} />
        <select name="nigeria_states" className={styles.select_options}>
          <option value="Abia">Abia</option>
          <option value="Adamawa">Adamawa</option>
          <option value="Akwa Ibom">Akwa Ibom</option>
          <option value="Anambra">Anambra</option>
          <option value="Bauchi">Bauchi</option>
          <option value="Bayelsa">Bayelsa</option>
          <option value="Benue">Benue</option>
          <option value="Borno">Borno</option>
          <option value="Cross River">Cross River</option>
          <option value="Delta">Delta</option>
          <option value="Ebonyi">Ebonyi</option>
          <option value="Edo">Edo</option>
          <option value="Ekiti">Ekiti</option>
          <option value="Enugu">Enugu</option>
          <option value="Gombe">Gombe</option>
          <option value="Imo">Imo</option>
          <option value="Jigawa">Jigawa</option>
          <option value="Kaduna">Kaduna</option>
          <option value="Kano">Kano</option>
          <option value="Katsina">Katsina</option>
          <option value="Kebbi">Kebbi</option>
          <option value="Kogi">Kogi</option>
          <option value="Kwara">Kwara</option>
          <option value="Lagos">Lagos</option>
          <option value="Nasarawa">Nasarawa</option>
          <option value="Niger">Niger</option>
          <option value="Ogun">Ogun</option>
          <option value="Ondo">Ondo</option>
          <option value="Osun">Osun</option>
          <option value="Oyo">Oyo</option>
          <option value="Plateau">Plateau</option>
          <option value="Rivers">Rivers</option>
          <option value="Sokoto">Sokoto</option>
          <option value="Taraba">Taraba</option>
          <option value="Yobe">Yobe</option>
          <option value="Zamfara">Zamfara</option>
          <option value="Federal Capital Territory">
            Federal Capital Territory (FCT)
          </option>
        </select>
        <span className={`tiny-text ${styles.shipping_cost}`}>
          + Aprox shipping cost from ₦4000 to Lagos
        </span>
        <div className={styles.shipping_info}>
          <div className={styles.shipping_description}>
            <span className={`tiny-text ${styles.shipping_info}`}>
              Average shipping & delivery times on most products is 5 -10
              business days
            </span>
            <span className={`tiny-text ${styles.shipping_date}`}>
              Delivery: <b>January 17 - 26</b>
            </span>
          </div>
          <span className={`tiny-text ${styles.details}`}>Details</span>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
