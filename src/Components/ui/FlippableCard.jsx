import React from "react";
import { useState } from "react";

const FlippableCard = ({ fromContent, backContent, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => setIsActive(true);

  const handleMouseLeave = () => setIsActive(false);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {/* Contenedor interno */}
      <div
        className={`h-auto border-2 border-white rounded-2xl p-4 flex justify-center items-center text-white bg-(--color-secundary) transition-all duration-500 ease-in-out  ${
          isActive ? "rotate-y-180" : "rotate-y-0"
        }`}
      >
        {/* Cara Delantera */}
        <div
          className={`absolute transition-all duration-500 ease-in-out  ${
            isActive ? "opacity-0" : "opacity-100"
          }`}
        >
          {fromContent}
        </div>

        {/* Cara Posterior */}
        <div
          className={`rotate-y-180 transition-all duration-500 ease-in-out ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
