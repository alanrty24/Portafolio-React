const Skills = () => {
  return (
    <section
      className="bg-linear-to-b from-85% from-(--color-font-p1) p-4 flex flex-col"
      id="mySkill"
    >
      <h3 className="text-4xl text-center font-bold text-blue-300 text-shadow-2xs text-shadow-blue-50 md:text-6xl">
        My Skills
      </h3>
      <div>
        <ul className="grid grid-rows-4 grid-cols-2 justify-center p-6 gap-4 text-white md:py-8 lg:grid-rows-auto lg:grid-cols-3 lg:justify-center lg:gap-x-0 lg:p-12">
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-brands fa-html5 icon text-6xl text-orange-500 md:text-9xl "></i>
            <h3 className="font-bold text-3xl">HTML</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-brands fa-css3-alt icon text-6xl text-purple-600 md:text-9xl "></i>
            <h3 className="font-bold text-3xl">CSS</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-brands fa-js icon text-6xl text-yellow-400 md:text-9xl "></i>
            <h3 className="font-bold text-3xl">JAVASCRIPT</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-brands fa-react icon text-6xl text-blue-500 md:text-9xl "></i>
            <h3 className="font-bold text-3xl">REACT</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-solid fa-code text-6xl text-black md:text-9xl "></i>
            <h3 className="font-bold text-3xl">NEXT.JS</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 md:">
            <i className="fa-brands fa-git-alt icon text-6xl text-orange-600 md:text-9xl "></i>
            <h3 className="font-bold text-3xl">GIT</h3>
          </li>
          <li className="flex flex-col items-center gap-2 p-2 col-span-2 trasition duration-500 hover:cursor-pointer hover:transition hover:-translate-y-1 lg:col-span-3">
            <i className="fa-brands fa-github icon text-6xl text-gray-500 md:text-9xl "></i>
            <h3 className="font-bold  text-3xl">GITHUB</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
