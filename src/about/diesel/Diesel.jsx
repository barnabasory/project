import styles from "./Diesel.module.scss";

import {
  customer,
  play_video,
  light_blockquote,
  dark_blockquote,
} from "../../PAGES/about";

const Diesel = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <h3>How I Ditched Diesel</h3>

      {/* video text and screens */}
      <div className={styles.video_text_and_screen}>
        <div className={styles.customer_info}>
          <span className={`root-text-bold ${styles.customer_name}`}>
            Dapo Osunkoya
          </span>
          <span>Finance Professional</span>
        </div>
        <div className={styles.video_text_card}>
          <img
            src={light_blockquote}
            alt="light_blockquote"
            className={styles.light_blockquote}
          />
          <div className={styles.video_text}>
            <p>
              Just imagine going downstairs at 1:00 am to pull the generator. I
              can’t even remember the last time I went downstairs to pull the
              generator. I normally would spend 60,000 monthly on fuel.{" "}
            </p>
            <span>Dapo Osunkoya</span>
          </div>
          <div className={styles.play_video}>
            <img src={play_video} alt="" className={styles.play_video_icon} />
            <small className={styles.play_video_text}>Play Video</small>
          </div>
        </div>

        <img
          src={customer}
          className={styles.video}
          alt="customer's_testimony"
        />
      </div>
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
