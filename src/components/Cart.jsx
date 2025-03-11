import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Función para agrupar productos repetidos y contar su cantidad
  const agruparCarrito = (items) => {
    const groupedCart = items.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    return groupedCart;
  };

  // Cargar y agrupar el carrito desde localStorage al montar el componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const groupedCart = agruparCarrito(storedCart);
    setCart(groupedCart);
    calcularTotal(groupedCart);
  }, []);

  // Calcular el total sumando los precios por la cantidad de cada producto
  const calcularTotal = (cartItems) => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  };

  // Eliminar producto del carrito (reduce cantidad o elimina si es el último)
  const removeFromCart = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 } // Reduce cantidad
          : item
      )
      .filter((item) => item.quantity > 0); // Elimina si cantidad llega a 0

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    calcularTotal(updatedCart);

    const removedItem = cart.find((item) => item.id === id);
    toast(
      <div className="flex items-center gap-3">
        <img
          src={removedItem.image}
          alt={removedItem.title}
          className="w-10 h-10 rounded-md"
        />
        <span>{removedItem.title} eliminado del carrito 🛒</span>
      </div>,
      {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        progressStyle: { backgroundColor: "#d1191e" }, // Color de la barra
      }
    );
  };

  return (
    <div className="p-6">
      {cart.length === 0 ? (
        <p className="text-center m-5">El carrito está vacío</p>
      ) : (
        <>
          <div className="max-w-4xl mx-auto mt-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border border-[#ececec]   justify-between border-b p-4 bg-gray-50 rounded-md shadow-md mb-3"
              >
                {/* Imagen a la izquierda */}
                <img
                  className="w-16 h-16 object-contain rounded-md"
                  src={item.image}
                  alt={item.title}
                />

                {/* Contenedor de título y cantidad */}
                <div className="flex-1 ml-4">
                  <h2 className="font-medium text-lg mr-5">{item.title}</h2>

                  {/* Número de productos entre el título y el precio */}
                  <div className="text-[#d1191e] font-bold text-xl mt-2 text-[1.2rem] bg-[#f1f1f1] rounded-lg px-2.5 py-1 inline-block">
                    +{item.quantity}
                  </div>
                </div>

                {/* Precio a la derecha */}
                <div className="flex items-center gap-4">
                  <p className="text-[#d1191e] text-xl font-bold">
                    ${item.price * item.quantity} USD
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sección de Total */}
          <div className="text-center mt-5 p-4 border-t">
            <h2 className="text-xl font-bold">
              Total:{" "}
              <span className="text-[#d1191e]">${total.toFixed(2)} USD</span>
            </h2>
          </div>
        </>
      )}
      <a href="/" className="text-blue-500 underline m-5 block text-center">
        Volver a la tienda
      </a>
    </div>
  );
};

export default Cart;
