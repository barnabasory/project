import { useState, useEffect } from "react";
import "./Battery.scss";
import batteryCards from "./data";

const Battery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="sw cc battery-cards-wrapper">
      <h6>Battery Services</h6>
      <div className="battery-cards">
        {batteryCards.map((batteryCard) => {
          const { id, image, desc, price, placeholder } = batteryCard;
          return (
            <div className="battery-card cc" key={id}>
              {" "}
              <img
                src={isLoading ? placeholder : image}
                alt="battery-set"
                className="battery-card-image"
              />
              <div className="battery-card-text cc">
                {" "}
                <p className="root-small battery-card-desc">{desc}</p>
                <p className="root-text-bold battery-card-price">{price}</p>
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

export default Battery;
