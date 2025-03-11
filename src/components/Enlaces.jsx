import { Link } from "react-router-dom";

function Enlaces() {
  return (
    <div className="sticky top-25 z-50">
      <ul className="items-center justify-center flex gap-10 bg-[#82c0cf] h-12">
        <Link
          className="transition delay-150 duration-150 hover:text-[#cf1015]"
          to="/"
        >
          PáginaPrincipal
        </Link>
        <p className="text-xs">|</p>
        <Link
          className="transition delay-150 duration-150 hover:text-[#cf1015]"
          to="/cart"
        >
          Carrito
        </Link>
        <p className="text-xs">|</p>
        <Link
          className="transition delay-150 duration-150 hover:text-[#cf1015]"
          to="/addproduct"
        >
          AñadirProducto
        </Link>
      </ul>
    </div>
  );
}

export default Enlaces;
