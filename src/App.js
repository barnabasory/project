import Home from "./PAGES/home/Home";
import { useState, useEffect } from "react";
import {
  CalculatorCards,
  CalculateUnits,
  CalculatorStart,
  Processing,
  ResultPage,
} from "./PAGES/calculator";
import {
  OEMStoreProfilePage,
  DepositMethodPage,
  StoreProfilePage,
  SelectRolePage,
  SellerProfilePage,
  SummaryPage,
} from "./PAGES/sellers";
import { SignUpPage, LoginPage, AboutUs, PowerServicePage } from "./PAGES";
import { Routes, Route } from "react-router-dom";
import {
  HomeLoader,
  ResultLoader,
  CalculatorCardsLoader,
  CalculatorStartLoader,
  CalculateUnitsLoader,
} from "./PAGES/index";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loader = document.querySelector(".loading");

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    loader.style.display = "none";
    setIsLoading(false);
  }
  return (
    <>
      {!isLoading && (
        <div className="App">
          <Routes>
            <Route
              exact
              path="/start-calculating"
              element={
                isLoading ? <CalculatorStartLoader /> : <CalculatorStart />
              }
            />

            <Route
              exact
              path="/"
              element={isLoading ? <HomeLoader /> : <Home />}
            />

            <Route
              exact
              path="/calculate-cards"
              element={
                isLoading ? <CalculatorCardsLoader /> : <CalculatorCards />
              }
            />
            <Route
              exact
              path="/calculate-units"
              element={
                isLoading ? <CalculateUnitsLoader /> : <CalculateUnits />
              }
            />
            <Route exact path="/processing" element={<Processing />} />
            <Route
              exact
              path="/result"
              element={isLoading ? <ResultLoader /> : <ResultPage />}
            />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/power-service" element={<PowerServicePage />} />
            <Route exact path="/select-role" element={<SelectRolePage />} />
            <Route
              exact
              path="/vendor-store-profile"
              element={<StoreProfilePage />}
            />
            <Route
              exact
              path="/vendor-seller-profile"
              element={<SellerProfilePage />}
            />
            <Route
              exact
              path="/oem-store-profile"
              element={<OEMStoreProfilePage />}
            />
            <Route
              exact
              path="/vendor-deposit-method"
              element={<DepositMethodPage />}
            />
            <Route exact path="/summary" element={<SummaryPage />} />
          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
