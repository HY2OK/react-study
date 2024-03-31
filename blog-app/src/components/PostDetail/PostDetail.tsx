import { useNavigate } from 'react-router-dom'
import { useDeletePostMutation } from '../../redux/services/postsApi'
import transformDate from '../../utils/transformDate'

interface Props {
  id: string
  title: string
  body: string
  date: string | null
}

const PostDetail: React.FC<Props> = ({ id, title, body, date }) => {
  const [deletePost] = useDeletePostMutation()
  const navigate = useNavigate()

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deletePost(id)
      navigate('/')
    }
  }

  return (
    <div className="w-full h-full bg-white rounded-lg p-16 shadow-lg">
      <div className="text-3xl font-bold mb-4">{title}</div>
      {date !== null && (
        <div className="text-slate-600 text-md px-2 mb-24">{transformDate(date!)}</div>
      )}
      <div className="text-xl px-5 mb-10">{body}</div>

      <div className="absolute bottom-24 left-1/2 translate-x-[-50%] flex justify-center items-center gap-10">
        <button className="w-[100px] bg-green-400 py-2 rounded-md text-white hover:bg-green-500">
          수정하기
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="w-[100px] bg-red-400 py-2 rounded-md text-white hover:bg-red-500"
        >
          삭제하기
        </button>
      </div>
    </div>
  )
}

export default PostDetail
