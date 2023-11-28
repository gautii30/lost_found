import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ContextProvider } from "./Context/ContextProvider";
 
import { ThemeProvider } from "@material-tailwind/react";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
      <ContextProvider>
        <App />
        </ContextProvider>
      </Router>
      
    </ThemeProvider>
  </React.StrictMode>
);