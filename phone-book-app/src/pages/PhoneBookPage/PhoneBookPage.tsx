import { useState } from 'react'
import PhoneBookInput from '../../components/PhoneBookInput/PhoneBookInput'
import PhoneBookItem from '../../components/PhoneBookItem/PhoneBookItem'
import AddPhoneModal from '../../components/AddPhoneModal/AddPhoneModal'
import { useAppSelector } from '../../store/hooks'
import { selectAllPhoneBooks } from '../../store/features/phoneBook/phoneBook'

const PhoneBookPage = () => {
  const allPhoneBooks = useAppSelector(selectAllPhoneBooks)
  const [addModal, setAddModal] = useState(false)

  return (
    <>
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
      {addModal && <AddPhoneModal setAddModal={setAddModal} />}
    </>
  )
}

export default PhoneBookPage
