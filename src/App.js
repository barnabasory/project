import Home from "./PAGES/home/Home";
import { CalculatorCards, CalculateUnits, CalculatorStart } from "./PAGES";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
