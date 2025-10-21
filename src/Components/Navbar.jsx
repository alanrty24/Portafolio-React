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
const Navbar = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-(--color-primary)">
        {/* Mobile Navbar */}
        <div
          className={`fixed inset-0 z-10 ${isOpen ? "block" : "hidden"}`}
        >
          <div
            className="fixed inset-0 bg-(--color-primary) opacity-50"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="fixed inset-y-0 w-64 bg-(--color-secundary)">
            <div className="flex items-center justify-between p-4 text-3xl">
              <h3 className="text-(--color-primary) font-bold">Alanrty24</h3>
              <button className="bg-(--color-primary) rounded-lg p-1" >
                <HiArrowLeft className="text-(--color-secundary)" onClick={() => {setIsOpen(false)}}/>
              </button>
            </div>
            <nav className="p-2">
              <ul>
                {
                  seccions.map(seccion => {
                    return (
                      <li key={seccion.id} 
                      className="flex items-center gap-2 text-white text-xl px-4 py-2 rounded-xl mb-2 transition-all duration-500 hover:bg-(--color-primary) hover:text-(--color-tertiary)"
                      onClick={() => setIsOpen(false)}
                      >
                        <seccion.icon />
                        <a href={seccion.href} className="w-full">{seccion.id}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:fixed lg:z-10 lg:inset-x-0 lg:min-h-16 lg:bg-(--color-primary) lg:border-b-0 lg:shadow-xl lg:flex lg:items-center lg:justify-between lg:px-30 xl:px-60">
            <div>
              <h3 className="text-2xl text-(--color-tertiary) font-bold">Alan<span className="text-(--color-secundary)">rty24</span></h3>
            </div>
            <nav className="">
              <ul className="flex ">
                {
                  seccions.map(seccion => {
                    return (
                      <li key={seccion.id} 
                      className="flex  items-center gap-2 text-black text-xl px-4 py-2 rounded-xl ml-2 transition-all duration-500 hover:bg-(--color-secundary) hover:text-(--color-primary) hover:cursor-pointer lg:gap-1 lg:px-2 "
                      onClick={() => setIsOpen(false)}
                      >
                        <seccion.icon />
                        <a href={seccion.href} className="w-full font-semibold lg:text-lg">{seccion.id}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </nav>
        </div>

        {/* Containt */}
        <div className="">
          {/* Header Mobile */}
          <div className={`fixed z-10 inset-x-0 flex items-center justify-between py-4 px-6 ${isOpen ? "hidden" : "flex"} bg-(--color-primary) md:px-20 border-b-0 shadow-2xl lg:hidden`}>
            <h3 className="text-3xl text-(--color-tertiary) font-bold">Alan<span className="text-(--color-secundary)">rty24</span></h3>
            <div 
            className="flex justify-center items-center p-2 rounded-lg bg-(--color-secundary) text-white"
            onClick={() => setIsOpen(!isOpen)}>
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
