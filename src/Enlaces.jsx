import App from "./App";

function Enlaces() {
  return (
    <div className="sticky top-25 z-50">
      <ul className="items-center justify-center flex gap-10 bg-[#82c0cf] h-12">
          <a className="transition delay-150 duration-150 hover:text-[#cf1015]"
           href="">Accesorios</a>
          <p className="text-xs">|</p>
          <a className="transition delay-150 duration-150 hover:text-[#cf1015]"
           href="">Ropa</a>
          <p className="text-xs">|</p>
          <a className="transition delay-150 duration-150 hover:text-[#cf1015]"
           href="">Electrónica</a>
          <p className="text-xs">|</p>
          <a className="transition delay-150 duration-150 hover:text-[#cf1015]"
           href="">Promociones</a>
      </ul>
    </div>
  );
}

export default Enlaces;
