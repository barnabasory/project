import React, { useState, useEffect } from "react";
import { CNavbar, CFilter, CCards, Form } from "../calculator";
import styles from "./calculator.module.scss";
import cards from "../../calculator components/cards/data";
import { useContext } from "react";
import { CheckedCards } from "../../contexts/Context";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
  count: 0,
};

const CalculatorCards = () => {
  const [data, setData] = useState(cards);
  const [sortOrder, setSortOrder] = useState("ascending");
  const { counts, setCounts, show, select, setSelect } =
    useContext(CheckedCards);
  const [isLoading, setIsLoading] = useState(true);

  const increaseCount = (index) => {
    // increase Count
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  useEffect(() => {
    const savedCards = JSON.parse(sessionStorage.getItem("cards"));
    if (savedCards) {
      setData(savedCards);
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <div className={styles.calculator}>
        <CNavbar />
        <CFilter
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          message={data}
        />
        <CCards
          message={data}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          onAddCustomItem={(id) => increaseCount(id)}
        />

        {show && <Form />}

        {select && (
          <div
            className={styles.select_overlay}
            onClick={() => setSelect(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default CalculatorCards;
