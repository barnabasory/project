import React from "react";
import {
  ResultNavbarLoader,
  ResultFigureLoader,
  BrowseLoader,
  Chart,
} from "../../index";

const ResultLoader = () => {
  return (
    <div>
      <ResultNavbarLoader />
      <ResultFigureLoader />
      <BrowseLoader />
      <Chart />
    </div>
  );
};

export default ResultLoader;
