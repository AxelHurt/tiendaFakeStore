import { toast } from "react-toastify";

function Products({ data, search }) {
  const filteredData = data.filter((products) =>
    products.title.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (data) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast(
      <div className="flex items-center gap-3">
        <img
          src={data.image}
          alt={data.title}
          className="w-10 h-10 rounded-md"
        />
        <span>{data.title} añadido al carrito 🛒</span>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      }
    );
  };

  return (
    <>
      {
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3  gap-10 m-10 place-items-center">
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
                <button
                  onClick={() => addToCart(data)}
                  className="bg-[#fcbf49] h-8 w-37 rounded-md m-5 cursor-pointer transition delay-50 duration-200 ease-in-out hover:scale-110"
                >
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
