import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import {
  TopSnippet,
  Navbar,
  BgImg,
  HomeCards,
  BestSeller,
  Stack,
  Contact,
  Calculate,
  Footer,
  LoginSlide,
} from "../index";
import HomeLoader from "./HomeLoader";
import { MoreTestimonies, Testimonial } from "../about";
import { customer } from "../about";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      <div className={`cc ${styles.home_page}`}>
        <TopSnippet />
        <Navbar />
        <BgImg />
        <HomeCards />
        <BestSeller />
        <Stack />
        <div className={`fw ${styles.testimonial_wrapper}`}>
          <div className={styles.testimonial}>
            <Testimonial
              name="Dapo Osunkoya"
              title="How I ditched diesel"
              profession="Finance Professional"
              testimony="Just imagine going downstairs at 1:00 am to pull the generator. I can’t even remember the last time I went downstairs to pull the generator. I normally would spend 60,000 monthly on fuel. "
              image={customer}
            />
          </div>
        </div>
        <div style={{ paddingBottom: "70px" }}>
          <MoreTestimonies />
        </div>
        <Contact />
        <Calculate />
        <Footer />
        <LoginSlide />
      </div>
    </>
  );
};

export default Home;
