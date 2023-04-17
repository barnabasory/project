import React from "react";
import "./Complete.scss";
import completeCards from "./data";

const Complete = () => {
  return (
    <div className="sw cc complete-cards-wrapper">
      <h6 className="skeleton-loading" style={{ color: "transparent" }}>
        Complete Services
      </h6>
      <div className="complete-cards">
        {completeCards.map((completeCard) => {
          const { id, image, desc, price } = completeCard;
          return (
            <div className="complete-card cc skeleton-loading" key={id}>
              {" "}
              <img
                src={image}
                alt="complete-set"
                className="complete-card-image"
                style={{ visibility: "hidden" }}
              />
              <div className="complete-card-text cc">
                {" "}
                <p
                  className="root-small complete-card-desc"
                  style={{ visibility: "hidden" }}
                >
                  {desc}
                </p>
                <p
                  className="root-text-bold complete-card-price"
                  style={{ visibility: "hidden" }}
                >
                  {price}
                </p>
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

export default Complete;
