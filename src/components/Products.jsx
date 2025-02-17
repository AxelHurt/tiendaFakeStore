function Products({ data, search }) {
  const filteredData = data.filter((products) =>
    products.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {
        <div className="p-6">
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
                  Añadir al carrito
                </button>
              </div>
            ))}
          </div>
        </div>
      }
    </>
  );
}

export default Products;
