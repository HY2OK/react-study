interface MemoProps {
  post: {
    id: string
    description: string
    isDone: boolean
    createdAt: string
  }
}

const MemoItem: React.FC<MemoProps> = ({ post }) => {
  console.log(post)
  return (
    <div className="relative bg-custom-background bg-contain bg-center w-64 h-64 p-10">
      <input type="checkbox" name="done" className="absolute top-5 left-5" />
      <div>{post.description}</div>
    </div>
  )
}

export default MemoItem
