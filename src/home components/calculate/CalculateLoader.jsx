import React from "react";
import "./Calculate.scss";

const Calculate = () => {
  return (
    <div
      className="fw calculate-wrapper cc"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
    >
      {" "}
      <div className="sw cc calculate-div">
        <h5 className="skeleton-loading" style={{ color: "transparent" }}>
          Calculate your Energy Needs
        </h5>
        <p
          className="root-text skeleton-loading"
          style={{ color: "transparent" }}
        >
          Let’s help you calculate your current energy consumption and recommend
          the best product for you
        </p>
        <button
          className="calculate-button skeleton-loading"
          style={{ color: "transparent" }}
        >
          Calculate Your Energy Bills
        </button>
      </div>
    </div>
  );
};

export default Calculate;
