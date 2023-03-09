import React from "react";
import styles from "./EditUnits.module.scss";

const Result = ({ editSum }) => {
  return (
    <div>
      <div className={styles.sum}>{editSum}</div>
    </div>
  );
};

export default Result;
