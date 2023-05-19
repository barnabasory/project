import Home from "./PAGES/home/Home";
import { useState, useEffect } from "react";

import {
  CalculatorCards,
  CalculateUnits,
  CalculatorStart,
  Processing,
  ResultPage,
  EmailResult,
  SignUpPage,
  LoginPage,
  AboutUs,
  PowerServicePage,
  VendorAccount,
} from "./PAGES";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
          <Router>
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
              <Route exact path="/email-result" element={<EmailResult />} />
              <Route exact path="/signup" element={<SignUpPage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route
                exact
                path="/power-service"
                element={<PowerServicePage />}
              />
              <Route
                exact
                path="/create-vendor-account"
                element={<VendorAccount />}
              />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
