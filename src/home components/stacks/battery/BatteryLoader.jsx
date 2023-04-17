import React from "react";
import "./Battery.scss";
import batteryCards from "./data";

const Battery = () => {
  return (
    <div className="sw cc battery-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Battery Services
      </h6>
      <div className="battery-cards">
        {batteryCards.map((batteryCard) => {
          const { id, image, desc, price } = batteryCard;
          return (
            <div className="battery-card cc skeleton-loading" key={id}>
              {" "}
              <img
                src={image}
                alt="battery-set"
                className="battery-card-image"
                style={{ visibility: "hidden" }}
              />
              <div
                className="battery-card-text cc"
                style={{ visibility: "hidden" }}
              >
                {" "}
                <p className="root-small battery-card-desc">{desc}</p>
                <p className="root-text-bold battery-card-price">{price}</p>
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

export default Battery;
