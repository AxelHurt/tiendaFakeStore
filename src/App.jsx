import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importar estilos de los toasts

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      {/* Contenedor para que los toasts funcionen en toda la app */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
