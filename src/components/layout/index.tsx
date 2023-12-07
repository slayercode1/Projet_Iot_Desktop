import { FC } from 'react'
import Lottie from 'lottie-react'
import balance from '../../assets/lottie/balance.json'
import profilAvatar from '../../assets/images/profil-avatar.svg'
import Tooltip from '../tooltips'
import notification from '../../assets/images/notifications.svg'
import { Link, useNavigate } from 'react-router-dom'
import Select from 'react-select'

interface ILayout {
  onOpen?: () => void
  children: React.ReactNode
}

const Layout: FC<ILayout> = ({ children, onOpen }) => {
  const navigate = useNavigate()
  const path = window.location.pathname
  const diffAlertPATH = path !== '/alert'

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]
  const style = {
    control: (base: any) => ({
      ...base,
      border: 0,
      boxShadow: 'none',
    }),
  }
  return (
    <div className={'relative h-screen'}>
      <div
        className={'absolute right-4 top-4 cursor-pointer flex items-center'}
      >
        <Link to={'/add'} className={'block lg:hidden mr-2 add-link'}>
          Add your plant
        </Link>
        {diffAlertPATH && (
          <div className="relative w-[250px] border border-gray-200 shadow rounded mr-2 lottie-plant-2 ">
            <div
              onClick={onOpen}
              className=" justify-between items-center flex peer min-h-[auto] w-full placeholder-black rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary motion-reduce:transition-none "
            >
              Search plants
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                CTRL K
              </kbd>
            </div>
          </div>
        )}
        <img
          className={'h-8 mr-4'}
          src={notification}
          alt={'notification'}
          onClick={() => navigate('/alert')}
        />
        <Tooltip>
          <img className={'h-8'} src={profilAvatar} alt={'profil-avatar'} />
        </Tooltip>
      </div>
      {diffAlertPATH && (
        <div className={'top-[10%] left-[35%] absolute  lt-center'}>
          <div className={'text-center-responsive'}>
            <p className={'text-[38px] font-light '}>Connect Ta Plante</p>
          </div>
          <p className={'w-[590px] text-[#CCCCCC] font-normal w-wv'}>
            L'application de mesure d'humidité des plantes utilise des capteurs
            IoT pour collecter des données sur l'humidité du sol et de l'air.
            Les données sont transmises à l'application, qui affiche les mesures
            en temps réel et envoie des alertes lorsque l'humidité est trop
            basse ou trop élevée. Cela aide les jardiniers et les agriculteurs à
            prendre des décisions éclairées sur l'arrosage et à optimiser la
            croissance des plantes.
          </p>
          <div className={'flex w-[120%] h-10 mt-[10%] flex-hidden form'}>
            <input
              type="email"
              id="UserEmail"
              placeholder="Plant A"
              className="mr-4 w-[250px] relative block overflow-hidden rounded-md border border-gray-200 px-3 shadow-sm outline-none "
            />
            <Select
              options={options}
              styles={style}
              className={
                'w-[250px] mr-4 border border-gray-200 shadow-sm rounded'
              }
            />
            <button
              type="button"
              className=" font-semibold outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5  "
            >
              Ajouter
            </button>
          </div>
        </div>
      )}
      <Lottie
        animationData={balance}
        className={'h-[540px] w-[540px] absolute lottie-plant-1 lottie-plant'}
      />
      {children}
    </div>
  )
}

export default Layout
