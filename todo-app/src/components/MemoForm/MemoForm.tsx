import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { useAppDispatch } from '../../app/hooks'
import { addPost } from '../../features/post/postSlice'

const MemoForm = () => {
  const [memo, setMemo] = useState('')
  const dispatch = useAppDispatch()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      id: uuid(),
      description: memo,
      isDone: false,
      createdAt: new Date().toISOString(),
    }
    dispatch(addPost(data))
    setMemo('')
  }

  return (
    <form
      className="pt-10 w-full flex justify-center items-center"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="memo"
        id="memo"
        placeholder="오늘의 할일"
        value={memo}
        onChange={handleInput}
        className="border border-black w-[40%] h-12 px-3 text-xl rounded-lg mr-4"
      />
      <button
        type="submit"
        className="w-20 h-12 bg-amber-400 text-white rounded-lg cursor-pointer"
      >
        Submit
      </button>
    </form>
  )
}

export default MemoForm
