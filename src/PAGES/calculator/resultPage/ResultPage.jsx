import React, { useState, useEffect } from "react";
import {
  ResultNavbar,
  ResultFigure,
  Browse,
  Chart,
  SendReport,
} from "../../calculator";
import styles from "./ResultPage.module.scss";

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      <div>
        <ResultNavbar />
        <ResultFigure />
        <Browse />
        <div className={`sw ${styles.chart_form_wrapper}`}>
          <Chart />
          <SendReport />
        </div>
      </div>
    </>
  );
};

export default ResultPage;
