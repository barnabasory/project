import React, { useState, useEffect } from "react";
import "./BestSeller.scss";
import data from "../bestseller/data";
import { arrowLeft, arrowRight } from "../../PAGES";

const BestSeller = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <>
      <div className="sw best-seller-all-container">
        <h6 className="best-seller-title">Best Sellers</h6>
        <div className="best-seller-container">
          <div
            className="best-cards-wrapper"
            style={{
              transform: `translate(-${activeIndex * 300}px)`,
            }}
          >
            {data.map((card, index) => (
              <div className="best-seller-card" key={index}>
                <img src={card.image} alt="bestselling" className="best-img" />
                <div className="best-seller-text">
                  <p className="root-small best-desc">{card.desc}</p>
                  <p className="best-price root-text-bold">{card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sw indicators">
          {data.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                ></span>
              </button>
            );
          })}
        </div>

        <div className=" arrows">
          <img
            src={arrowLeft}
            alt="arrow-left"
            className={`arrow-left`}
            style={{ opacity: activeIndex === 0 ? "0.5" : "1" }}
            onClick={() => updateIndex(activeIndex - 1)}
          />
          <img
            src={arrowRight}
            alt="arrow-right"
            className={`arrow-right`}
            style={{
              opacity: activeIndex === data.length - 1 ? "0.5" : "1",
            }}
            onClick={() => updateIndex(activeIndex + 1)}
          />
        </div>
      </div>
    </>
  );
};

export default BestSeller;
