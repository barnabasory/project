import React from "react";
import "./Stack.scss";
import {
  Accessory,
  Battery,
  Complete,
  Inverter,
  Solar,
  Equipment,
} from "../../PAGES";

const Stack = () => {
  return (
    <div className="fw stacks">
      <div className=" cc stack-wrapper">
        <Complete />
        <Solar />
        <Inverter />
        <Battery />
        <Accessory />
        <Equipment />
      </div>
    </div>
  );
};

export default Stack;
