import { useState, useEffect } from "react";
import { CNavbar, CMain, CNavbarLoader, CMainLoader } from "../../PAGES";

const CalculatorStart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <CNavbarLoader />
          <CMainLoader />
        </div>
      ) : (
        <div>
          <CNavbar />
          <CMain />
        </div>
      )}
    </>
  );
};

export default CalculatorStart;
