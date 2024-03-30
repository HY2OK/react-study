import PostForm from '../../components/PostForm/PostForm'

const PostPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold my-14">글 작성하기</h1>
      <PostForm />
    </div>
  )
}

export default PostPage
