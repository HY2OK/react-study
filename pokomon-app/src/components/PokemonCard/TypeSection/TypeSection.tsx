interface Props {
  typesList: { type: { name: string; url: string } }[]
  types: string
}

const typeSection: React.FC<Props> = ({ typesList, types }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-5">
      {typesList.map(({ type }) => (
        <div key={type.url} className={`text-sm px-2 text-white bg-${types} rounded-md`}>
          {type.name}
        </div>
      ))}
    </div>
  )
}

export default typeSection
