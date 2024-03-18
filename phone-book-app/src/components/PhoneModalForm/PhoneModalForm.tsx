import { MdSmartphone, MdLinkedCamera } from 'react-icons/md'
import { CiUser, CiPhone } from 'react-icons/ci'
import { Dispatch, SetStateAction, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { addPhoneBook, editPhoneBook } from '../../store/features/phoneBook/phoneBook'
import uuid from 'react-uuid'

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>
  phone: {
    name: string
    number: string
    createdAt: string
  } | null
}

const PhoneModalForm: React.FC<Props> = ({ setModal, phone = null }) => {
  const dispatch = useAppDispatch()
  const editMode = phone === null ? false : true
  const [phoneData, setPhoneData] = useState({
    name: phone?.name || '',
    phoneNumber: phone?.number || '',
  })

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setModal(false)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneData((data) => ({
      ...data,
      [e.target.name]: e.target.value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      id: uuid(),
      name: phoneData.name,
      number: phoneData.phoneNumber,
      createdAt: new Date().toISOString(),
    }

    if (editMode) {
      dispatch(editPhoneBook(data))
    } else {
      dispatch(addPhoneBook(data))
    }

    setModal(false)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full flex items-center flex-col relative py-16"
    >
      <div className="absolute top-3 left-3 flex justify-center items-center gap-1 text-lg">
        <MdSmartphone />
        <span className="text-blue-700">휴대전화</span>
      </div>
      <div className="w-20 h-20 bg-blue-400 rounded-full my-5 flex justify-center items-center text-3xl text-white">
        <MdLinkedCamera />
      </div>

      <label className="w-[90%] h-12 relative my-3">
        <CiUser className="absolute top-1/2 left-2 translate-y-[-50%] text-xl font-bold" />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="이름"
          value={phoneData.name}
          onChange={handleInput}
          className="w-full h-full rounded-md z-0 px-10"
          required
        />
      </label>

      <label className="w-[90%] h-12 relative my-3">
        <CiPhone className="absolute top-1/2 left-2 translate-y-[-50%] text-xl font-bold" />
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="전화번호"
          value={phoneData.phoneNumber}
          onChange={handleInput}
          className="w-full h-full rounded-md z-0 px-10"
          required
        />
      </label>

      <div className="absolute bottom-8 flex gap-10">
        <button
          type="button"
          onClick={handleCancel}
          className="w-24 h-8 text-indigo-900 font-bold  cursor-pointer"
        >
          취소
        </button>
        <button
          type="submit"
          className="w-24 h-8 text-indigo-900 font-bold  cursor-pointer"
        >
          저장
        </button>
      </div>
    </form>
  )
}

export default PhoneModalForm
