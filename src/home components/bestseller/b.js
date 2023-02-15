import React, { useState, useEffect, useRef } from "react";
import "./BestSeller.scss";
import data from "../bestseller/data";
import { arrowLeft, arrowRight } from "../../PAGES";

const BestSeller = () => {
  const ref = useRef(null);

  const prev = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: -300,
        behaviour: "smooth",
      });
    }
  };

  const next = () => {
    if (ref.current) {
      ref.current.scrollBy({
        top: 0,
        left: 300,
        behaviour: "smooth",
      });
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 5000);

    return () => clearInterval(slideInterval);
  }, []);

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

        <div className=" arrows">
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
        </div>
      </div>
    </>
  );
};

export default BestSeller;
