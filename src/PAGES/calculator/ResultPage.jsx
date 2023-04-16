import React, { useEffect } from "react";
import {
  ResultNavbar,
  ResultFigure,
  Browse,
  Chart,
  ChartLoader,
} from "../../PAGES";

const ResultPage = () => {
  return (
    <div>
      <ResultNavbar />
      <ResultFigure />
      <Browse />
      <Chart />;
    </div>
  );
};

export default ResultPage;
