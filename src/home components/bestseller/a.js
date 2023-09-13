import React, { useState, useEffect, useRef } from "react";
import "./BestSeller.scss";
import data from "./data";
import { arrowLeft, arrowRight } from "../../PAGES";

const BestSeller = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  let containerRef = useRef(null);

  const TOTAL_SLIDES = data.length - 1;
  const prev = (id) => {
    if (current === 0) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const next = (id) => {
    if (current >= TOTAL_SLIDES) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const desired = (e) => {
    setCurrent(Number(e.target.id));
  };

  useEffect(() => {
    containerRef.current.style.transition = `all s ease-in-out`;
    containerRef.current.style.transform = `translateX(calc(-${current}00%))`;
  });
  useEffect(() => {
    setIsLoading(false);
  }, [current]);

  return (
    <>
      <div className="sw best-seller-all-container">
        <h6 className="best-seller-title">Best Sellers</h6>
        <p>{current}</p>
        <div className="best-seller-container">
          <div className="best-cards-wrapper" ref={containerRef}>
            {data.map((card) => (
              <div className="best-seller-card" key={card.id}>
                {isLoading ? (
                  <img
                    src={card.placeholder}
                    alt="bestselling"
                    className="best-img"
                  />
                ) : (
                  <img
                    src={card.image}
                    alt="bestselling"
                    className="best-img"
                  />
                )}
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
              <button className="indicator-buttons">
                <span
                  className={`material-symbols-outlined ${
                    item.id - 1 === current
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                  onClick={desired}
                  id={item.id - 1}
                  key={index}
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
