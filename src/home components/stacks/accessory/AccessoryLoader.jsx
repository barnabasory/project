import React from "react";
import "./Accessory.scss";
import accessoryCards from "./data";

const Accessory = () => {
  return (
    <div className="sw cc accessory-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Accessory Services
      </h6>
      <div className="accessory-cards">
        {accessoryCards.map((accessoryCard) => {
          const { id, image, desc, price } = accessoryCard;
          return (
            <div className="accessory-card cc skeleton-loading" key={id}>
              {" "}
              <img
                src={image}
                alt="accessory-set"
                className="accessory-card-image"
                style={{ visibility: "hidden" }}
              />
              <div
                className="accessory-card-text cc"
                style={{ visibility: "hidden" }}
              >
                {" "}
                <p className="root-small accessory-card-desc">{desc}</p>
                <p className="root-text-bold accessory-card-price">{price}</p>
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

export default Accessory;
