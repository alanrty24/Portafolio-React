const Myprojects = () => {
  const proyectos = [
    {name: "proyecto1", href:""},
    {name: "proyecto2", href:""},
    {name: "proyecto3", href:""},
  ]
  return (
    <section className="grid grid-rows-[4rem_minmax(0,1fr)] gap-4 py-6 min-h-screen max-w-7x" id="myProjects">
      <h3 className="text-center text-4xl text-white text-shadow-md text-shadow-black font-bold md:text-5xl ">My Projects</h3>
      <div className="grid grid-cols-1 min-h-[50%] gap-4 lg:grid-cols-2">
        {
          proyectos.map(p => {
            return(
              <div key={p.name} className="flex items-center justify-center px-4 py-8 border-2 border-(--color-secundary) rounded-2xl shadow-2xl">
                <a href={p.href}>{p.name}</a>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Myprojects;
