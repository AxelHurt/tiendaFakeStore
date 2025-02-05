import { useState, useEffect } from "react";
import { db } from "./data/db";
import "./App.css";

function App() {
  // const [tienda, setTienda] = useState(db)

  const URL_TIENDA = "https://fakestoreapi.com/products";
  const [tienda, setTienda] = useState([]);

  useEffect(() => {
    fetch(URL_TIENDA)
      .then((response) => response.json())
      .then((data) => setTienda(data));
  }, [tienda]);

  return (
    <>
      <h1 className="title">Fake store API</h1>
      {
        /* {
        tienda.map(data => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <h2>{data.price}</h2>
              <img src={data.image} alt="" />
            </div>
          )
        })
      } */

        tienda.map((data) => {
          return (
            <div className="container">
            <div key={data.id} className="card">
              <img src={data.image} alt="Producto" />
              <h2>{data.title}</h2>
              <p className="price">{data.price}</p>
              <p className="desc">{data.description}</p>
              <a href="#" class="button">Comprar</a>
            </div>
            </div>

          );
        })
      }
    </>
  );
}

export default App;
