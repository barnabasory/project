import React from "react";
import "./CMain.scss";
import { bgImg } from "../../PAGES";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="fw cc calc-start-page">
      <div className="fw cc calculator-details-wrapper"></div>
      <div className="sw cc calculator-details">
        <div className="cc calc-title-desc">
          <h3 className="h3">Let’s Calculate your Energy Needs</h3>
          <p className="root-text calc-desc1">
            It’s okay if you are not sure about what product to buy, If you can
            remember how many items or appliances you use, you can use this
            energy needs calculator to narrow down the best set of products that
            will suit your energy needs
          </p>
        </div>
        <div className="cc calc-button-desc">
          <p className="tiny-text calc-desc2">
            This energy needs calculator is offered for informational purposes
            only. The results it provides are based on your inputs, and are not
            intended to substitute for professional advice, Please consult an
            expert if you aren’t sure about your results.
          </p>
          <Link to="/calculate-cards">
            <button className="calculator-button">Start</button>
          </Link>
        </div>
      </div>
      <img src={bgImg} alt="bg-img" className="fw calc-bg-image" />
    </div>
  );
};

export default Main;
