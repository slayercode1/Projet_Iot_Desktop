import ChangeLanguage from '../../components/language'
import { Link } from 'react-router-dom'
import Input from '../../components/input'
import { loginFields } from './field-structure.ts'
import background from '../../assets/images/background.png'

const Login = () => {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <img
        src={background}
        alt={'background'}
        className={'image-container hidden lg:block'}
      />
      <div className="max-w-md w-full space-y-8 lg:absolute lg:left-52">
        <div className="mb-10">
          <h2 className="mt-6 relative text-center text-3xl font-extrabold text-gray-900 mb-5">
            Login
          </h2>
          <ChangeLanguage />
        </div>
        <form className="mt-2 space-y-6">
          <div className="-space-y-px">
            {loginFields.map(field => (
              <Input
                key={field.id}
                handleChange={() => {}}
                value={''}
                labelText={field.labelText}
                labelFor={field.labelFor}
                id={field.id}
                name={field.name}
                type={field.type}
                isRequired={field.isRequired}
                placeholder={field.placeholder}
              />
            ))}
          </div>
        </form>
        <button
          type={'submit'}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 outline-none mt-10"
          onSubmit={() => {}}
        >
          Connection
        </button>
        <p className="absolute text-sm text-gray-600 mt-5 transform -translate-x-1/2 left-1/2">
          Don't have an account yet? &nbsp;
          <Link
            to={'/sing-up'}
            className="font-medium text-green-600 hover:text-green-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
