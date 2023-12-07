import close from '../../assets/images/close-outline.svg'
import Lottie from 'lottie-react'
import animationData from '../../assets/lottie/pousse.json'
import SvgCircle from '../../components/svg'
import logo from '../../assets/images/plant_one.svg'
import { FC, useEffect } from 'react'
import { supabase } from '../../config/supabaseClient.ts'

interface ISidePageBody {
  setOpen: () => void
}
const SidePageBody: FC<ISidePageBody> = ({ setOpen }) => {
  useEffect(() => {
    getCapteurs()
  }, [])

  async function getCapteurs() {
    const { data } = await supabase
      .from('Capteur humidité')
      .select('*')
      .limit(1)

    console.log(data)
  }
  return (
    <div>
      <div
        className={
          'flex flex-row justify-items-center items-center w-full px-4 py-2 bg-white'
        }
      >
        <div className={'absolute top-1'}>
          <p className={'text-[32px] font-extrabold'}>Plant A</p>
          <p className={'text-[14px]  text-[#CCCCCC] font-normal '}>
            385420f0-7b55-4c2d-bb1b-8f9081ebdc9a
          </p>
        </div>
        <div
          className={
            'font-normal box-border absolute w-8 h-8 bg-gray-200 rounded-lg border-2 border-black right-4 cursor-pointer'
          }
          onClick={setOpen}
        >
          <img src={close} alt={'X'} />
        </div>
      </div>
      <div className="circle-background lottie-plant-1"></div>
      <Lottie
        animationData={animationData}
        className={'h-[250px] w-[350px] absolute top-[90px] lottie-plant-1'}
      />
      <div className={'absolute right-[90px] top-[15%] center '}>
        <SvgCircle value={500} height={213} />
      </div>
      <img
        className={'absolute bottom-0 right-0 h-[60%] lottie-plant-2'}
        src={logo}
        alt={'logo'}
      />

      <section
        className={
          ' h-[55%] bottom-0 absolute left-0 right-0 p-6 overflow-y-auto '
        }
      >
        <div className={'w-[70%]'}>
          <ol className="relative border-l border-gray-200">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                Flowbite Application UI v2.0.0
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
                  Latest
                </span>
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on January 13th, 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-500">
                Get access to over 20+ pages including a dashboard layout,
                charts, kanban board, calendar, and pre-order E-commerce &
                Marketing pages.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Download ZIP
              </a>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500 ">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900 ">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Flowbite Figma v1.3.0
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on December 7th, 2021
              </time>
              <p className="text-base font-normal text-gray-500">
                All of the pages and components are first designed in Figma and
                we keep a parity between the two versions even as we update the
                project.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h3 className="mb-1 text-lg font-semibold text-gray-900">
                Flowbite Library v1.2.2
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                Released on December 2nd, 2021
              </time>
              <p className="text-base font-normal text-gray-500 ">
                Get started with dozens of web components and interactive
                elements built on top of Tailwind CSS.
              </p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  )
}
export default SidePageBody
