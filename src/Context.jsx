import React from "react";
import { createContext, useState } from "react";
import data from "./calculator components/cards/data";

export const CheckedCards = createContext();
const Context = ({ children }) => {
  const [pageData, setPageData] = useState(null);
  const [checkedArray, setCheckedArray] = useState([]);
  const [counts, setCounts] = useState(Array(data.length).fill(1));
  const [toggleCheckBox, setToggleCheckBox] = useState(
    Array(data.length).fill(false)
  );
  const [results, setResults] = useState(Array(data.length).fill(1));

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
          pageData,
          setPageData,
        }}
      >
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
