import "../styles/navbar.css";
import { useState } from "react";
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
const Navbar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen scroll-m-20 relative bg-(--color-primary)">
        {/* Mobile Navbar */}
        <div className={`fixed inset-0 md:z-0  lg:hidden ${isOpen ? "z-20" : "z-0"}`}>
          <div
            className={`fixed inset-0 bg-(--color-primary) transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-50 translate-x-0 " : "opacity-0 -translate-x-full"
            }`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div
            className={`fixed inset-y-0 w-64 bg-(--color-secundary) transition-all duration-500  
                       ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex items-center justify-between p-4">
              <h3 className="text-(--color-primary) font-bold text-xl md:text-2xl lg:text-3xl">
                Alanrty24
              </h3>
              <button className="bg-(--color-primary) rounded-lg p-1 text-lg md:text-xl">
                <HiArrowLeft
                  className="text-(--color-secundary)"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                />
              </button>
            </div>
            <nav className="p-2">
              <ul>
                {seccions.map((seccion) => {
                  return (
                    <li
                      key={seccion.id}
                      className="flex items-center gap-2 text-white text-base px-4 py-2 rounded-xl mb-2 transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary) md:text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      <seccion.icon className="text-lg md:text-xl" />
                      <a href={`/${seccion.href}`} className="w-full">
                        {seccion.id}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden backdrop-blur-2xl lg:fixed lg:z-20 lg:inset-x-0 lg:min-h-16 lg:bg-(--color-primary) lg:border-b-0 lg:shadow-xl lg:flex lg:items-center lg:justify-between lg:px-30 xl:px-60">
          <div>
            <h3 className="text-(--color-tertiary) font-bold text-xl md:text-2xl lg:text-3xl">
              Alan<span className="text-(--color-secundary)">rty24</span>
            </h3>
          </div>
          <nav className="">
            <ul className="flex ">
              {seccions.map((seccion) => {
                return (
                  <li
                    key={seccion.id}
                    className="flex  items-center gap-2 text-black text-xl px-4 py-2 rounded-xl ml-2 transition-all duration-500 hover:bg-(--color-secundary) hover:text-(--color-primary) hover:cursor-pointer lg:gap-1 lg:px-2 "
                    onClick={() => setIsOpen(false)}
                  >
                    <seccion.icon />
                    <a
                      href={seccion.href}
                      className="w-full font-semibold lg:text-lg"
                    >
                      {seccion.id}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Containt */}
        <div className="">
          {/* Header Mobile */}
          <div
            className={`header-navbar fixed z-10 inset-x-0 items-center justify-between py-4 px-6 ${
              isOpen ? "hidden" : "flex"
            } bg-(--color-primary) md:px-20 border-b-0 shadow-2xl lg:hidden`}
          >
            <h3 className="text-3xl text-(--color-tertiary) font-bold">
              Alan<span className="text-(--color-secundary)">rty24</span>
            </h3>
            <div
              className="flex justify-center items-center p-2 rounded-lg bg-(--color-secundary) text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <HiMenu />
            </div>
          </div>
          {/* Contenido */}
          <main className="pt-16 px-8 md:px-20 lg:px-30 xl:px-60 lg:py-0">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Navbar;
