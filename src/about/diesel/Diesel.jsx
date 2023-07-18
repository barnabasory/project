import styles from "./Diesel.module.scss";
import { Testimonial } from "../../PAGES/about";
import { dark_blockquote, customer } from "../../PAGES/about";
import { Link } from "react-router-dom";

const Diesel = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      {/* video text and screens */}
      <Testimonial
        name="Dapo Osunkoya"
        title="How I ditched diesel"
        profession="Finance Professional"
        testimony="Just imagine going downstairs at 1:00 am to pull the generator. I can’t even remember the last time I went downstairs to pull the generator. I normally would spend 60,000 monthly on fuel. "
        image={customer}
      />
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
        <Link to="/testimonials">
          <button className={`root-small-bold ${styles.testimonial_button}`}>
            View all Testimonials
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Diesel;
