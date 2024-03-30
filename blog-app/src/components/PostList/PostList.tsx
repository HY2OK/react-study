import React from 'react'
import truncateStr from '../../utils/truncateString'
import { Link } from 'react-router-dom'

interface Props {
  userId: string
  title: string
  body: string
}

const PostList: React.FC<Props> = ({ userId, title, body }) => {
  return (
    <Link
      to={`${userId}`}
      className="w-full h-[250px] p-10 rounded-xl bg-white shadow-lg"
    >
      <div className="text-2xl font-bold mb-10">{title}</div>
      <div>{truncateStr(body, 70)}</div>
    </Link>
  )
}

export default PostList
