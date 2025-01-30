import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import AdeniCard from "./component/Card/Cartpreperti.jsx";
import Navbar from './component/Navbar/Navbar'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
          <Navbar />
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/adenicard/:alias" element={<AdeniCard/>} />
      </Routes>
    </StrictMode>
    
  </BrowserRouter>
);
