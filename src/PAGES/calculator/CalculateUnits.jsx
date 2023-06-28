import { useState, useEffect } from "react";
import { CNavbar, EditUnits } from "../calculator";

const CalculateUnits = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      <div>
        <CNavbar />
        <EditUnits />
      </div>
    </>
  );
};

export default CalculateUnits;
