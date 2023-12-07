import React, { FC, useState } from 'react'
import trash from '../../assets/images/trash.svg'
import emoji from '../../assets/images/ion_happy.svg'

interface IAccordion {
  title: string
  children: React.ReactNode
  onDelete?: () => void
}

const Accordion: FC<IAccordion> = ({ title, children, onDelete }) => {
  const [isActive, setIsActive] = useState(false)
  const handleToggleActive = () => {
    setIsActive(!isActive)
  }

  return (
    <div className="mx-8">
      <div
        className={`padding-responsive border border-gray-200 overflow-hidden cursor-pointer bg-white hover:bg-gray-200 p-2 mb-2 shadow rounded-md  duration-200  w-full group ${
          isActive ? 'is-active bg-white hover:bg-white' : ''
        }`}
      >
        <div className="flex items-center">
          <div
            onClick={handleToggleActive}
            className="w-full duration-200 font-medium flex"
          >
            <img src={emoji} alt={'icon'} className={'mr-2'} />
            {title}
          </div>

          <div className={'flex'}>
            <svg
              className="h-5 w-5 shrink-0 transition duration-300  group-[.is-active]:-rotate-180 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>

            <img
              className="h-5 w-5 "
              src={trash}
              alt={'delete'}
              onClick={onDelete}
            />
          </div>
        </div>
        <div className="overflow-hidden max-h-0 duration-200 group-[.is-active]:max-h-[100px] group-[.is-active]:mt-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Accordion
