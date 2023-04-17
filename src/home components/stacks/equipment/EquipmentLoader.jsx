import React from "react";
import "./Equipment.scss";
import equipmentCards from "./data";

const Equipment = () => {
  return (
    <div className="sw cc equipment-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Equipment Services
      </h6>
      <div className="equipment-cards">
        {equipmentCards.map((equipmentCard) => {
          const { id, image, desc, price } = equipmentCard;
          return (
            <div className="equipment-card cc skeleton-loading" key={id}>
              {" "}
              <img
                src={image}
                alt="equipment-set"
                className="equipment-card-image"
                style={{ visibility: "hidden" }}
              />
              <div
                className="equipment-card-text cc"
                style={{ visibility: "hidden" }}
              >
                {" "}
                <p className="root-small equipment-card-desc">{desc}</p>
                <p className="root-text-bold equipment-card-price">{price}</p>
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

export default Equipment;
