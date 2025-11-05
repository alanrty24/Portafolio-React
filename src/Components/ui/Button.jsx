import React from 'react'
import { cn } from '../../lib/utiles';
import { forwardRef } from 'react'

const Button = forwardRef(({type = "button" , variant = "primary" , className, size = "sm" , disabled = false, ...props} , ref) => {

  const variants = {
    primary: "bg-(--color-secundary) text-(--color-primary) text-lg font-bold text-shadow-2xs text-shadow-cyan-600 rounded-2xl hover:cursor-pointer transition-all duration-500 hover:bg-blue-400 hover:outline-2 hover:outline-blue-800 hover:-translate-y-1 md:text-xl md:w-1/2", 
    secundary: "bg-(--color-tertiary) text-(--color-primary) rounded-xl hover:cursor-pointer transition-all duration-500 hover:bg-(--color-secundary) hover:shadow-xl  hover:-translate-y-1 hover:shadow-slate-500 ", 

  }

  const sizes = {
    sm: "p-4 md:p-2",
    md: "p-4 w-1/2",
    lg: ""
  }
  return (
    <button 
        className={cn(className) + variants[variant] + sizes[size]}
        type={type}
        ref={ref}
        disabled = {disabled}
        {...props}
    />
  )
}); 

Button.displayName = "button"; 
export default Button;