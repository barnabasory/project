import React from "react";
import {
  ResultNavbarLoader,
  ResultFigureLoader,
  BrowseLoader,
  ChartLoader,
} from "../../index";

const ResultLoader = () => {
  return (
    <div>
      <ResultNavbarLoader />
      <ResultFigureLoader />
      <BrowseLoader />
      <ChartLoader />
    </div>
  );
};

export default ResultLoader;
