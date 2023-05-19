import styles from "./AfterHero.module.scss";

const AfterHero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {" "}
        <h4 className={styles.title}>
          Simplifying Access to Affordable and Reliable Energy
        </h4>
        <p>
          At Imperium, we are creating an ecosystem where the consumers
          (individuals and companies) and the service providers can interact
          seamlessly to support equal access to affordable energy.
        </p>
      </div>
    </div>
  );
};

export default AfterHero;
