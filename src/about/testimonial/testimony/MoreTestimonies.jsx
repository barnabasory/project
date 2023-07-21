import { dark_blockquote } from "../../../PAGES/about";
import styles from "./MoreTestimonies.module.scss";
import { Link } from "react-router-dom";
const MoreTestimonies = () => {
  return (
    <div className={`fw ${styles.wrapper}`}>
      {/* testimonials */}
      <div className={`sw ${styles.testimonials}`}>
        <div className={styles.quote}>
          <img
            src={dark_blockquote}
            alt=""
            className={styles.dark_blockquote}
          />
          <h6>More Testimonials</h6>
        </div>
        <p>
          We invite you to read and watch more heartwarming stories from our
          valued customers who have tried and tested our products or services.
          These real-life accounts speak volumes about how imperium is working
          hard to make a good and lasting Impact in people's lives.
        </p>
        <Link to="/testimonials">
          <button className={`root-small-bold ${styles.testimonial_button}`}>
            View all Testimonials
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoreTestimonies;
