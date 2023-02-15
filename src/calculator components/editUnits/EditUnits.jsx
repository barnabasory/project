import React from "react";
import "./EditUnits.scss";
import { arrowUp, arrowDown } from "../../PAGES";

const EditUnits = () => {
  return (
    <div className="sw calc-edit">
      <div className=" calc-edit-top">
        <span>Edit the wattage and hourly usage for each item</span>
        <div className="calc-edit-top-result">
          <span>Back</span>
          <button className="calc-edit-top-button root-small-bold">
            See Results
          </button>
        </div>
      </div>
      <div className="calc-edit-main">
        <div className="calc-edit-main-border-top"></div>
        <div className="calc-edit-main-cards">
          <div className="calc-edit-main-card">
            <span>Refrigerator</span>
            {/* wattage */}
            <div className="calc-edit-wattage-hr"></div>
            <div className="calc-edit-wattage-div">
              <span className="root-small calc-edit-wattage-unit">Wattage</span>
              <div className="dd calc-edit-wattage-acronymn">
                <div className="calc-edit-wattage-meter">
                  <div className="card-wattage-number">300</div>
                  <div className="card-wattage-arrows">
                    <img
                      src={arrowUp}
                      alt="arrow-up"
                      className="card-wattage-arrow card-wattage-arrow-up"
                    />
                    <img
                      src={arrowDown}
                      alt="arrow-down"
                      className="card-wattage-arrow"
                    />
                  </div>
                </div>
                <span className="calc-wattage-acronym root-small">W</span>
              </div>
            </div>
            <div className="calc-edit-hours-hr"></div>
            {/* hours */}
            <div className="calc-edit-hours-div">
              <span className="root-small calc-edit-hours-unit">
                Hours used per day
              </span>
              <div className="dd calc-edit-hours-acronymn">
                {" "}
                <div className="calc-edit-hours-meter">
                  <div className="card-hours-number">12</div>
                  <div className="card-hours-arrows">
                    <img
                      src={arrowUp}
                      alt="arrow-up"
                      className="card-hours-arrow card-hours-arrow-up"
                    />
                    <img
                      src={arrowDown}
                      alt="arrow-down"
                      className="card-hours-arrow"
                    />
                  </div>
                </div>
                <span className="calc-hours-acronym root-small">Hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="calc-edit-footer"></div>
    </div>
  );
};

export default EditUnits;
