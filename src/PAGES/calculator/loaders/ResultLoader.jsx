import React from "react";
import { ResultNavbarLoader, ResultFigureLoader, Chart } from "../../index";

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
