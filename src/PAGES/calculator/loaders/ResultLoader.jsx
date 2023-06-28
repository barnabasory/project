import React from "react";
import {
  ResultNavbarLoader,
  ResultFigureLoader,
  Chart,
} from "../../calculator";

const ResultLoader = () => {
  return (
    <div>
      <ResultNavbarLoader />
      <ResultFigureLoader />
      <Chart />
    </div>
  );
};

export default ResultLoader;
