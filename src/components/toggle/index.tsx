import { useState } from 'react'

const Toggle = () => {
  const [toggle, setToggle] = useState(false)
  const toggleClass = ' transform translate-x-5 toggle'
  return (
    <div
      className={`${
        toggle
          ? 'bg-blue-800 md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer toggle'
          : 'bg-gray-800 md:w-14 md:h-7 w-12 h-6 flex items-center rounded-full p-1 cursor-pointer toggle'
      }`}
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <div
        className={
          'bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out toggle' +
          (toggle ? toggleClass : '')
        }
      ></div>
    </div>
  )
}

export default Toggle
