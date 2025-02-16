
function Footer() {
  return (
    <footer className="text-lg text-white">
      <div className="bg-[#b40c11] h-27 text-1xl grid grid-cols-2 items-center">
        <div className="pl-52">
          <p className="font-semibold">Suscribite a AxelHurt</p>
          <p className="text-[#e1ddda]">
            Recibí actualizaciones del plan. ¡Te solucionamos los problemas!
          </p>
        </div>
        <div className="pr-52 text-right">
          <input
            className="bg-[#f9e0e2] text-[#eb2d24] h-12 w-90 p-5 "
            type="text"
            placeholder="Dirección de mail"
          />
          <button className=" h-12 p-2 ml-3 border-1 rounded-md transition delay-150 duration-150 hover:bg-[#cf1015]">
            Suscribirme
          </button>
        </div>
      </div>
      <div className="bg-[#cf1015] h-58 grid grid-cols-3 items-center text-center text-base">
        <div className="grid grid-cols-1 text-left pl-52">
            <a className="pb-2" href="">Aviso legal y términos de uso del sitio</a>
            <a className="pb-2" href="">Política de privacidad</a>
            <a className="pb-2" href="">Política de cookies</a>
            <a className="pb-2" href="">Mirá los productos en mi web</a>
        </div>
        <div className="grid grid-cols-1">
            <i className="bi bi-whatsapp pb-5"> +54-3482-230198</i>
            <i className="bi bi-envelope pb-2"> axel12hurt@gmail.com</i>
            <p>Si querés que te respondamos más rápido, escribinos por whatsapp.</p>
        </div>
        <div className="text-2xl pr-52">
            <i className="bi bi-facebook m-4"></i>
            <i className="bi bi-youtube  m-4"></i>
            <i className="bi bi-instagram  m-4"></i>
            <i className="bi bi-tiktok  m-4"></i>
            <p className="pt-6 text-base">® Axel Hurt</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
