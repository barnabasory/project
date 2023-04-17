import React, { useState, useEffect } from "react";
import {
  ResultNavbar,
  ResultFigure,
  Browse,
  Chart,
  ResultNavbarLoader,
  ResultFigureLoader,
  BrowseLoader,
  ChartLoader,
} from "../../PAGES";

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <ResultNavbarLoader />
          <ResultFigureLoader />
          <BrowseLoader />
          <ChartLoader />
        </div>
      ) : (
        <div>
          <ResultNavbar />
          <ResultFigure />
          <Browse />
          <Chart />
        </div>
      )}
    </>
  );
};

export default ResultPage;
