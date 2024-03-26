import { TYPES } from '../../../constants/type'

interface Props {
  typesList: { type: { name: string; url: string } }[]
}

const typeSection: React.FC<Props> = ({ typesList }) => {
  return (
    <div className="flex justify-center items-center gap-3 my-2">
      {typesList.map(({ type }) => (
        <div
          key={type.url}
          className={`text-sm px-2 text-white bg-${TYPES[type.name]} rounded-md`}
        >
          {type.name}
        </div>
      ))}
    </div>
  )
}

export default typeSection
