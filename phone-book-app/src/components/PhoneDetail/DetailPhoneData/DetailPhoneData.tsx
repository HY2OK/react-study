import { MdLinkedCamera } from 'react-icons/md'
import { FaPhone, FaMessage, FaVideo } from 'react-icons/fa6'
import { changeDate } from '../../../utils/changeDate'

interface Props {
  phoneData: {
    name: string
    number: string
    createdAt: string
  }
}

const DetailPhoneData: React.FC<Props> = ({ phoneData }) => {
  return (
    <div className="mt-16 w-full h-[300px] flex items-center flex-col bg-white relative rounded-lg">
      <div className="absolute top-[-40px] w-20 h-20 rounded-full bg-blue-400 flex justify-center items-center text-3xl text-white">
        <MdLinkedCamera />
      </div>
      <div className="mt-16 font-bold text-3xl">
        <span>{phoneData.name}</span>
      </div>
      <div className="mt-3 text-slate-600">
        휴대전화
        <span className="text-black ml-3 text-lg">{phoneData.number} </span>
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
        {changeDate(phoneData.createdAt)}
      </div>
    </div>
  )
}

export default DetailPhoneData
