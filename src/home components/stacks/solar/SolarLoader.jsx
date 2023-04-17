import React from "react";
import "./Solar.scss";
import SolarCards from "./solarData";

const Solar = () => {
  return (
    <div className="sw cc solar-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Solar Services
      </h6>
      <div className="solar-cards">
        {SolarCards.map((solarCard) => {
          const { id, image, desc, price } = solarCard;
          return (
            <div className="solar-card cc skeleton-loading" key={id}>
              <img
                src={image}
                alt="solar-panel"
                className="solar-card-image"
                style={{ visibility: "hidden" }}
              />
              <div
                className="solar-card-text cc"
                style={{ visibility: "hidden" }}
              >
                <p className="root-small solar-card-desc">{desc}</p>
                <p className="root-text-bold solar-card-price">{price}</p>
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

export default Solar;
