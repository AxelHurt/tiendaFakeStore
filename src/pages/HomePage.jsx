import React from 'react'
import Header from '../components/Header'
import Enlaces from '../components/Enlaces'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { useState, useEffect } from "react";

function HomePage() {
  const URL_TIENDA = "https://fakestoreapi.com/products";

  // FILTROS DE BUSQUEDA
  const [data, setData] = useState([]); // Datos de la API
  const [search, setSearch] = useState(""); // Estado del filtro

  useEffect(() => {
    fetch(URL_TIENDA)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  return (
    <>
        <Header setSearch={setSearch} />
        <Enlaces />
        <Products data={data} search={search} />
        <Footer />
    </>
  )
}

export default HomePage;