import { useState } from 'react'
import PhoneBookInput from '../../components/PhoneBookInput/PhoneBookInput'
import PhoneBookItem from '../../components/PhoneBookItem/PhoneBookItem'
import { useAppSelector } from '../../store/hooks'
import { PhoneState, selectAllPhoneBooks } from '../../store/features/phoneBook/phoneBook'
import PhoneModal from '../../components/PhoneModal/PhoneModal'

const PhoneBookPage = () => {
  const allPhoneBooks: PhoneState[] = useAppSelector(selectAllPhoneBooks)
  console.log(allPhoneBooks)
  const [addModal, setAddModal] = useState(false)

  return (
    <div className="w-[360px] h-[740px] grid grid-rows-10 bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
      <div className="row-span-1">
        <PhoneBookInput setAddModal={setAddModal} />
      </div>
      <div className="row-span-9 overflow-scroll">
        <ul className="w-full flex flex-col justify-center gap-3 ">
          {allPhoneBooks &&
            allPhoneBooks.map((phoneBook) => (
              <PhoneBookItem key={phoneBook.id} name={phoneBook.name} id={phoneBook.id} />
            ))}
        </ul>
      </div>
      {addModal && <PhoneModal setModal={setAddModal} phone={null} />}
    </div>
  )
}

export default PhoneBookPage
