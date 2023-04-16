import React, { useState, useEffect } from "react";
import styles from "./Chart.module.scss";
import { CheckedCards } from "../../Context";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { arrowDown2, ChartLoader } from "../../PAGES";
import emailjs from "@emailjs/browser";

const Chart = ({ chartData }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [monthYear, setMonthYear] = useState(true);
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const { checkedArray, loading, setLoading } = useContext(CheckedCards);
  console.log(checkedArray);

  const [userData] = useState({
    labels: checkedArray.map((data) => data.name),
    datasets: [
      {
        label: "%",
        data: checkedArray.map(
          (data) => `${(data.wattage * data.hours * (data.count + 1)) / 100}`
        ),
      },
    ],
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const total = checkedArray.reduce((acc, item) => {
      return acc + (item.count + 1) * item.wattage * item.hours;
    }, 0);

    const templateParams = {
      email: value.email,
      name: value.name,
      subject: `Your monthly use is ${total * 30} and your yearly use is ${
        total * 30 * 12
      }`,
    };

    emailjs
      .send(
        "service_qr2skm6",
        "template_7w1kzkl",
        templateParams,
        "4s6BipyV-2FaHmzWb"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    setValue({
      name: "",
      email: "",
      number: "",
    });
  };

  useEffect(() => {
    const total = checkedArray.reduce((acc, item) => {
      return acc + (item.count + 1) * item.wattage * item.hours;
    }, 0);
    setMonthlyConsumption(total * 30);
  }, [checkedArray]);

  const toggleConsumption = () => {
    setMonthYear(!monthYear);
  };
  return (
    <>
      {loading ? (
        <ChartLoader />
      ) : (
        <section className={`fw ${styles.wrapper}`}>
          <div className={`sw ${styles.content}`}>
            <div className={styles.chart}>
              <span className={styles.title}>
                YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
              </span>
              <h3>
                {monthYear
                  ? monthlyConsumption.toLocaleString()
                  : monthlyConsumption * 12}
                {` kwH`}
              </h3>
              <div className={styles.toggle}>
                <span className={`root-small ${styles.month}`}>Per Month</span>
                <div
                  className={styles.toggle_button}
                  onClick={toggleConsumption}
                >
                  <div
                    className={
                      monthYear ? styles.toggle_ball : styles.toggle_ball_moved
                    }
                  ></div>
                </div>
                <span className={`root-small ${styles.year}`}>Per Year</span>
              </div>

              <Pie data={userData} />
            </div>
            <div className={styles.form}>
              <div className={styles.request}>
                <h4 className={styles["request-title"]}>
                  Send my full energy need report
                </h4>
                <p className={` request_text ${styles["root-small"]}`}>
                  Dive deeper into your results, by requesting your customized
                  energy need report, see tailored suggestions about the best
                  products for you, Learn about how you can save energy in your
                  home.
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
                  By adding your email address and clicking on subscribe, you
                  agree to receive marketing emails from Imperium NG. You can
                  unsubscribe at any time.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Chart;
