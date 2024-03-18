import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import {
  deletePhoneBook,
  selectPhoneBookById,
} from '../../store/features/phoneBook/phoneBook'
import { IoIosArrowBack } from 'react-icons/io'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'
import DetailPhoneData from '../../components/DetailPhoneData/DetailPhoneData'

const DetailPhonePage = () => {
  const { id: userId } = useParams()
  const { id, name, number, createdAt } = useAppSelector((state) =>
    selectPhoneBookById(state, userId),
  )
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const deletePhoneData = (id: string) => {
    dispatch(deletePhoneBook(id))
    navigate('/')
  }

  return (
    <div className="w-[360px] h-[740px] grid grid-rows-10 bg-slate-200/75 border-8 border-black rounded-3xl p-8 relative">
      <div className="w-full h-full py-8">
        <div
          onClick={() => navigate(-1)}
          className="absolute top-8 left-5 cursor-pointer text-2xl"
        >
          <IoIosArrowBack />
        </div>

        <DetailPhoneData name={name} number={number} createdAt={createdAt} />

        <div className="absolute w-full bottom-8 left-1/2 translate-x-[-50%] flex justify-center items-center gap-20 px-8 text-sm font-bold text-indigo-900">
          <button className="flex flex-col items-center justify-center gap-1 cursor-pointer">
            <MdOutlineEdit className="text-xl" />
            수정
          </button>
          <button className="flex flex-col items-center justify-center gap-1 cursor-pointer">
            <MdDeleteOutline className="text-xl" onClick={() => deletePhoneData(id)} />
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailPhonePage
