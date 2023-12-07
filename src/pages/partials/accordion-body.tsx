import Toggle from '../../components/toggle'
import expand from '../../assets/images/expand.svg'
import { FC } from 'react'

interface IAccordionBody {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccordionBody: FC<IAccordionBody> = ({ setOpen }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start w-[35%]">
              Identifiant
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-start">
              Température d’humidité
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-end w-1">
              Notification
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-end w-1">
              Voir Plus
            </th>
          </tr>
        </thead>

        <tbody
          className="divide-y divide-gray-200"
          onClick={(event: React.MouseEvent<HTMLTableSectionElement>) => {
            const target = event.target as HTMLElement
            if (
              target instanceof HTMLElement &&
              !target.classList.contains('toggle')
            ) {
              setOpen(true)
            }
          }}
        >
          <tr>
            <td className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
              385420f0-7b55-4c2d-bb1b-8f9081ebdc9a
            </td>
            <td className="whitespace-nowrap font-normal px-4 py-2 text-gray-700">
              50%
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 toggle">
              <Toggle />
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700 flex items-center justify-center">
              <img className="h-5 w-5" src={expand} alt="expand" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AccordionBody
