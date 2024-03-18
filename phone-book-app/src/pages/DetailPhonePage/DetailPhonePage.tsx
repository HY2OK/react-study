import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/hooks'
import { selectPhoneBookById } from '../../store/features/phoneBook/phoneBook'
import { IoIosArrowBack } from 'react-icons/io'
import { MdLinkedCamera } from 'react-icons/md'
import { FaPhone, FaMessage, FaVideo } from 'react-icons/fa6'
import { MdOutlineEdit, MdDeleteOutline } from 'react-icons/md'

const DetailPhonePage = () => {
  const { id: userId } = useParams()
  const { name, number, createdAt } = useAppSelector((state) =>
    selectPhoneBookById(state, userId),
  )
  const navigate = useNavigate()

  const changeDate = (date: string) => {
    const currentDate = new Date(date)

    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    const day = String(currentDate.getDate()).padStart(2, '0')
    const hours = String(currentDate.getHours()).padStart(2, '0')
    const minutes = String(currentDate.getMinutes()).padStart(2, '0')

    return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`
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

        <div className="mt-16 w-full h-[300px] flex items-center flex-col bg-white relative rounded-lg">
          <div className="absolute top-[-40px] w-20 h-20 rounded-full bg-blue-400 flex justify-center items-center text-3xl text-white">
            <MdLinkedCamera />
          </div>
          <div className="mt-16 font-bold text-3xl">
            <span>{name}</span>
          </div>
          <div className="mt-3 text-slate-600">
            휴대전화
            <span className="text-black ml-3 text-lg">{number} </span>
          </div>
          <div className="mt-4 flex justify-center items-center gap-5 text-white text-md">
            <div className="w-9 h-9 rounded-full bg-sky-700 flex justify-center items-center">
              <FaPhone />
            </div>
            <div className="w-9 h-9 rounded-full bg-sky-700 flex justify-center items-center">
              <FaMessage />
            </div>
            <div className="w-9 h-9 rounded-full bg-sky-700 flex justify-center items-center text-lg">
              <FaVideo />
            </div>
          </div>
          <div className="absolute bottom-4 text-sm text-slate-600">
            {changeDate(createdAt)}
          </div>
        </div>

        <div className="absolute w-full bottom-8 left-1/2 translate-x-[-50%] flex justify-center items-center gap-20 px-8 text-sm font-bold text-indigo-900">
          <button className="flex flex-col items-center justify-center gap-1 cursor-pointer">
            <MdOutlineEdit className="text-xl" />
            수정
          </button>
          <button className="flex flex-col items-center justify-center gap-1 cursor-pointer">
            <MdDeleteOutline className="text-xl" />
            삭제
          </button>
        </div>
      </div>
    </div>
  )
}

export default DetailPhonePage
