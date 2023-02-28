import React from "react";
import { createContext, useState } from "react";
import data from "./calculator components/cards/data";

export const CheckedCards = createContext();
const Context = ({ children }) => {
  const [checkedArray, setCheckedArray] = useState([]);
  const [counts, setCounts] = useState(Array(data.length).fill(1));

  return (
    <div>
      <CheckedCards.Provider
        value={{ checkedArray, setCheckedArray, counts, setCounts }}
      >
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
