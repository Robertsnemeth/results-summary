import React from 'react'

const Button = ({children}) => {
  return (
    <button className="bg-neutral-dark-gray-blue px-28 py-5 rounded-full w-full h-[60px] flex items-center justify-center text-[18px] font-semibold">{children}</button>
  )
}

export default Button