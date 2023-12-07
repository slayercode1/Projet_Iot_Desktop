import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import SidePage from '../../components/sidePage'
import Accordion from '../../components/accordion'
import ModalComponent from '../../components/modal'
import ModalSearch from '../../components/modal/modal-search.tsx'
import searchData from '../../utils/function/search.ts'
import SidePageBody from '../partials/side-page.tsx'
import AccordionBody from '../partials/accordion-body.tsx'
import logo from '../../assets/images/plant_one.svg'

const Index = () => {
  // const { t } = useTranslation()
  const [open, setOpen] = useState<boolean>(false)
  const [confirmModal, setConfirmModal] = useState<boolean>(false)
  const [searchModal, setSearchModal] = useState<boolean>(false)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        setConfirmModal(false)
      }
    }
    window.addEventListener('keydown', handleKeydown)

    const openSearchModal = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        setSearchModal(true)
        e.preventDefault()
      }
    }
    window.addEventListener('keydown', openSearchModal)

    const closeSearchModal = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchModal(false)
      }
    }
    window.addEventListener('keydown', closeSearchModal)

    return () => {
      window.removeEventListener('keydown', closeSearchModal)
      window.removeEventListener('keydown', handleKeydown)
      window.removeEventListener('keydown', openSearchModal)
    }
  }, [])
  const handleConfirmModal = () => {
    setConfirmModal(!confirmModal)
  }

  const data: any = [
    {
      question: 'Plant A',
    },
  ]
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  const searchFilter = searchData(data, search) as []

  return (
    <Layout onOpen={() => setSearchModal(!searchModal)}>
      {searchModal && !open && (
        <div
          className={
            searchModal
              ? ' popup bg-black/75 backdrop-blur-sm w-full h-full z-50 absolute flex place-items-center justify-center transition-all duration-200 ease-in-out'
              : ' popup popDown bg-black/75 backdrop-blur-sm w-full h-full z-50 absolute  flex place-items-center justify-center transition-all duration-200 ease-in-out'
          }
        >
          <ModalSearch
            onClose={() => setSearchModal(false)}
            setSearch={handleSearch}
            value={search}
            data={searchFilter}
            onOpen={() => setOpen(true)}
          />
        </div>
      )}
      {confirmModal && (
        <div
          className={
            confirmModal
              ? 'bg-black/75 backdrop-blur-sm w-full h-full z-50 absolute  flex place-items-center justify-center transition-all duration-200 ease-in-out'
              : 'popDown bg-black/75 backdrop-blur-sm w-full h-full z-50 absolute  flex place-items-center justify-center transition-all duration-200 ease-in-out'
          }
        >
          <ModalComponent
            onDelete={() => {
              console.log('delete')
              setConfirmModal(false)
            }}
            onClose={handleConfirmModal}
          />
        </div>
      )}
      <div
        className={
          open
            ? 'popup lg:bg-black/75 lg:backdrop-blur-sm w-full h-full z-50 absolute transition-all duration-200 ease-in-out'
            : ''
        }
      >
        <SidePage open={open}>
          <SidePageBody setOpen={() => setOpen(false)} />
        </SidePage>
      </div>

      <div className="absolute h-[38%] w-full overflow-y-auto bottom-0 no-scrollbar section-responsive">
        {data.length > 0 ? (
          data.map((item: any, index: number) => (
            <Accordion
              key={index}
              title={item.question}
              onDelete={handleConfirmModal}
            >
              <AccordionBody setOpen={() => setOpen(true)} />
            </Accordion>
          ))
        ) : (
          <div className="flex flex-col place-items-center justify-center h-full">
            <p className="text-2xl text-gray-400">No Plant</p>
            <p className="text-2xl text-gray-400">¯\(°_o)/¯</p>
          </div>
        )}
      </div>
      <img
        className={'absolute bottom-0 right-0 -z-50'}
        src={logo}
        alt={'logo'}
      />
    </Layout>
  )
}

export default Index
