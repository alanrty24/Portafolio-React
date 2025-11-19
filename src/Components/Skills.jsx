import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import Marquee from "react-fast-marquee";

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
  ];

  return (
    <section
      className="min-h-[50vh] overflow-hidden flex flex-col gap-4 justify-center items-center  py-4"
      id="mySkill"
    >
      <h3 className="text-center font-bold text-(--color-tertiary) text-shadow-2xs mb-12 text-shadow-blue-50  text-xl md:text-2xl lg:text-3xl">
        MY <span className="text-(--color-secundary)">SKILLS</span>
      </h3>
      <Marquee
        pauseOnHover={true}
        direction="left"
        speed={30}
        loop={0}
        gradient={true}
        gradientWidth={100}
        className="slider"
      >
        {lenguajes.map((leg, i) => {
          return (
            <div
              key={i}
              className="p-4 bg-(--color-secundary) rounded-xl m-4 flex flex-col justify-center items-center cursor-pointer"
            >
              <div className="flex items-center justify-center">
                <leg.icon className={`text-7xl text-white lg:text-7xl`} />
              </div>
              <span className="text-xl font-semibold text-white">
                {leg.name}
              </span>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Skills;
