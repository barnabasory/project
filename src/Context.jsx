import React, { useCallback, useEffect, useMemo } from "react";
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
  const [sortOrder, setSortOrder] = useState("ascending");
  const [select, setSelect] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  //method to set Items to Loacal Storage
  const onSetCheckedArray = useCallback((items) => {
    setCheckedArray(items);
    localStorage.setItem("checkedArray", JSON.stringify(items));
  }, []);

  //method to get items from local storage
  useEffect(() => {
    const checked = JSON.parse(localStorage.getItem("checkedArray"));
    setCheckedArray(checked);
  }, [onSetCheckedArray]);

  const value = useMemo(
    () => ({
      showLogin,
      setShowLogin,
      checkedArray,
      onSetCheckedArray,
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
      sortOrder,
      setSortOrder,
      show,
      setShow,
      select,
      setSelect,
    }),
    [
      showLogin,
      setShowLogin,
      checkedArray,
      onSetCheckedArray,
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
      sortOrder,
      setSortOrder,
      show,
      setShow,
      select,
      setSelect,
    ]
  );

  return (
    <div>
      <CheckedCards.Provider
        value={{
          showLogin,
          setShowLogin,
          checkedArray,
          onSetCheckedArray,
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
          sortOrder,
          setSortOrder,
          show,
          setShow,
          select,
          setSelect,
        }}
      >
        {children}
      </CheckedCards.Provider>
    </div>
  );
};

export default Context;
