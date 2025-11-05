import { FaGithub } from "react-icons/fa"; 
import Button from "./ui/Button"

const Myprojects = () => {
  const proyectos = [
    { name: "Finance Track", href: "" ,date: "2025/09/19"},
    { name: "Jucama Page", href: "",date: "2025/09/25"},
    { name: "Ecommers", href: "",date: "2025/08/25"},
  ];
  return (
    <section
      className="grid grid-rows-[4rem_minmax(0,1fr)] gap-4 py-6 min-h-[50vh] max-w-7x"
      id="myProjects"
    >
      <h3 className="text-center text-xl text-(--color-tertiary) font-bold ">
        My <span className="text-(--color-secundary)">Projects</span>
      </h3>
      <div className="grid grid-cols-1 min-h-[50%] gap-8 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((p) => {
          return (
            <section
              key={p.name}
              className="flex flex-col items-center justify-center px-4 py-8 shadow-slate-500 border-(--color-secundary)  rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-blue-500 "
            >
              <article className="p-4 h-48 w-full rounded-xl shadow-slate-500 shadow-2xl animate-pulse bg-(--color-primary)">

              </article>
              <article className="p-4 w-full flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-mono">{p.name}</h3>
                  <time className="text-sm font-light">{p.date}</time>
                </div>
                <a className="px-4 transition-all duration-500 hover:cursor-pointer hover:-translate-y-1" href="#">
                  <FaGithub className="text-4xl"/>
                </a>
              </article>
              <Button variant="secundary" className={`w-1/2 text-xl font-bold lg:text-base lg:mt-4 `}> 
                  view
              </Button>
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default Myprojects;
