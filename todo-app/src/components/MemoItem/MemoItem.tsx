import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../../features/post/postSlice'
import { FiEdit3, FiTrash2 } from 'react-icons/fi'
import { ChangeEvent, useEffect, useRef, useState } from 'react'

interface MemoProps {
  post: {
    id: string
    description: string
    isDone: boolean
    createdAt: string
  }
}

const MemoItem: React.FC<MemoProps> = ({ post }) => {
  const dispatch = useDispatch()
  const [editor, setEditor] = useState(false)
  const [postDescription, setPostDescription] = useState(post.description)
  const date = new Date(post.createdAt)
  const inputRef = useRef(null)

  useEffect(() => {
    if (editor && inputRef.current !== null)
      (inputRef.current as HTMLInputElement)?.focus()
  }, [editor])

  const handleChecked = () => {
    const data = {
      ...post,
      ['isDone']: !post.isDone,
    }
    dispatch(updatePost(data))
  }

  const handleDelete = () => {
    dispatch(deletePost(post.id))
  }

  const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostDescription(e.target.value)
  }

  const handleEdit = () => {
    if (editor && post.description !== postDescription) {
      const data = {
        ...post,
        ['description']: postDescription,
      }
      dispatch(updatePost(data))
    }
    setEditor((prev) => !prev)
  }

  return (
    <div className="relative bg-custom-background bg-contain bg-center w-64 h-64 px-12 py-16">
      <input
        type="checkbox"
        name="done"
        className="absolute top-6 left-6 w-4 h-4 cursor-pointer z-20"
        onChange={handleChecked}
        checked={post.isDone}
      />
      <div className="absolute top-6 right-8 text-gray-700">{`${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`}</div>
      <div className={`relative text-lg ${post.isDone && 'line-through text-gray-600'}`}>
        {editor ? (
          <div>
            <textarea
              name="description"
              value={postDescription}
              ref={inputRef}
              onChange={handleTextarea}
              className="resize-none w-full h-full bg-transparent focus:outline-none"
            />
          </div>
        ) : (
          <div>{post.description}</div>
        )}
      </div>

      <div
        onClick={handleEdit}
        className="absolute flex flex-row bottom-10 left-10 gap-3 text-xl"
      >
        <div className="text-green-400 cursor-pointer transition-all hover:scale-125 hover:text-green-600">
          <FiEdit3 />
        </div>
        <div
          onClick={handleDelete}
          className="text-red-400 cursor-pointer transition-all hover:scale-125 hover:text-red-600"
        >
          <FiTrash2 />
        </div>
      </div>

      {post.isDone && (
        <div className="absolute top-0 left-0 w-full h-full bg-amber-100 opacity-30 z-10"></div>
      )}
    </div>
  )
}

export default MemoItem
