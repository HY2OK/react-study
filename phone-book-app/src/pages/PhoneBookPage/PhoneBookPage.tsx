import { useState } from 'react'
import PhoneBookInput from '../../components/PhoneBookInput/PhoneBookInput'
import PhoneBookItem from '../../components/PhoneBookItem/PhoneBookItem'
import { useAppSelector } from '../../store/hooks'
import { PhoneState, selectAllPhoneBooks } from '../../store/features/phoneBook/phoneBook'
import PhoneModal from '../../components/PhoneModal/PhoneModal'
import SearchModal from '../../components/SearchModal/SearchModal'

const PhoneBookPage = () => {
  const allPhoneBooks: PhoneState[] = useAppSelector(selectAllPhoneBooks)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <div className="w-[360px] h-[740px] grid grid-rows-10 bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
      <div className="row-span-1">
        <PhoneBookInput
          setAddModalOpen={setAddModalOpen}
          setSearchModalOpen={setSearchModalOpen}
        />
      </div>
      <div className="row-span-9 overflow-scroll">
        <ul className="w-full flex flex-col justify-center gap-3 ">
          {allPhoneBooks &&
            allPhoneBooks.map((phoneBook) => (
              <PhoneBookItem key={phoneBook.id} name={phoneBook.name} id={phoneBook.id} />
            ))}
        </ul>
      </div>
      {addModalOpen && <PhoneModal setModal={setAddModalOpen} phone={null} />}
      {searchModalOpen && <SearchModal setSearchModalOpen={setSearchModalOpen} />}
    </div>
  )
}

export default PhoneBookPage
