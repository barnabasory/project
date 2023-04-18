import Home from "./PAGES/home/Home";
import { useState, useEffect } from "react";
import {
  CalculatorCards,
  CalculateUnits,
  CalculatorStart,
  Processing,
  ResultPage,
} from "./PAGES";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomeLoader } from "./PAGES";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        <h1 style={{ fontSize: "220px" }}>Loading......</h1>
      ) : (
        <div className="App">
          <Router>
            <Routes>
              <Route
                exact
                path="/start-calculating"
                element={<CalculatorStart />}
              />

              <Route
                exact
                path="/"
                element={isLoading ? <HomeLoader /> : <Home />}
              />

              <Route
                exact
                path="/calculate-cards"
                element={<CalculatorCards />}
              />
              <Route path="/calculate-units" element={<CalculateUnits />} />
              <Route path="/processing" element={<Processing />} />
              <Route path="/result" element={<ResultPage />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
