import React from 'react'

const Input = ({label, type = "text", placeholder = "",className ,name = "", ...props}) => {
  return (
    <div className='flex flex-col gap-2 w-full '>
        {  label && (<label htmlFor="" className='text-base md:text-lg '>{label}</label>)   
        }
        <input type={type} placeholder={placeholder} className={className + " border-2 border-(--color-secundary) p-4 rounded-2xl shadow-2xl outline-0 invalid:text-red-500 invalid:border-red-500 focus:border-(--color-font-p2) text-base md:text-lg lg:py-2 "
        }
        name = {name}
        {...props}
        />
    </div>
  )
}

export default Input;