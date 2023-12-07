import Select from 'react-select'
import logo from '../../assets/images/plant_one.svg'

const AddPlant = () => {
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
    <div className={'h-screen relative'}>
      <div className={'flex justify-center items-center h-20'}>
        <h1>Add Plant</h1>
      </div>
      <div className={'flex flex-col justify-center px-2'}>
        <input
          type="email"
          id="UserEmail"
          placeholder="Plant A"
          className="mt-6 relative block overflow-hidden rounded-md border h-[40px] border-gray-200 px-3 shadow-sm outline-none "
        />
        <Select
          options={options}
          styles={style}
          className={'mt-2 border border-gray-200 shadow-sm rounded'}
        />
        <button
          type="button"
          className="mt-4 font-semibold outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5  "
        >
          Ajouter
        </button>
      </div>
      <img
        className={'absolute bottom-0 right-0 -z-50'}
        src={logo}
        alt={'logo'}
      />
    </div>
  )
}

export default AddPlant
