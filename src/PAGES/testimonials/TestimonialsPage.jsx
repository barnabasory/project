import { Navbar, TopSnippet } from "../index";
import { Testimonial, dark_blockquote } from "../about";
import styles from "./Testimonials.module.scss";
import { customer, customer2 } from "../about";
import { Contact, Calculate, Footer } from "../../PAGES";
import { Sponsor } from "../powerService";

const TestimonialsPage = ({ name, title, testimony, profession, image }) => {
  return (
    <div>
      <TopSnippet />
      <Navbar />
      <div className={`sw ${styles.wrapper}`}>
        <div className={styles.testimonials}>
          <div className={styles.quote}>
            <img
              src={dark_blockquote}
              alt=""
              className={styles.dark_blockquote}
            />
            <h3>Testimonials</h3>
          </div>
          <p>
            We invite you to read and watch more heartwarming stories from our
            valued customers who have tried and tested our products or services.
            These real-life accounts speak volumes about how imperium is working
            hard to make a good and lasting Impact in people's lives.
          </p>
        </div>
        <div className={styles.testimonies}>
          <Testimonial
            name="Dapo Osunkoya"
            title="How I ditched diesel"
            profession="Finance Professional"
            testimony="Just imagine going downstairs at 1:00 am to pull the generator. I can’t even remember the last time I went downstairs to pull the generator. I normally would spend 60,000 monthly on fuel. "
            image={customer}
          />
          <Testimonial
            name="Mayowa Ojo"
            title="How I divorced 'NEPA'"
            profession="Product Designer"
            testimony="Just imagine going downstairs at 1:00 am to pull the generator. I can’t even remember the last time I went downstairs to pull the generator. I normally would spend 60,000 monthly on fuel. "
            image={customer2}
          />
          <Testimonial
            name="Dapo Osunkoya"
            title="How I ditched diesel"
            profession="Finance Professional"
            testimony="Just imagine going downstairs at 1:00 am to pull the generator. I can’t even remember the last time I went downstairs to pull the generator. I normally would spend 60,000 monthly on fuel. "
            image={customer}
          />
        </div>
      </div>
      <Sponsor />
      <Contact />
      <Calculate />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
