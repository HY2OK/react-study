import { Dispatch, SetStateAction } from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'

interface Props {
  setAddModal: Dispatch<SetStateAction<boolean>>
}

const PhoneBookInput: React.FC<Props> = ({ setAddModal }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <span className="text-2xl text-blue-700 font-bold">전화</span>
      <div className="flex justify-center items-center gap-3 text-2xl text-blue-500 cursor-pointer">
        <AiOutlinePlus onClick={() => setAddModal((prev) => !prev)} />
        <AiOutlineSearch />
      </div>
    </div>
  )
}

export default PhoneBookInput
