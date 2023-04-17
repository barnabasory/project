import React, { useState, useEffect, useRef } from "react";
import "./BestSellerLoader.scss";
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
        <h6
          className="best-seller-title skeleton-loading"
          style={{ color: "transparent" }}
        >
          Best Sellers
        </h6>
        <div className="best-seller-container" ref={ref}>
          <div className="best-cards-wrapper">
            {data.map((card, index) => (
              <div className="best-seller-card skeleton-loading" key={index}>
                <img
                  src={card.image}
                  alt="bestselling"
                  className="best-img"
                  style={{ visibility: "hidden" }}
                />
                <div className="best-seller-text">
                  <p
                    className="root-small best-desc"
                    style={{ visibility: "hidden" }}
                  >
                    {card.desc}
                  </p>
                  <p
                    className="best-price root-text-bold"
                    style={{ visibility: "hidden" }}
                  >
                    {card.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
