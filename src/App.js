import Home from "./PAGES/home/Home";
import {
  CalculatorCards,
  CalculateUnits,
  CalculatorStart,
  Processing,
  ResultPage,
} from "./PAGES";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/start-calculating"
            element={<CalculatorStart />}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculate-cards" element={<CalculatorCards />} />
          <Route path="/calculate-units" element={<CalculateUnits />} />
          <Route path="/processing" element={<Processing />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
