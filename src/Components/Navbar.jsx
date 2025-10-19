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

// Esto es un cambio 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="mx-auto max-w-7x">
        <div className= "fixed top-0 inset-x-0 flex items-center justify-between p-6 bg-(--color-primary) md:px-12 lg:hidden">
          <h3
            className={`font-bold text-3xl text-shadow-2xs text-shadow-blue-200 md:text-4xl md:text-shadow-sm md:text-shadow-blue-200`}
          >
            Alanrty24
          </h3>
          <div
            className={`flex justify-center items-center bg-(--color-tertiary) p-2 rounded-xl lg:hidden`}
          >
            <HiMenu
              className={`text-2xl text-white`}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
        {/* Mobile Firts */}
        <div
          className={`fixed inset-0 z-10 lg:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            className={`fixed inset-0 bg-(--color-primary) z-10 opacity-50`}
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div
            className={`fixed inset-y-0 w-64 bg-(--color-secudary) z-10 border-0 shadow flex flex-col gap-4 p-4`}
          >
            <div className="flex justify-between text-3xl items-center">
              <h3 className="text-white font-bold">Alanrty24</h3>
              <div
                className={`flex justify-center items-center w-7 h-7 bg-white rounded-lg p-2 text-lg`}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <HiArrowLeft className="text-md" />
              </div>
            </div>
            <ul className="w-full flex flex-col text-xl gap-4">
              <li
                className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                onClick={() => setIsOpen(false)}
              >
                <HiHome />
                <a href="#init" className="w-full">
                  Inicio
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                onClick={() => setIsOpen(false)}
              >
                <HiDesktopComputer />
                <a href="#aboutMe" className="w-full">
                  About Me
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                onClick={() => setIsOpen(false)}
              >
                <HiCode />
                <a href="#mySkill" className="w-full">
                  My Skills
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                onClick={() => setIsOpen(false)}
              >
                <HiCube />
                <a href="#myProjects" className="w-full">
                  My Projects
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-white px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                onClick={() => setIsOpen(false)}
              >
                <HiChatAlt />
                <a href="#contactMe" className="w-full">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop  */}
        <div
          className={`hidden lg:fixed lg:top-0 lg:inset-x-0 lg:py-8 lg:bg-(--color-primary)  lg:flex  lg:z-10`}
        >
          <div className="mx-auto max-w-7xl lg:flex lg:gap-12">
            <div>
              <h3
                className={`font-bold text-3xl text-shadow-2xs text-shadow-blue-200 md:text-4xl md:text-shadow-sm md:text-shadow-blue-200`}
              >
                Alanrty24
              </h3>
              <div
                className={`flex justify-center items-center bg-(--color-tertiary) p-2 rounded-xl lg:hidden`}
              >
                <HiMenu
                  className={`text-2xl text-white`}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            </div>
            <ul className="lg:h-full lg:flex lg:items-center lg:text-xl lg:gap-4">
              <li
                className="flex items-center gap-2 text-black px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-secudary) hover:text-(--color-primary)"
                onClick={() => setIsOpen(false)}
              >
                <HiHome className="text-2xl" />
                <a href="#init" className="w-full text-lg">
                  Inicio
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-black px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-secudary) hover:text-(--color-primary)"
                onClick={() => setIsOpen(false)}
              >
                <HiDesktopComputer className="text-2xl" />
                <a href="#aboutMe" className="w-full text-lg">
                  About Me
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-black px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-secudary) hover:text-(--color-primary)"
                onClick={() => setIsOpen(false)}
              >
                <HiCode className="text-2xl" />
                <a href="#mySkill" className="w-full text-lg">
                  My Skills
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-black px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-secudary) hover:text-(--color-primary)"
                onClick={() => setIsOpen(false)}
              >
                <HiCube className="text-2xl" />
                <a href="#myProjects" className="w-full text-lg">
                  My Projects
                </a>
              </li>
              <li
                className="flex items-center gap-2 text-black px-4 py-2 rounded-xl transition-all duration-500 hover:bg-(--color-secudary) hover:text-(--color-primary)"
                onClick={() => setIsOpen(false)}
              >
                <HiChatAlt className="text-2xl" />
                <a href="#contactMe" className="w-full text-lg">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
