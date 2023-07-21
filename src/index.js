import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./contexts/Context";
import CheckboxContext from "./contexts/CheckboxContext";
import VendorContext from "./contexts/VendorContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Context>
      <CheckboxContext>
        <VendorContext>
          <App />
        </VendorContext>
      </CheckboxContext>
    </Context>
  </Router>
);
