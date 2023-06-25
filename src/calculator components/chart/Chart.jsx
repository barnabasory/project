import React, { useState, useEffect, useRef } from "react";
import styles from "./Chart.module.scss";
import { CheckedCards } from "../../Context";
import { useContext } from "react";

const Chart = ({ chartData }) => {
  const [monthYear, setMonthYear] = useState(true);
  const [monthlyConsumption, setMonthlyConsumption] = useState(0);

  const { checkedArray } = useContext(CheckedCards);
  const pieRef = useRef(null);

  useEffect(() => {
    const total = checkedArray.reduce((acc, item) => {
      return acc + (item.count + 1) * item.wattage * item.hours;
    }, 0);
    const monthlyConsumption = total * 30;
    setMonthlyConsumption(monthlyConsumption);
  }, [checkedArray]);

  useEffect(() => {
    const savedMonthlyConsumption = JSON.parse(
      localStorage.getItem("monthlyConsumption")
    );
    if (savedMonthlyConsumption) {
      setMonthlyConsumption(savedMonthlyConsumption);
    }
  }, []);

  useEffect(() => {
    const randomHexColorCode = () => {
      return "#" + Math.random().toString(16).slice(2, 8);
    };
    const canvas = pieRef.current;
    let ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 300;
    let total = checkedArray.reduce((acc, curr) => {
      return acc + curr.wattage * curr.hours * (curr.count + 1);
    }, 0);
    let startAngle = 0;
    let radius = 100;
    let cx = canvas.width / 2;
    let cy = canvas.height / 2;

    checkedArray.forEach((item) => {
      ctx.fillStyle = randomHexColorCode();
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = "#000";
      ctx.beginPath();
      const perItemTotal = item.wattage * item.hours * (item.count + 1);
      let endAngle = (perItemTotal / total) * (Math.PI * 2) + startAngle;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle, false);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();

      ctx.beginPath();
      ctx.font = "20px";
      ctx.textAlign = "center";
      ctx.fillStyle = "rebeccapurple";

      let theta = (startAngle + endAngle) / 2;
      let deltaY = Math.sin(theta) * 1 * radius;
      let deltaX = Math.cos(theta) * 1 * radius;
      ctx.fillText(item.name, deltaX, deltaY);
      ctx.closePath();

      startAngle = endAngle;
    });
  });

  const toggleConsumption = () => {
    setMonthYear(!monthYear);
  };

  return (
    <>
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

        <canvas ref={pieRef}></canvas>
      </div>
    </>
  );
};

export default Chart;
