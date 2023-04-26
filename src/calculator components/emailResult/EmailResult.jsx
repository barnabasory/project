import React, { useState, useEffect } from "react";
import styles from "./EmailResult.module.scss";
import { CheckedCards } from "../../Context";
import { useContext } from "react";
import { Pie } from "react-chartjs-2";
import emailjs from "@emailjs/browser";
import PieChart from "../PieChart/PieChart";

const EmailResult = ({ chartData }) => {
  const [monthYear, setMonthYear] = useState(true);
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);
  const [value, setValue] = useState({
    name: "",
    email: "",
    number: "",
  });

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

  const total = checkedArray.reduce((acc, item) => {
    return acc + (item.count + 1) * item.wattage * item.hours;
  }, 0);
  const templateParams = {
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
              <div className={styles.toggle_button} onClick={toggleConsumption}>
                <div
                  className={
                    monthYear ? styles.toggle_ball : styles.toggle_ball_moved
                  }
                ></div>
              </div>
              <span className={`root-small ${styles.year}`}>Per Year</span>
            </div>

            <p>{total}</p>

            <p>{templateParams.subject}</p>

            <Pie data={userData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailResult;
