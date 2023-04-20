import { useState, useEffect } from "react";
import "./Accessory.scss";
import accessoryCards from "./data";

const Accessory = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="sw cc accessory-cards-wrapper">
      <h6>Accessory Services</h6>
      <div className="accessory-cards">
        {accessoryCards.map((accessoryCard) => {
          const { id, image, desc, price, placeholder } = accessoryCard;
          return (
            <div className="accessory-card cc" key={id}>
              {" "}
              <img
                src={isLoading ? placeholder : image}
                alt="accessory-set"
                className="accessory-card-image"
              />
              <div className="accessory-card-text cc">
                {" "}
                <p className="root-small accessory-card-desc">{desc}</p>
                <p className="root-text-bold accessory-card-price">{price}</p>
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

export default Accessory;
