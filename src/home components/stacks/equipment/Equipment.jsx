import { useState, useEffect } from "react";
import "./Equipment.scss";
import equipmentCards from "./data";

const Equipment = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="sw cc equipment-cards-wrapper">
      <h6>Equipment Services</h6>
      <div className="equipment-cards">
        {equipmentCards.map((equipmentCard) => {
          const { id, image, desc, price, placeholder } = equipmentCard;
          return (
            <div className="equipment-card cc" key={id}>
              {" "}
              {isLoading ? (
                <img
                  src={placeholder}
                  alt="equipment-set"
                  className="equipment-card-image"
                />
              ) : (
                <img
                  src={image}
                  alt="equipment-set"
                  className="equipment-card-image"
                />
              )}
              <div className="equipment-card-text cc">
                {" "}
                <p className="root-small equipment-card-desc">{desc}</p>
                <p className="root-text-bold equipment-card-price">{price}</p>
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

export default Equipment;
