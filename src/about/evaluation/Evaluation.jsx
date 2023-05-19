import styles from "./Evaluation.module.scss";
import { panel1, panel2, panel3 } from "../../PAGES";

const Evaluation = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <h5>
          <span className={styles.evaluation}>Evaluation: </span> Energy Audits
          For Everyone
        </h5>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={panel3} alt="solar panel" className={styles.icon} />
            <div className={styles.card_text}>
              <h5>Energy Calculator</h5>
              <span className={`root-text ${styles.instruction}`}>
                Calculate the energy consumption for your home, business or
                community.
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <img src={panel2} alt="solar panel" className={styles.icon} />
            <div className={styles.card_text}>
              <h5>Save Power</h5>
              <span className={`root-text ${styles.instruction}`}>
                Calculate the energy consumption for your home, business or
                community.
              </span>
            </div>
          </div>
          <div className={styles.card}>
            <img src={panel1} alt="solar panel" className={styles.icon} />
            <div className={styles.card_text}>
              <h5>Evaluation</h5>
              <span className={`root-text ${styles.instruction}`}>
                Calculate the energy consumption for your home, business or
                community.
              </span>
            </div>
          </div>
        </div>
        <button className={styles.button}>Make a Request</button>
      </div>
    </section>
  );
};

export default Evaluation;
