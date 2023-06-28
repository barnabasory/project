import { useContext, createContext, useState, useRef, useMemo } from "react";

const CheckedBox = createContext({});
const CheckboxContext = ({ children }) => {
  const [checked, setChecked] = useState(false);
  const checkBoxRef = useRef(null);

  const toggleCheckBox = (e) => {
    setChecked(e.target.value);
    setChecked(!checked);
    if (checked) {
      checkBoxRef.current.style.backgroundColor = "#43A45E";
      checkBoxRef.current.style.border = "none";
    } else {
      checkBoxRef.current.style.backgroundColor = "white";
      checkBoxRef.current.style.border = "1px solid rgba(26, 26, 26, 0.4)";
    }
  };

  const value = useMemo(
    () => ({ checked, setChecked, checkBoxRef }),
    [checked, setChecked, checkBoxRef]
  );
  return (
    <CheckedBox.Provider
      value={{ checked, setChecked, toggleCheckBox, checkBoxRef }}
    >
      {children}
    </CheckedBox.Provider>
  );
};

export const useCheckBoxContext = () => {
  return useContext(CheckedBox);
};

export default CheckboxContext;
