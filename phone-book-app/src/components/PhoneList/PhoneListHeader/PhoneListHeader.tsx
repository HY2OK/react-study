import { Dispatch, SetStateAction } from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'

interface Props {
  setAddModalOpen: Dispatch<SetStateAction<boolean>>
  setSearchModalOpen: Dispatch<SetStateAction<boolean>>
}

const PhoneListHeader: React.FC<Props> = ({ setAddModalOpen, setSearchModalOpen }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <span className="text-2xl text-blue-700 font-bold">전화</span>
        <div className="flex justify-center items-center gap-3 text-2xl text-blue-500 cursor-pointer">
          <AiOutlinePlus onClick={() => setAddModalOpen((prev) => !prev)} />
          <AiOutlineSearch onClick={() => setSearchModalOpen((prev) => !prev)} />
        </div>
      </div>
    </div>
  )
}

export default PhoneListHeader
