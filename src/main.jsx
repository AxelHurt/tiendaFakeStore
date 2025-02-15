import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./Header.jsx";
import Enlaces from "./Enlaces.jsx";
import Footer from "./footer.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Enlaces />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
