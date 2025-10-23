import React from 'react'

const Input = ({type = "text", placeholder = "",className, children}) => {
  return (
    <div className='flex flex-col gap-2 w-full'>
        <label htmlFor="" className='md:text-xl lg:text-lg'>{children}</label>
        <input type={type} placeholder={placeholder} className={className + " border-2 border-(--color-secundary) p-4 rounded-2xl shadow-2xl outline-0 invalid:text-red-500 invalid:border-r-red-500 focus:border-(--color-font-p2) md:text-xl lg:text-lg lg:py-2 "}/>
    </div>
  )
}

export default Input;