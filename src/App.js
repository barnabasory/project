import Home from "./PAGES/home/Home";
import { useState, useEffect } from "react";
import {
  CalculatorCards,
  CalculateUnits,
  CalculatorStart,
  Processing,
  ResultPage,
  EmailResult,
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

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
