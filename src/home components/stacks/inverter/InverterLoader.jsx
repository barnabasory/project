import React from "react";
import "./Inverter.scss";
import inverterCards from "./data";

const Inverter = () => {
  return (
    <div className="sw cc inverter-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Inverter Services
      </h6>
      <div className="inverter-cards">
        {inverterCards.map((inverterCard) => {
          const { id, image, desc, price } = inverterCard;
          return (
            <div className="inverter-card cc skeleton-loading" key={id}>
              <img
                src={image}
                alt="inverter-panel"
                className="inverter-card-image"
                style={{ visibility: "hidden" }}
              />
              <div
                className="inverter-card-text cc"
                style={{ visibility: "hidden" }}
              >
                <p className="root-small inverter-card-desc">{desc}</p>
                <p className="root-text-bold inverter-card-price">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="button root-small-bold skeleton-loading"
        style={{ color: "transparent" }}
      >
        View all Products
      </button>
      <div className="hr"></div>
    </div>
  );
};

export default Inverter;
