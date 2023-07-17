import styles from "./PowerService.module.scss";
import { PowerForm } from "../PAGES/powerService";

const PowerService = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.hero_text}>
        <h3>
          <span className={styles.power}>Power</span> as a service
        </h3>
        <div className={`root-text ${styles.text}`}>
          At Imperium, we take care of all your power and energy concerns by
          empowering your homes, stores and businesses with our clean energy
          solutions. By selecting our “Power as a Service” option, you are
          guaranteed clean and reliable power without the burden and hassle of
          installing, maintaining or even owning a solar/power solution. Begin
          to enjoy power today at zero upfront cost. You only pay an agreed
          tariff based on the solution deployed.
        </div>
      </div>
      <PowerForm />
    </section>
  );
};

export default PowerService;
