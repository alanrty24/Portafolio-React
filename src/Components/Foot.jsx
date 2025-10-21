import {
  HiArrowLeft,
  HiChatAlt,
  HiCode,
  HiCube,
  HiDesktopComputer,
  HiHome,
  HiMenu,
} from "react-icons/hi";

const seccions = [
  { id: "Inicio", href: "#init", icon: HiHome },
  { id: "About Me", href: "#aboutMe", icon: HiDesktopComputer },
  { id: "My Skills", href: "#mySkill", icon: HiCode },
  { id: "My Projects", href: "#myProjects", icon: HiCube },
  { id: "Contact Me", href: "#contactMe", icon: HiChatAlt },
];

const Foot = () => {
  return (
    <>
      <footer className="flex flex-col items-center gap-4 bg-(--color-secundary) p-4">
        <h3 className="text-(--color-primary) md:text-xl">&copy; My portafolio 2025</h3>
        <ul className="flex flex-wrap gap-2 p-2 text-black transition-all duration-500 justify-center md:grid md:grid-cols-2 md:gap-6 md:p-4">
          {seccions.map((seccion) => {
            return (
              <li
                key={seccion.id}
                className="flex items-center gap-2 text-xl px-4 py-2 rounded-xl mb-2 transition-all duration-500 bg-(--color-primary) text-(--color-tertiary) md:p-0 md:bg-(--color-secundary) md:text-(--color-primary)"
              >
                <div className="hidden md:flex md:items-center md:gap-2">
                  <seccion.icon />
                  <a href={seccion.href} className="">
                    {seccion.id}
                  </a>
                </div>
                <div className="md:hidden">
                  <a href={seccion.href} className="w-full"><seccion.icon /></a>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
};

export default Foot;
