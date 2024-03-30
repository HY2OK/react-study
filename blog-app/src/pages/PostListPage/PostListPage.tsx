import { useGetAllPostsQuery } from '../../redux/services/postsApi'
import PostList from '../../components/PostList/PostList'

const PostListPage = () => {
  const { data, error, isLoading } = useGetAllPostsQuery('')

  console.log(data, error, isLoading)

  return (
    <>
      {error && <div>error...</div>}
      {isLoading && <div>loading...</div>}
      {data && (
        <div className="p-14 flex flex-col gap-5">
          {data.map(({ id, title, body }) => (
            <PostList key={id} userId={id} title={title} body={body} />
          ))}
        </div>
      )}
    </>
  )
}

export default PostListPage
