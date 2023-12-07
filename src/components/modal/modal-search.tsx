import { FC, useEffect, useRef } from 'react'
import { stockRecentSearch } from '../../utils/function/recent-search.ts'

interface IModalSearch {
  onClose: () => void
  onOpen: () => void
  setSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  data: []
}

const ModalSearch: FC<IModalSearch> = ({
  onClose,
  setSearch,
  value,
  data,
  onOpen,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleOpenSidePage = () => {
    onClose()
    onOpen()
  }
  const handleBlur = () => {
    if (value === '') return
    stockRecentSearch(value)
  }

  const recentSearchData = stockRecentSearch()
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div
      aria-hidden="true"
      className={'transition-all duration-300 ease-in-out'}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-start justify-between p-4 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">
              <div className="relative w-[595px]">
                <input
                  onChange={setSearch}
                  value={value}
                  ref={inputRef}
                  onBlur={handleBlur}
                  type="search"
                  className="peer block min-h-[auto] w-full placeholder-black rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear  peer-focus:text-primary motion-reduce:transition-none "
                  placeholder="Search plants"
                />
              </div>
            </h3>
            <button
              onClick={onClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4">
            {value ? (
              data.length > 0 ? (
                <div
                  onClick={() => {
                    handleOpenSidePage()
                  }}
                >
                  <p className={'font-bold text-xl leading-relaxed text-black'}>
                    Recent
                  </p>
                  {data?.map((item: any) => (
                    <div
                      key={item.id}
                      className={
                        'p-3 hover:bg-blue-800 hover:rounded hover:text-white hover:transition-all hover:duration-100 hover:ease-in-out'
                      }
                    >
                      <p className="text-base leading-relaxed text-gray-500 hover:text-white">
                        {item.question}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-relaxed text-gray-500">
                  No results found for &quot;{value}&quot;. Try checking your
                </p>
              )
            ) : (
              <div
                onClick={() => {
                  handleOpenSidePage()
                }}
              >
                <p className={'font-bold text-xl leading-relaxed text-black'}>
                  Recent
                </p>
                {recentSearchData?.map((item: any) => (
                  <div
                    key={item.id}
                    className={
                      'p-3 hover:bg-blue-800 hover:rounded hover:text-white hover:transition-all hover:duration-100 hover:ease-in-out'
                    }
                  >
                    <p className="text-base leading-relaxed text-gray-500 hover:text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center justify-end p-6 space-x-2 border-t border-gray-200 rounded-b">
            <p className="text-gray-500">
              Press{' '}
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                ESC
              </kbd>{' '}
              to exit
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalSearch
