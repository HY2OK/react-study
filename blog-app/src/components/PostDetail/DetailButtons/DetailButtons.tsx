interface Props {
  id: string
  handleDelete: (id: string) => void
  editMode: boolean
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
  handleEdit: () => void
}

const DetailButtons: React.FC<Props> = ({
  id,
  editMode,
  setEditMode,
  handleDelete,
  handleEdit,
}) => {
  return (
    <>
      {editMode ? (
        <button
          type="submit"
          onClick={handleEdit}
          className="w-[100px] bg-green-400 py-2 rounded-md text-white hover:bg-green-500"
        >
          저장하기
        </button>
      ) : (
        <button
          onClick={() => setEditMode(true)}
          className="w-[100px] bg-green-400 py-2 rounded-md text-white hover:bg-green-500"
        >
          수정하기
        </button>
      )}

      <button
        onClick={() => handleDelete(id)}
        className="w-[100px] bg-red-400 py-2 rounded-md text-white hover:bg-red-500"
      >
        삭제하기
      </button>
    </>
  )
}

export default DetailButtons
