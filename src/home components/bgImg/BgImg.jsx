import React from "react";
import "./BgImg.scss";
import bgImage from "../../assets/images/bgImg.jpg";

const BgImg = () => {
  return (
    <>
      <div className="fw bg-image">
        <img src={bgImage} alt="background-imagg" className="bg-img" />
        <div className=" bg-image-content">
          <div className="bg-image-content-text">
            <h3>Solar Power for Your Daily Needs.</h3>
            <span className="root-text">
              Choose a package that suits you and make payment in installments.
            </span>
          </div>
          <button className="root-small-bold bg-image-content-button">
            Browse Special Offers
          </button>
        </div>
      </div>
    </>
  );
};

export default BgImg;
