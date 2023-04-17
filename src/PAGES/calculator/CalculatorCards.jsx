import React, { useState, useEffect } from "react";
import { CNavbar, CFilter, CCards, Form } from "../index";
import styles from "./calculator.module.scss";
import { CNavbarLoader, CFilterLoader, CCardsLoader } from "../../PAGES";
import cards from "../../calculator components/cards/data";
import { useContext } from "react";
import { CheckedCards } from "../../Context";

const initialState = {
  name: "",
  wattage: "",
  hours: "",
  count: 0,
};

const CalculatorCards = () => {
  const [value, setValue] = useState(initialState);
  const [data, setData] = useState(cards);
  const [sortOrder, setSortOrder] = useState("ascending");
  const { counts, setCounts, filteredArray, show, setShow, select, setSelect } =
    useContext(CheckedCards);
  const [isLoading, setIsLoading] = useState(true);

  const showModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const increaseCount = (index) => {
    // increase Count
    setCounts(counts.map((count, i) => (i === index ? count + 1 : count)));
  };

  const decreaseCount = (index) => {
    // decrease count
    setCounts(
      counts.map((count, i) => (i === index && count > 1 ? count - 1 : count))
    );
  };

  const addCustomItem = (id) => {
    const customItem = { ...value, id };
    setData([...data, customItem]);
    localStorage.setItem("cards", JSON.stringify([...data, customItem]));
    setValue(initialState);
    setCounts([...counts, 1]);
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
      {isLoading ? (
        <div>
          <CNavbarLoader />
          <CFilterLoader />
          <CCardsLoader />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default CalculatorCards;
