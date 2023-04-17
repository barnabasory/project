import { useState, useEffect } from "react";
import {
  CNavbar,
  EditUnits,
  CNavbarLoader,
  EditUnitsLoader,
} from "../../PAGES";

const CalculateUnits = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <div>
          {" "}
          <CNavbarLoader />
          <EditUnitsLoader />
        </div>
      ) : (
        <div>
          <CNavbar />
          <EditUnits />
        </div>
      )}
    </>
  );
};

export default CalculateUnits;
