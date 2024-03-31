import { useNavigate } from 'react-router-dom'
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from '../../redux/services/postsApi'
import { useState } from 'react'
import EditForm from './EditForm/EditForm'
import DetailButtons from './DetailButtons/DetailButtons'
import DetailData from './DetailData/DetailData'

interface Props {
  id: string
  title: string
  body: string
  date: string | null
}

const PostDetail: React.FC<Props> = ({ id, title, body, date }) => {
  const [editMode, setEditMode] = useState(false)
  const [editData, setEditData] = useState({ title, body })
  const [deletePost] = useDeletePostMutation()
  const [updatePost] = useUpdatePostMutation()
  const navigate = useNavigate()

  const handleDelete = async (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      await deletePost(id)
      navigate('/')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleEdit = async () => {
    if (title !== editData.title || body !== editData.body) {
      const data = {
        id,
        title: editData.title,
        body: editData.body,
        date: new Date().toISOString(),
      }
      await updatePost(data)
    }
    setEditMode(false)
  }

  return (
    <div className="w-full h-full bg-white rounded-lg p-16 shadow-lg">
      {editMode ? (
        <EditForm
          title={editData.title}
          body={editData.body}
          date={date ? date : null}
          handleChange={handleChange}
          handleEdit={handleEdit}
        />
      ) : (
        <DetailData title={title} body={body} date={date ? date : null} />
      )}

      <div className="absolute bottom-24 left-1/2 translate-x-[-50%] flex justify-center items-center gap-10">
        <DetailButtons
          id={id}
          handleDelete={handleDelete}
          editMode={editMode}
          setEditMode={setEditMode}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  )
}

export default PostDetail
