import styles from "./Solutions.module.scss";
import {
  solar_home,
  solar_appliance,
  mini_grid,
  industrial_solution,
  bullet,
} from "../../PAGES";

const Solutions = () => {
  return (
    <section className={`sw ${styles.wrapper}`}>
      <div className={styles.left}>
        <h4>
          <span className={styles.solutions}>Solutions: </span>
          Flexible Purchase Plan that Works For You
        </h4>
        <div className={styles.paragraphs}>
          <div className={styles.paragraph}>
            <img src={bullet} alt="bullet" />
            <p className={`large-paragraph ${styles.text}`}>
              Our Lease to Own model offers you the option of paying in
              instalments over a fixed period and owning the products after
              paying off your final installment.
            </p>
          </div>
          <div className={styles.paragraph}>
            <img src={bullet} alt="bullet" />
            <p className={`large-paragraph ${styles.text}`}>
              With Outright Purchase, you can instantly buy and own renewable
              energy products.
            </p>
          </div>
          <div className={styles.paragraph}>
            <img src={bullet} alt="bullet" />
            <p className={`large-paragraph ${styles.text}`}>
              Power as a Service is an energy subscription model that lets you
              enjoy electricity without purchasing infrastructure similar to
              PHCN where you pay for the power consumed.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={solar_home} alt="Solar Appliances" />
            <div className={styles.card_text}>
              <h5>Solar Home Systems</h5>
              <p className={`root-text ${styles.info}`}>
                Enjoy uninterrupted power supply for households and residential
                areas.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={solar_appliance} alt="solar_appliance" />
            <div className={styles.card_text}>
              <h5>Solar Home Systems</h5>
              <p className={`root-text ${styles.info}`}>
                Enjoy energy with our innovation solar appliances designed to
                meet basic energy needs.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={mini_grid} alt="Mini Grid" />
            <div className={styles.card_text}>
              <h5>Mini Grid</h5>
              <p className={`root-text ${styles.info}`}>
                Empower clusters and communities with utility scale systems and
                distributed energy.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <img src={industrial_solution} alt="industrial_solution" />
            <div className={styles.card_text}>
              <h5>Industrial Solutions</h5>
              <p className={`root-text ${styles.info}`}>
                Energy solutions for business corporate organizations and for
                other energy intensive activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
