import React, { useState } from "react";
import styles from "./Chart.module.scss";

const Chart = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return (
    <section className={`fw ${styles.wrapper}`}>
      <div className={`sw ${styles.content}`}>
        <div className={styles.chart}>
          <span className={styles.title}>
            YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
          </span>
          <h3>585 KWH</h3>
          <div className={styles.toggle}>
            <span className={`root-small ${styles.month}`}>Per Month</span>
            <div className={styles["toggle-button"]}>
              <div className={styles["toggle-ball"]}></div>
            </div>
            <span className={`root-small ${styles.year}`}>Per Year</span>
          </div>

          <div className={styles.ball}></div>
        </div>
        <div className={styles.form}>
          <div className={styles.request}>
            <h4 className={styles["request-title"]}>
              Send my full energy need report
            </h4>
            <p className={styles["root-small"]}>
              Dive deeper into your results, by requesting your customized
              energy need report, see tailored suggestions about the best
              products for you, Learn about how you can save energy in your
              home.
            </p>
          </div>
          <form>
            <input
              type="text"
              required
              value={value.name}
              name="name"
              onChange={handleForm}
              placeholder="Full Name"
              className={`root-small ${styles.input}`}
            />
            <input
              type="text"
              required
              value={value.email}
              name="email"
              onChange={handleForm}
              placeholder="Email Address"
              className={`root-small ${styles.input}`}
            />
            <input
              type="tel"
              required
              value={value.number}
              name="number"
              onChange={handleForm}
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}"
              placeholder="000 0000 000"
              className={`root-small tel ${styles.input}`}
            />

            <button className={styles.button}>Send my Full Report</button>
          </form>
          <div className={styles.snippet}>
            <div className={`root-small ${styles["snippet-a"]}`}>
              <input type="checkbox" />
              Include a 40 page report on energy needs on Africa
            </div>
            <div className={`tiny-text ${styles["snippet-b"]}`}>
              By adding your email address and clicking on subscribe, you agree
              to receive marketing emails from Imperium NG. You can unsubscribe
              at any time.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
