import React from "react";
import Header from "../components/Header";
import Enlaces from "../components/Enlaces";
import AddProductForm from "../components/AddProductForm";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

function AddPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(""); // Estado del filtro

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Header setSearch={setSearch} />
      <Enlaces />
      <AddProductForm onProductAdded={fetchProducts} />
      <Footer />
    </>
  );
}

export default AddPage;
