import React, { useEffect } from "react";
import {
  ResultNavbar,
  ResultFigure,
  Browse,
  Chart,
  ChartLoader,
} from "../../PAGES";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const ResultPage = () => {
  const { loading, setLoading } = useContext(CheckedCards);

  useEffect(() => {
    setLoading(true);
    <ChartLoader />;
    <Chart />;
    setLoading(false);
  }, []);
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
