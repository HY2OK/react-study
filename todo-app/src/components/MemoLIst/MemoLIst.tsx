import { useSelector } from 'react-redux'
import { selectPosts } from '../../features/post/postSlice'
import MemoItem from '../MemoItem/MemoItem'

const MemoLIst = () => {
  const posts = useSelector(selectPosts)

  return (
    <div className="p-10 grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {posts.map((post) => (
        <MemoItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default MemoLIst
