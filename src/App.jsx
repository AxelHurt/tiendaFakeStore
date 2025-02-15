import { useState, useEffect } from "react";
// import { db } from "./data/db";

function App() {
  // const [tienda, setTienda] = useState(db)

  const URL_TIENDA = "https://fakestoreapi.com/products";
  // const [tienda, setTienda] = useState([]);

  // useEffect(() => {
  //   fetch(URL_TIENDA)
  //     .then((response) => response.json())
  //     .then((data) => setTienda(data));
  // }, []);

  // FILTROS DE BUSQUEDA
  const [data, setData] = useState([]); // Datos de la API
  const [filteredData, setFilteredData] = useState([]); // Datos filtrados
  const [search, setSearch] = useState(""); // Estado del filtro

  useEffect(() => {
    fetch(URL_TIENDA)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Inicialmente, sin filtro
      })
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  // Filtrar los datos cuando el usuario escribe
  useEffect(() => {
    const results = data.filter((products) =>
      products.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(results);
  }, [search, data]);

  return (
    <>
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

        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10 place-items-center">
        //   {tienda.map((data) => (
        //     <div
        //       key={data.id}
        //       className="text-center box-border border rounded-md p-4 h-auto w-80 bg-gray-50"
        //     >
        //       <img
        //         className="h-48 w-full object-contain"
        //         src={data.image}
        //         alt={data.title}
        //       />
        //       <h2 className="font-medium m-5">{data.title}</h2>
        //       <p className="m-5 text-[#d1191e] text-2xl">${data.price} USD</p>
        //       <button className="bg-[#fcbf49] h-8 w-37 rounded-md m-5">
        //         COMPRAR AHORA
        //       </button>
        //     </div>
        //   ))}
        // </div>

        <div className="p-6">
          <input
            type="text"
            placeholder="Buscar..."
            className="p-2 border rounded w-full text-black "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10 place-items-center">
            {filteredData.map((data) => (

              <div
                key={data.id}
                className="text-center box-border border rounded-md p-4 h-auto w-80 bg-gray-50"
              >
                <img
                  className="h-48 w-full object-contain"
                  src={data.image}
                  alt={data.title}
                />
                <h2 className="font-medium m-5">{data.title}</h2>
                <p className="m-5 text-[#d1191e] text-2xl">${data.price} USD</p>
                <button className="bg-[#fcbf49] h-8 w-37 rounded-md m-5">
                  COMPRAR AHORA
                </button>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default App;
