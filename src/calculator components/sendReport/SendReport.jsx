import styles from "./SendReport.module.scss";
import { useState } from "react";
import { arrowDown2 } from "../../PAGES";
import axios from "axios";

const SendReport = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const data = {
      name: value.name,
      email: value.email,
    };
    axios.post("http://localhost:5000/get-report", data);
  };
  return (
    <div className={styles.form}>
      <div className={styles.request}>
        <h4 className={styles["request-title"]}>
          Send my full energy need report
        </h4>
        <p className={` request_text ${styles["root-small"]}`}>
          Dive deeper into your results, by requesting your customized energy
          need report, see tailored suggestions about the best products for you,
          Learn about how you can save energy in your home.
        </p>
      </div>
      <form onSubmit={sendEmail}>
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
          placeholder="000-0000-000"
          className={`root-small tel ${styles.input_tel}`}
        />
        <div className={styles.country_code}>
          <select className={styles.code}>
            <option className={styles.first_code}>+234 </option>
            <option> +244 </option>
            <option> +229 </option>
            <option>+267 </option>
            <option> +238</option>
          </select>
        </div>
        <img
          src={arrowDown2}
          alt="arrow-down"
          className={styles.arrow_down}
          onClick={() => setShowOptions(!showOptions)}
        />
        <a
          href={`mailto:${value.email}`}
          data-subject="A strange email"
          data-body="This email is for me with me also in cc and in bcc"
        >
          <button className={styles.button} type="submit">
            Send my Full Report
          </button>
        </a>
      </form>
      <div className={styles.snippet}>
        <div className={`root-small ${styles["snippet-a"]}`}>
          <input type="checkbox" />
          Include a 40 page report on energy needs on Africa
        </div>
        <div className={`tiny-text ${styles["snippet-b"]}`}>
          By adding your email address and clicking on subscribe, you agree to
          receive marketing emails from Imperium NG. You can unsubscribe at any
          time.
        </div>
      </div>
    </div>
  );
};

export default SendReport;
