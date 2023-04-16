import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const PieChart = () => {
  const { counts } = useContext(CheckedCards);
  const [userData, setUserData] = useState({
    labels: counts.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: counts.map((data) => data.wattage),
      },
    ],
  });
  return (
    <div>
      <PieChart chartData={userData} />
    </div>
  );
};

export default PieChart;
