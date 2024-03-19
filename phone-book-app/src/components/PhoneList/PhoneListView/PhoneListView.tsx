import {
  PhoneState,
  selectAllPhoneBooks,
} from '../../../store/features/phoneBook/phoneBook'
import { useAppSelector } from '../../../store/hooks'
import PhoneItem from './PhoneItem/PhoneItem'

const PhoneListView = () => {
  const allPhoneBooks: PhoneState[] = useAppSelector(selectAllPhoneBooks)

  return (
    <div className="overflow-scroll no-scrollbar">
      <ul className="w-full flex flex-col justify-center gap-3 ">
        {allPhoneBooks.map((phoneBook) => (
          <PhoneItem key={phoneBook.id} id={phoneBook.id} name={phoneBook.name} />
        ))}
      </ul>
    </div>
  )
}

export default PhoneListView
