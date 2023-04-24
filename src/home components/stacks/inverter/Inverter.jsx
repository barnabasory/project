import { useEffect, useState } from "react";
import "./Inverter.scss";
import inverterCards from "./data";

const Inverter = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <div className="sw cc inverter-cards-wrapper">
      <h6>Inverter Services</h6>
      <div className="inverter-cards">
        {inverterCards.map((inverterCard) => {
          const { id, image, desc, price, placeholder } = inverterCard;
          return (
            <div className="inverter-card cc" key={id}>
              {isLoading ? (
                <img
                  src={placeholder}
                  alt="inverter-panel"
                  className="inverter-card-image"
                />
              ) : (
                <img
                  src={image}
                  alt="inverter-panel"
                  className="inverter-card-image"
                />
              )}
              <div className="inverter-card-text cc">
                <p className="root-small inverter-card-desc">{desc}</p>
                <p className="root-text-bold inverter-card-price">{price}</p>
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

export default Inverter;
