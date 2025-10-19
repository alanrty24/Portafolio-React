import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Presentation = () => {
  return (
    <section
      className="min-h-auto bg-linear-to-b from-85% from-(--color-font-p1) to-(--color-font-p2) text-white px-6 flex flex-col md:py-12  md:px-12 lg:min-h-screen lg:flex-row lg:mx-auto lg:px-30 "
      id="init"
    >
      <div className="mx-auto max-w-7xl lg:flex">
        <div className="contTitle py-4 flex flex-col gap-2 lg:w-[60%] lg:py-20">
          <h3 className="text-2xl font-bold text-(--color-black) font-mono md:text-xl">
            Alan Ruz
          </h3>
          <p className="text-4xl font-bold text-(--color-tertiary) text-shadow-2xs text-shadow-blue-50 md:text-5xl">
            FRONT END WEB DEVELOPER
          </p>
          <p className="text-(--color-black) py-4 text-xl/8 text-justify indent-4 font-light md:text-xl/7 lg:text-xl/7 ">
            Mi objetivo como desarrollador front-end es utilizar mis
            conocimientos para optimizar y escalar cualquier sistema, ofreciendo
            soluciones financieras y productivas.
          </p>
          <ul className="flex gap-4 justify-center p-6 md:justify-start">
            <li className="text-4xl md:text-3xl">
              <FaInstagram className="text-red-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1" />
            </li>
            <li className="text-4xl md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
              <FaLinkedin className="text-blue-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1" />
            </li>
            <li className="text-4xl md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
              <FaFacebook className="text-blue-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1" />
            </li>
            <li className="text-4xl md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
              <FaWhatsapp className="text-green-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1" />
            </li>
            <li className="text-4xl md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1">
              <FaGithub className="text-gray-500 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1" />
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center items-center lg:justify-[start]">
          <div className="h-70 w-70 rounded-[50%] shadow-2xl shadow-blue-600 overflow-hidden md:h-80 md:w-80 lg:h-100 lg:w-100">
            <img
              src="/public/perfil.png"
              alt="ImgPerfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
