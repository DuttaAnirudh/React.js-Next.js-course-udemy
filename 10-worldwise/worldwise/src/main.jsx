import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CitiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CitiesProvider>
  </React.StrictMode>
);
