const Navbar = () => {
  function handleClick() {
    const list = document.querySelector("#listMenu");
    if (list) {
      list.classList.toggle("hidden");
      list.classList.toggle("flex");
    }
  }

  return (
    <>
      <nav className="flex justify-between items-center text-2xl text-(--color-letters-title) ">
        <h3 className="font-bold text-3xl text-shadow-2xs text-shadow-blue-200 md:text-4xl md:text-shadow-sm md:text-shadow-blue-200" >
          Alanrty24
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 font-bold hover:cursor-pointer lg:hidden"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <ul
          id="listMenu"
          className="flex-col rounded-2xl hidden gap-2 right-1/8 text-white absolute top-3/4 bg-blue-400 p-4 transition-all delay-500 lg:flex lg:static  lg:flex-row  lg:bg-(--color-font-p1)  lg:gap-4 md:text-xl  lg:text-blue-300 "
        >
          <li
            className="text-xl hover:cursor-pointer md:hover:border-solid md:hover:border-b-2 md:hover:border-amber-50 md:text-2xl"
          >
            <a href="#init">Inicio</a>
          </li>
          <li className="text-xl hover:cursor-pointer md:hover:border-solid md:hover:border-b-2 md:hover:border-amber-50 md:text-2xl">
            <a href="#aboutMe">About Me</a>
          </li>
          <li className="text-xl hover:cursor-pointer md:hover:border-solid md:hover:border-b-2 md:hover:border-amber-50 md:text-2xl">
            <a href="#mySkill">My Skills</a>
          </li>
          <li className="text-xl hover:cursor-pointer md:hover:border-solid md:hover:border-b-2 md:hover:border-amber-50 md:text-2xl">
            <a href="#">My Projects</a>
          </li>
          <li className="text-xl hover:cursor-pointer md:hover:border-solid md:hover:border-b-2 md:hover:border-amber-50 md:text-2xl">
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
