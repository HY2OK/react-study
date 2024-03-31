import { useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../../redux/services/postsApi'
import PostDetail from '../../components/PostDetail/PostDetail'

const PostDetailPage = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useGetPostByIdQuery(id!)

  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex justify-center items-center p-10">
      {error && <div>error...</div>}
      {isLoading && <div>loading...</div>}
      {data && (
        <PostDetail title={data.title} body={data.body} date={data.date || null} />
      )}
    </div>
  )
}

export default PostDetailPage
