import styles from "./Diesel.module.scss";
import { Testimonial } from "../../PAGES/about";

import { dark_blockquote } from "../../PAGES/about";

const Diesel = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      {/* video text and screens */}
      <Testimonial />
      {/* testimonials */}
      <div className={styles.testimonials}>
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
        <button className={`root-small-bold ${styles.testimonial_button}`}>
          View all Testimonials
        </button>
      </div>
    </section>
  );
};

export default Diesel;
