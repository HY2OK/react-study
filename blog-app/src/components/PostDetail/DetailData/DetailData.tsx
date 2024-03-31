import React from 'react'
import transformDate from '../../../utils/transformDate'

interface Props {
  title: string
  body: string
  date: string | null
}

const DetailData: React.FC<Props> = ({ title, date, body }) => {
  return (
    <>
      <div className="text-3xl font-bold mb-4">{title}</div>
      {date !== null && (
        <div className="text-slate-600 text-md px-2 ">{transformDate(date!)}</div>
      )}
      <div className="mt-24 h-[400px] text-xl px-5 mb-10">{body}</div>
    </>
  )
}

export default DetailData
