
const Foot = () => {
    return(
      <>
        <h3>&copy; My portafolio 2025</h3>
        <ul
          className="grid grid-cols-2 grid-rows-3 gap-2 p-2 text-white transition-all duration-500 justify-center md:flex md:gap-6 md:p-4"
        >
          <li
            className="text-lg flex justify-center items-center transition-all duration-500 hover:cursor-pointer md:text-xl md:hover:-translate-y-1"
          >
            <a href="#init">Inicio</a>
          </li>
          <li className="text-lg flex justify-center items-center transition-all duration-500 hover:cursor-poi md:text-xl md:hover:-translate-y-1">
            <a href="#aboutMe">About Me</a>
          </li>
          <li className="text-lg flex justify-center items-center transition-all duration-500 hover:cursor-poi md:text-xl md:hover:-translate-y-1">
            <a href="#mySkill">My Skills</a>
          </li>
          <li className="text-lg flex justify-center items-center transition-all duration-500 hover:cursor-poi md:text-xl md:hover:-translate-y-1">
            <a href="#myProjects">My Projects</a>
          </li>
          <li className="text-lg flex justify-center items-center transition-all duration-500 col-span-2 text-center hover:cursor- md:text-xl md:hover:-translate-y-1">
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </>
    )
}

export default Foot; 