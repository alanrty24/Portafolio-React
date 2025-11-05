import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import "../styles/skills.css";
const Skills = () => {
  const lenguajes = [
    { name: "Html", color: "text-orange-500", icon: FaHtml5 },
    { name: "Css", color: "text-violet-500", icon: FaCss3 },
    { name: "Javascript", color: "text-amber-500", icon: IoLogoJavascript },
    { name: "React", color: "text-blue-500", icon: FaReact },
    { name: "Next.js", color: "text-black", icon: SiNextdotjs },
    { name: "Git", color: "text-orange-600", icon: FaGitAlt },
    { name: "Github", color: "text-gray-500", icon: FaGithub },
    { name: "Html", color: "text-orange-500", icon: FaHtml5 },
    { name: "Css", color: "text-violet-500", icon: FaCss3 },
    { name: "Javascript", color: "text-amber-500", icon: IoLogoJavascript },
    { name: "React", color: "text-blue-500", icon: FaReact },
    { name: "Next.js", color: "text-black", icon: SiNextdotjs },
    { name: "Git", color: "text-orange-600", icon: FaGitAlt },
    { name: "Github", color: "text-gray-500", icon: FaGithub },
  ];

  return (
    <section
      className="min-h-[70vh] flex flex-col justify-center items-center  py-4 "
      id="mySkill"
    >
      <h3 className="text-xl text-center font-bold text-(--color-tertiary) text-shadow-2xs mb-12 text-shadow-blue-50  lg:text-3xl">
        My <span className="text-(--color-secundary)">Skills</span>
      </h3>
      <section className="slider">
        <div className="absolute inset-x-0 h-46 z-20 -top-2 bg-linear-to-b from-white to-transparent overflow-y-hidden md:hidden"></div>
        <article className="slider-slide">
          {lenguajes.map((leg, i) => {
            return (
              <div key={i} className="slider-item w-40 h-auto">
                <div className="p-4 w-full flex flex-col justify-center items-center">
                  <leg.icon className={`text-7xl text-white lg:text-7xl`} />
                  <span className="text-xl font-semibold text-white">
                    {leg.name}
                  </span>
                </div>
              </div>
            );
          })}
        </article>
        <div className="absolute inset-x-0 h-46 z-10 bottom-0 bg-linear-to-t from-white to-transparent overflow-y-hidden md:hidden"></div>
      </section>
    </section>
  );
};

export default Skills;
