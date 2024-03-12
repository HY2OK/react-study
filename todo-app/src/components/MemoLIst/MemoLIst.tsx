import { useAppSelector } from '../../app/hooks'
import MemoItem from '../MemoItem/MemoItem'

const MemoLIst = () => {
  const posts = useAppSelector((state) => state.post)

  return (
    <div className="p-10 grid grid-cols-4 gap-4">
      {posts.posts.map((post) => (
        <MemoItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default MemoLIst
