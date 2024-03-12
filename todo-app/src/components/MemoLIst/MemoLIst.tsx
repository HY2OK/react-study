import { useSelector } from 'react-redux'
import { selectPosts } from '../../features/post/postSlice'
import MemoItem from '../MemoItem/MemoItem'

const MemoLIst = () => {
  const posts = useSelector(selectPosts)

  return (
    <div className="p-10 grid grid-cols-4 gap-4">
      {posts.map((post) => (
        <MemoItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default MemoLIst
