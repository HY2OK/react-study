import { ChangeEvent } from 'react'
import transformDate from '../../../utils/transformDate'

interface Props {
  title: string
  body: string
  date: string | null
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleEdit: () => void
}

const EditForm: React.FC<Props> = ({ title, body, date, handleChange, handleEdit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleEdit()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        name="title"
        id="body"
        value={title}
        onChange={handleChange}
        className="text-3xl font-bold mb-4 border-b-2"
      />
      {date !== null && (
        <div className="text-slate-600 text-md px-2">{transformDate(date!)}</div>
      )}
      <textarea
        name="body"
        id="body"
        value={body}
        onChange={handleChange}
        className="h-[400px] mt-24 text-xl px-5 mb-10 border-b-2 resize-none"
      />
    </form>
  )
}

export default EditForm
