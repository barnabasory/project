import React from "react";
import { createContext, useState } from "react";

export const CheckedCards = createContext();
const Context = ({ children }) => {
  const [checkedArray, setCheckedArray] = useState([]);

  return (
    <div>
      <CheckedCards.Provider value={{ checkedArray, setCheckedArray }}>
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
