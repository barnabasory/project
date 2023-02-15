import Home from "./PAGES/home/Home";
import { CalculatorCards, CalculateUnits, CalculatorStart } from "./PAGES";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (loading) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      !loading && ({" "}
      <Router>
        <Routes>
          <Route
            exact
            path="/start-calculating"
            element={<CalculatorStart />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculate-cards" element={<CalculatorCards />} />
          <Route exact path="/calculate-units" element={<CalculateUnits />} />
        </Routes>
      </Router>
      )
    </>
  );
}

export default App;
