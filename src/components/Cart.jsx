import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Cargar el carrito desde localStorage al montar el componente
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calcularTotal(storedCart);
  }, []);

  // Función para calcular el total
  const calcularTotal = (cartItems) => {
    const newTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    setTotal(newTotal);
  };

  // Eliminar producto del carrito y actualizar el total
  const removeFromCart = (index) => {
    const newCart = [...cart];
    const removedItem = newCart.splice(index, 1)[0]; // Obtener el item eliminado
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
    calcularTotal(newCart); // Recalcular el total

    // Mostrar el toast con la imagen y título del producto eliminado
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
      }
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold">Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p className="text-center m-5">El carrito está vacío</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10 place-items-center">
            {cart.map((item, index) => (
              <div
                key={index}
                className="text-center box-border border rounded-md p-4 h-auto w-80 bg-gray-50"
              >
                <img
                  className="h-48 w-full object-contain"
                  src={item.image}
                  alt={item.title}
                />
                <h2 className="font-medium m-5">{item.title}</h2>
                <p className="m-5 text-[#d1191e] text-2xl">${item.price} USD</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-500 text-white h-8 w-37 rounded-md m-5"
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* Sección de Total */}
          <div className="text-center mt-5 p-4 border-t">
            <h2 className="text-xl font-bold">
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
