import React, { Dispatch, SetStateAction } from 'react'
import { MdDeleteOutline, MdOutlineEdit } from 'react-icons/md'
import { useAppDispatch } from '../../../store/hooks'
import { deletePhoneBook } from '../../../store/features/phoneBook/phoneBook'
import { useNavigate } from 'react-router-dom'

interface Props {
  setEditModal: Dispatch<SetStateAction<boolean>>
  id: string
}

const DetailButtons: React.FC<Props> = ({ setEditModal, id }) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const deletePhoneData = (id: string) => {
    dispatch(deletePhoneBook(id))
    navigate('/')
  }

  return (
    <div className="absolute w-full bottom-8 left-1/2 translate-x-[-50%] flex justify-center items-center gap-20 px-8 text-sm font-bold text-indigo-900">
      <button
        className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        onClick={() => setEditModal((prev) => !prev)}
      >
        <MdOutlineEdit className="text-xl" />
        수정
      </button>
      <button
        className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        onClick={() => deletePhoneData(id)}
      >
        <MdDeleteOutline className="text-xl" />
        삭제
      </button>
    </div>
  )
}

export default DetailButtons
