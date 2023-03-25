import React from "react";
import { createContext, useState } from "react";
import data from "./calculator components/cards/data";

export const CheckedCards = createContext();
const Context = ({ children }) => {
  const [show, setShow] = useState(false);
  const [checkedArray, setCheckedArray] = useState([]);
  const [counts, setCounts] = useState(data);
  const [checkedItems, setCheckedItems] = useState(
    Array(data.length).fill(false)
  );
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(counts.map((item) => item.count));
  const [wattage, setWattage] = useState(counts.map((item) => item.wattage));
  const [hours, setHours] = useState(counts.map((item) => item.hours));
  const [filteredArray, setFilteredArray] = useState(data);
  const [sortingMethod, setSortingMethod] = useState("ascending");

  return (
    <div>
      <CheckedCards.Provider
        value={{
          checkedArray,
          setCheckedArray,
          counts,
          setCounts,
          checkedItems,
          setCheckedItems,
          sum,
          setSum,
          count,
          setCount,
          wattage,
          setWattage,
          hours,
          setHours,
          filteredArray,
          setFilteredArray,
          sortingMethod,
          setSortingMethod,
          show,
          setShow,
        }}
      >
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
