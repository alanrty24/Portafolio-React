import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {

  const lenguajes = [
    {name:"Html",color:"text-orange-500",icon:FaHtml5},
    {name:"Css",color:"text-violet-500",icon:FaCss3},
    {name:"Javascript",color:"text-amber-500",icon:IoLogoJavascript},
    {name:"React",color:"text-blue-500",icon:FaReact},
    {name:"Next.js",color:"text-black",icon:SiNextdotjs},
    {name:"Git",color:"text-orange-600",icon:FaGitAlt},
    {name:"Github",color:"text-gray-500",icon:FaGithub},
  ]

  return (
    <section
      className="min-h-[50vh] flex flex-col justify-center items-center py-4 overflow-hidden"
      id="mySkill"
    >
      <h3 className="text-4xl text-center font-bold text-blue-500 text-shadow-2xs text-shadow-blue-50  md:text-5xl">
        My Skills
      </h3>
      <div>
        <ul className="grid grid-rows-4 grid-cols-2 justify-center py-10 gap-4 text-black md:py-8  lg:flex ">
          {
            lenguajes.map(leg => {
              return(
                <li key={leg.name} className={`p-4 border-2 border-(--color-secundary) rounded-xl shadow-2xl flex flex-col items-center justify-center text-black lg:w-40 lg:h-40`}> 
                    <leg.icon className={`text-5xl ${leg.color} lg:text-7xl`}/>
                    <span className="text-lg font-semibold">{leg.name}</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
};

export default Skills;
