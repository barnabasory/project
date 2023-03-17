import React from "react";
import { createContext, useState } from "react";
import data from "./calculator components/cards/data";

export const CheckedCards = createContext();
const Context = ({ children }) => {
  const [checkedArray, setCheckedArray] = useState([]);
  const [counts, setCounts] = useState(Array(data.length).fill(0));
  const [toggleCheckBox, setToggleCheckBox] = useState(
    Array(data.length).fill(false)
  );
  const [results, setResults] = useState(Array(data.length).fill(1));
  const [wattage, setWattage] = useState(Array(data.length).fill(1));
  const [hours, setHours] = useState(Array(data.length).fill(1));

  return (
    <div>
      <CheckedCards.Provider
        value={{
          checkedArray,
          setCheckedArray,
          counts,
          setCounts,
          toggleCheckBox,
          setToggleCheckBox,
          results,
          setResults,
          wattage,
          setWattage,
          hours,
          setHours,
        }}
      >
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
