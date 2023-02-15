import React, { useState, useEffect, useRef } from "react";
import "./BestSeller.scss";
import data from "./data";
import { arrowLeft, arrowRight } from "../../PAGES";

const BestSeller = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);

  const handleNavigation = (index) => {
    if (index >= 0 && index < data.length) {
      setActiveIndex(index);
      if (ref.current) {
        ref.current.scrollTo({
          top: 0,
          left: index * 324,
          behavior: "smooth",
        });
      }
    }
  };

  const prev = () => {
    let nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = data.length - 1;
    }
    handleNavigation(nextIndex);
  };

  const next = () => {
    let nextIndex = activeIndex + 1;
    if (nextIndex === data.length) {
      nextIndex = 0;
    }
    handleNavigation(nextIndex);
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);

    return () => clearInterval(slideInterval);
  }, [activeIndex]);

  return (
    <>
      <div className="sw best-seller-all-container">
        <h6 className="best-seller-title">Best Sellers</h6>
        <div className="best-seller-container" ref={ref}>
          <div className="best-cards-wrapper">
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
        <img
          src={arrowLeft}
          alt="arrow-left"
          className={`arrow-left`}
          onClick={prev}
        />
        <img
          src={arrowRight}
          alt="arrow-right"
          className={`arrow-right`}
          onClick={next}
        />
        <div className="sw indicators">
          {data.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => handleNavigation(index)}
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
      </div>
    </>
  );
};

export default BestSeller;
