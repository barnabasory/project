import React, { useState, useEffect } from "react";
import styles from "./Chart.module.scss";
import { CheckedCards } from "../../Context";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import emailjs from "@emailjs/browser";

const Chart = ({ chartData }) => {
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
  const { checkedArray } = useContext(CheckedCards);
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
      <section className={`fw ${styles.wrapper}`}>
        <div className={`sw ${styles.content}`}>
          <div className={styles.chart}>
            <span
              className={`skeleton-loading ${styles.title}`}
              style={{ color: "transparent" }}
            >
              YOUR AVERAGE ENERGY CONSUMPTION PER MONTH IS
            </span>
            <h3
              style={{ color: "transparent" }}
              className={styles["skeleton-loading"]}
            >
              {monthYear
                ? monthlyConsumption.toLocaleString()
                : monthlyConsumption * 12}
              {` kwH`}
            </h3>
            <div className={`skeleton-loading ${styles.toggle}`}>
              <span
                className={`root-small ${styles.month}`}
                style={{ color: "transparent" }}
              >
                Per Month
              </span>
              <div
                className={styles.toggle_button}
                onClick={toggleConsumption}
                style={{ visibility: "hidden" }}
              >
                <div
                  className={` skeleton-loading ${
                    monthYear ? styles.toggle_ball : styles.toggle_ball_moved
                  }`}
                  style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <span
                className={`root-small skeleton-loading ${styles.year}`}
                style={{ color: "transparent", visibility: "hidden" }}
              >
                Per Year
              </span>
            </div>

            <Pie data={userData} />
          </div>
          <div className={styles.form}>
            <div className={styles.request}>
              <h4
                className={`skeleton-loading ${styles["request-title"]}`}
                style={{ color: "transparent", maxWidth: "80%" }}
              >
                Send my full energy need report
              </h4>
              <p
                className={` request_text skeleton-loading ${styles["root-small"]}`}
                style={{ color: "transparent" }}
              >
                Dive deeper into your results, by requesting your customized
                energy need report, see tailored suggestions about the best
                products for you, Learn about how you can save energy in your
                home.
              </p>
            </div>
            <form onSubmit={sendEmail}>
              <input
                className={`root-small skeleton-loading ${styles.input}`}
              />
              <input
                className={`root-small skeleton-loading ${styles.input}`}
              />
              <input
                className={`root-small skeleton-loading ${styles.input}`}
              />

              <button
                className={`skeleton-loading ${styles.button}`}
                style={{ color: "transparent" }}
              >
                Send my Full Report
              </button>
            </form>
            <div className={styles.snippet}>
              <div
                className={`root-small skeleton-loading ${styles["snippet-a"]}`}
                style={{ color: "transparent" }}
              >
                Include a 40 page report on energy needs on Africa
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chart;
