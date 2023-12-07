import React, { FC } from 'react'

interface ITooltip {
  message?: string
  children: React.ReactNode
}

const Tooltip: FC<ITooltip> = ({ message, children }) => {
  return (
    <div className={'group relative flex'}>
      {children}

      <div className="w-[max-content] absolute -top-2 right-[120%]  scale-0 transition-all rounded group-hover:scale-100">
        <div className="mx-auto container max-w-[228px] px-4 py-4 bg-white rounded relative shadow">
          <div className={'flex flex-row items-center'}>
            {message}
            <div className={'w-1/2'}>
              <p className="text-sm font-semibold leading-none text-gray-800">
                John Doe
              </p>
              <p>@John-Doe</p>
            </div>

            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tooltip
