const Presentation = () => {
  return (
    <section className="bg-linear-to-b from-85% from-(--color-font-p1) to-(--color-font-p2) text-white px-4 pb-4 flex flex-col md:px-8 lg:flex-row lg:py-4 xl:py-6">
      <div className="contTitle py-4 flex flex-col gap-2 lg:w-1/2">
        <h3 className="text-2xl font-bold text-(--color-letters-name) font-mono md:text-4xl" id="init">
          Alan Ruz
        </h3>
        <p className="text-4xl font-bold text-blue-300 text-shadow-2xs text-shadow-blue-50 md:text-6xl">
          FRONT END WEB DEVELOPER
        </p>
        <p className="py-4 text-xl/8 text-justify indent-4 font-light md:text-3xl/11 ">
          Mi objetivo como desarrollador front-end es utilizar mis conocimientos
          para optimizar y escalar cualquier sistema, ofreciendo soluciones
          financieras y productivas.
        </p>
        <ul className="flex gap-4 justify-center p-6">
          <li className="text-4xl md:text-6xl">
            <i className="fab fa-instagram text-red-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1"></i>
          </li>
          <li className="text-4xl md:text-6xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
            <i className="fab fa-linkedin"></i>
          </li>
          <li className="text-4xl md:text-6xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
            <i className="fab fa-facebook text-blue-600"></i>
          </li>
          <li className="text-4xl md:text-6xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
            <i className="fab fa-whatsapp text-green-500"></i>
          </li>
          <li className="text-4xl md:text-6xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
            <i className="fab fa-github text-gray-500"></i>
          </li>
        </ul>
      </div>
      <div className="h-full flex justify-center items-center p-6 lg:w-1/2">
        <img
          src="/public/perfil.png"
          alt="ImgPerfil"
          className="object-contain w-2/3 rounded-full shadow-[10px_-10px_10px_gray,-10px_10px_10px_white] md:w-1/2 lg:w-1/3"
        />
      </div>
    </section>
  );
};

export default Presentation;
