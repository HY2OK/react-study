import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useCreatePostMutation } from '../../redux/services/postsApi'
import { useNavigate } from 'react-router-dom'

const PostForm = () => {
  const [createPost] = useCreatePostMutation()
  const [data, setData] = useState({
    id: '',
    title: '',
    body: '',
    date: '',
  })
  const navigate = useNavigate()

  const handleData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const submitData = {
      id: uuidv4(),
      title: data.title,
      body: data.body,
      date: new Date().toISOString(),
    }

    try {
      const response = await createPost(submitData)
      console.log(response)
      if (response) navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-[70%] flex flex-col justify-center ">
      <label htmlFor="title" className="text-slate-700 mb-2">
        제목
      </label>
      <input
        type="text"
        name="title"
        id="title"
        value={data.title}
        onChange={handleData}
        className="w-full h-[40px] rounded-md shadow-md mb-8 px-6 text-lg font-bold"
      />
      <label htmlFor="body" className="text-slate-700 mb-2">
        내용
      </label>
      <textarea
        name="body"
        id="body"
        value={data.body}
        onChange={handleData}
        className="w-full h-[300px] rounded-md shadow-md mb-10 resize-none px-8 py-4"
      />
      <button
        type="submit"
        className="w-[150px] h-[40px] m-auto bg-slate-500 text-lg text-white rounded-lg"
      >
        작성
      </button>
    </form>
  )
}

export default PostForm
