import React, { Dispatch, SetStateAction } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import DetailPhoneData from './DetailPhoneData/DetailPhoneData'
import { PhoneState } from '../../store/features/phoneBook/phoneBook'
import { useNavigate } from 'react-router-dom'
import DetailButtons from './DetailButtons/DetailButtons'

interface Props {
  setEditModal: Dispatch<SetStateAction<boolean>>
  phoneData: PhoneState
}

const PhoneDetail: React.FC<Props> = ({ setEditModal, phoneData }) => {
  const navigate = useNavigate()

  return (
    <div className="w-full h-full py-8">
      <div
        onClick={() => navigate(-1)}
        className="absolute top-8 left-5 cursor-pointer text-2xl"
      >
        <IoIosArrowBack />
      </div>

      <DetailPhoneData phoneData={phoneData} />

      <DetailButtons setEditModal={setEditModal} id={phoneData.id} />
    </div>
  )
}

export default PhoneDetail
