import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
const icons = [
  { name: "instagram", color: "text-red-500", icon: FaInstagram },
  { name: "linkedin", color: "text-blue-500", icon: FaLinkedin },
  { name: "facebook", color: "text-blue-500", icon: FaFacebook },
  { name: "whatsapp", color: "text-green-500", icon: FaWhatsapp },
  { name: "github", color: "text-gray-500", icon: FaGithub },
];

const Presentation = () => {
  return (
    <section
      className="min-h-screen w-full relative bg-linear-to-b  text-white md:flex md:justify-center md:mt-8 lg:mt-0 lg:mx-auto "
      id="init"
    >
      <article className="mx-auto max-w-7xl lg:flex lg:justify-center lg:items-center lg:gap-12 lg:mt-8">
        <div className="contTitle py-4 flex flex-col gap-2 lg:w-[50%] xl:py-auto">
          <h3 className="text-lg font-bold text-(--color-black) font-mono animate__animated animate__backInLeft animate__fast md:text-xl">
            Alan Ruz
          </h3>
          <p className="text-4xl font-bold text-shadow-2xs animate__animated animate__fadeInUp animate__delay-1s text-(--color-secundary) md:text-5xl">
            FRONT END WEB DEVELOPER
          </p>
          <p className="text-(--color-black) animate__animated animate__fadeInUp animate__delay-1s py-4 text-base indent-4 text-left md:text-base/7 lg:text-lg/7 ">
            Mi objetivo como desarrollador front-end es utilizar mis
            conocimientos para optimizar y escalar cualquier sistema, ofreciendo
            soluciones financieras y productivas. 
          </p>
          <a 
          href="../../public/Currículum Vitae Alan Ruz 2025 .pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bottom-0 w-full p-4 rounded-2xl font-bold text-xl bg-white text-(--color-secundary) border-2 transition-all duration-500 hover:-translate-y-1  md:w-1/2 md:text-base lg:px-4 lg:py-2"
          >
            <IoDocumentTextOutline />
            Download CV
          </a>
          <div className="relative z-10 inset-x-0 w-full flex items-center justify-center h-16">
            <ul className=" flex gap-4 absolute justify-center animate__animated animate__backInLeft p-6">
              {icons.map((icon) => {
                return (
                  <li
                    key={icon.name}
                    className={`text-4xl p-2 relative md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:text-5xl hover:-translate-y-1`}
                  >
                    <icon.icon
                      className={`${icon.color} transition-all duration-500`}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-auto flex justify-center items-center lg:justify-end mt-4">
          <div className="animation_div h-70 w-70 rounded-[50%] shadow-2xl shadow-blue-600 overflow-hidden md:h-80 md:w-80 ">
            <img
              src="../../public/perfil.png"
              alt="ImgPerfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
          
      </article>
    </section>
  );
};

export default Presentation;
