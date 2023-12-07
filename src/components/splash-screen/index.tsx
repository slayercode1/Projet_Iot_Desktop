import Lottie from 'lottie-react'
import balance from '../../assets/lottie/balance.json'
import logo from '../../assets/images/plant_one.svg'

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen transition-all duration-300 ease-out relative">
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex justify-center items-center space-x-1 text-2xl text-gray-700">
          <svg
            fill="none"
            className="w-10 h-10 animate-spin"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <Lottie
            animationData={balance}
            autoplay={false}
            className={
              'h-[540px] top-0 left-2 w-[540px] absolute lottie-plant-1'
            }
          />

          <div>Loading ...</div>
          <img
            className={'absolute bottom-0 right-0 h-[60%] lottie-plant-2'}
            src={logo}
            alt={'logo'}
          />
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
