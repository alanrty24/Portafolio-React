import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
const icons = [
  {name:"instagram",color:"text-red-500",icon:FaInstagram},
  {name:"linkedin",color:"text-blue-500",icon:FaLinkedin},
  {name:"facebook",color:"text-blue-500",icon:FaFacebook},
  {name:"whatsapp",color:"text-green-500",icon:FaWhatsapp},
  {name:"github",color:"text-gray-500", icon:FaGithub},

]

const Presentation = () => {
  return (
    <section
      className="min-h-[80vh] bg-linear-to-b from-85% from-(--color-font-p1) md:py-25 to-(--color-font-p2) text-white flex md:justify-center lg:flex-row lg:items-center lg:mx-auto "
      id="init"
    >
      <div className="mx-auto max-w-7xl lg:flex">
        <div className="contTitle py-4 flex flex-col gap-2 lg:w-[100%] xl:py-auto">
          <h3 className="text-lg font-bold text-(--color-black) font-mono animate__animated animate__backInLeft animate__fast md:text-xl">
            Alan Ruz
          </h3>
          <p className="text-4xl font-bold text-shadow-2xs animate__animated animate__backInLeft animate__delay-1s text-(--color-secundary) md:text-5xl">
            FRONT END WEB DEVELOPER
          </p>
          <p className="text-(--color-black) animate__animated animate__backInLeft animate__delay-1s py-4 text-lg text-justify indent-4 md:text-xl/7 lg:text-xl/7 ">
            Mi objetivo como desarrollador front-end es utilizar mis
            conocimientos para optimizar y escalar cualquier sistema, ofreciendo
            soluciones financieras y productivas.
          </p>
          <ul className="flex gap-4 justify-center animate__animated animate__backInLeft p-6">
            {
              icons.map(icon => {
                return (
                  <li key={icon.name} className={`text-4xl md:text-3xl trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1`}>
                    <icon.icon className={`${icon.color} trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1`} />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="w-full flex justify-center items-center lg:justify-end">
          <div className="animation_div h-70 w-70 rounded-[50%] shadow-2xl shadow-blue-600 overflow-hidden md:h-80 md:w-80 ">
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
