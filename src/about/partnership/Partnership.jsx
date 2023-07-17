import styles from "./Partnership.module.scss";

import { homes, nigerian_states, partnership } from "../../PAGES";

const Partnership = () => {
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.container}`}>
        <div className={styles.heading}>
          <h4>
            <span className={styles.partnership}>Partnership: </span> Creating a
            Sustainable Future
          </h4>
          <span className={styles.info}>
            Our platform is open to vendors in the renewable energy sector.
          </span>
        </div>
        <div className={styles.partners}>
          <div className={styles.partner}>
            <img src={partnership} alt="partnership" className={styles.icon} />
            <div>
              <h2 className={styles.figure}>38</h2>
              <h6 className={styles.title}>Partnership</h6>
              <p className={`root-text ${styles.text}`}>
                Our platform is open to vendors in the renewable energy sector.
              </p>
            </div>
          </div>
          <div className={styles.partner}>
            <img src={homes} alt="partnership" className={styles.icon} />
            <div>
              <h2 className={styles.figure}>1000+</h2>
              <h6 className={styles.title}>Homes</h6>
              <p className={`root-text ${styles.text}`}>
                Our platform is open to vendors in the renewable energy sector.
              </p>
            </div>
          </div>
          <div className={styles.partner}>
            <img
              src={nigerian_states}
              alt="partnership"
              className={styles.icon}
            />
            <div>
              <h2 className={styles.figure}>36</h2>
              <h6 className={styles.title}>Nigerian States</h6>
              <p className={`root-text ${styles.text}`}>
                We ensure that demands can be made across the nation with fast
                and reliable delivery systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
