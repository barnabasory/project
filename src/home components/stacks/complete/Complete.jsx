import { useState, useEffect } from "react";
import "./Complete.scss";
import completeCards from "./data";

const Complete = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="sw cc complete-cards-wrapper">
      <h6>Complete Services</h6>
      <div className="complete-cards">
        {completeCards.map((completeCard) => {
          const { id, image, desc, price, placeholder } = completeCard;
          return (
            <div className="complete-card cc" key={id}>
              {" "}
              {isLoading ? (
                <img
                  src={placeholder}
                  alt="complete-set"
                  className="complete-card-image"
                />
              ) : (
                <img
                  src={image}
                  alt="complete-set"
                  className="complete-card-image"
                />
              )}
              <div className="complete-card-text cc">
                {" "}
                <p className="root-small complete-card-desc">{desc}</p>
                <p className="root-text-bold complete-card-price">{price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="button root-small-bold">View all Products</button>
      <div className="hr"></div>
    </div>
  );
};

export default Complete;
