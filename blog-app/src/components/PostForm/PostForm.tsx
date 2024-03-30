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
      <label htmlFor="title">제목</label>
      <input
        type="text"
        name="title"
        id="title"
        value={data.title}
        onChange={handleData}
        className="w-full"
      />
      <label htmlFor="body">내용</label>
      <textarea
        name="body"
        id="body"
        value={data.body}
        onChange={handleData}
        className="w-full"
      />
      <button type="submit">작성</button>
    </form>
  )
}

export default PostForm
