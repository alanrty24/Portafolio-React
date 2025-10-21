import React from 'react'
import { forwardRef } from 'react'

const Button = forwardRef(({type = "button" , variant = "primary" , className, size = "sm" , disabled = true, ...props} , ref) => {

  const variants = {
    primary: "bg-(--color-secundary) text-(--color-primary) text-2xl font-bold text-shadow-2xs text-shadow-cyan-600 rounded-2xl hover:cursor-pointer transition-all duration-500 hover:bg-blue-400 hover:outline-2 hover:outline-blue-800 hover:-translate-y-1 md:text-2xl md:w-1/2"
  }

  const sizes = {
    sm: "p-4",
    md: "",
    lg: ""
  }
  return (
    <button 
        className={className + variants[variant] + sizes[size]}
        type={type}
        ref={ref}
        disabled = {disabled}
        {...props}
    />
  )
}); 

Button.displayName = "button"; 
export default Button;