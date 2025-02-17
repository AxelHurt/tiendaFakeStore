import { Link } from "react-router-dom";

function Header({ setSearch }) {

  return (
    <header className="bg-[#cf1015] text-white h-25 sticky top-0 z-50 grid grid-cols-3 items-center px-5">
      <div></div>

      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold uppercase text-[#e7e7e7]">
          Fake Store
        </h1>
      </div>

      <div className="flex justify-end items-center gap-3 pr-30 ">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-[#f9e0e2] text-[#eb2d24] h-12 w-90 p-5 border-1 rounded-md"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-2xl">
          <i className="bi bi-search"></i>
        </button>
        <Link className="text-2xl" to="/cart">
          <i className="bi bi-basket2-fill"></i>
        </Link>
        <button className="text-2xl">
          <i className="bi bi-person-fill"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
