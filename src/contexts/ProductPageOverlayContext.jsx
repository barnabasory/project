import { useContext, createContext, useState } from "react";

const OverlayContext = createContext({});
const ProductPageOverlayContext = ({ children }) => {
  const [slideIn, setSlideIn] = useState(false);

  return (
    <OverlayContext.Provider value={{ slideIn, setSlideIn }}>
      {children}
    </OverlayContext.Provider>
  );
};

export default ProductPageOverlayContext;

export const useProductPageOverlayContext = () => {
  return useContext(OverlayContext);
};
