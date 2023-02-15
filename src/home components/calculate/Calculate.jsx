import React from "react";
import "./Calculate.scss";

const Calculate = () => {
  return (
    <div className="fw calculate-wrapper cc">
      {" "}
      <div className="sw cc calculate-div">
        <h5>Calculate your Energy Needs</h5>
        <p className="root-text">
          Let’s help you calculate your current energy consumption and recommend
          the best product for you
        </p>
        <button className="calculate-button">
          Calculate Your Energy Bills
        </button>
      </div>
    </div>
  );
};

export default Calculate;
