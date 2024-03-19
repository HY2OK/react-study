import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectPhoneBookById } from '../../store/features/phoneBook/phoneBook'
import { useState } from 'react'
import PhoneModal from '../../components/Modal/PhoneModal/PhoneModal'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail'

const PhoneDetailPage = () => {
  const { id: userId } = useParams()
  const phoneData = useAppSelector((state) => selectPhoneBookById(state, userId))
  const [editModal, setEditModal] = useState(false)

  return (
    <div className="w-[360px] h-[740px] bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
      <PhoneDetail setEditModal={setEditModal} phoneData={phoneData} />
      {editModal && <PhoneModal setModal={setEditModal} phone={phoneData} />}
    </div>
  )
}

export default PhoneDetailPage
