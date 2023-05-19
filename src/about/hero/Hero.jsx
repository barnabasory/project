import styles from "./Hero.module.scss";
import { about_hero } from "../../PAGES";

const Hero = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={` ${styles.container}`}>
        <div className={`${styles.left}`}>
          <div className={styles.hero_text}>
            <h2 className={styles.a_text}>Democratising Energy </h2>
            <h2 className={styles.b_text}>to make it accessible.</h2>
          </div>
          <div className={`large-paragraph ${styles.hero_text}`}>
            Whether you are a consumer who wants to save on energy bills and
            enjoy a little more power/energy or a Renewable Energy Solutions
            provider looking to grow your business, Imperium has a tailor-made
            solution for you.
          </div>
          <button className={styles.button}>Browse Products</button>
        </div>
      </div>
      <img src={about_hero} alt="about_hero" className={`fw ${styles.image}`} />
    </section>
  );
};

export default Hero;
