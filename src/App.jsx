import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import AddPage from "./pages/AddPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  return (
    <>
      {/* Contenedor para que los toasts funcionen en toda la app */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/addproduct" element={<AddPage />} />
      </Routes>
    </>
  );
}

export default App;
