import { TYPES } from '../../../constants/type'

interface Props {
  types: { slot: number; type: { name: string; url: string } }[]
  height: number
  weight: number
}

const ProfileSection: React.FC<Props> = ({ types, height, weight }) => {
  return (
    <div className="w-full flex justify-around mt-8 border py-6 rounded-lg text-center">
      <div className="w-14 flex flex-col ">
        <div className="text-slate-400 text-sm ">타입</div>
        <div className="mt-3">
          {types.map(({ slot, type }) => (
            <div
              key={slot}
              className={`w-full bg-${
                TYPES[type.name]
              } text-white text-center text-sm rounded-lg mb-1 py-[3px]`}
            >
              {type.name}
            </div>
          ))}
        </div>
      </div>
      <div className="w-14">
        <div className="text-slate-400 text-sm">키</div>
        <div className="mt-3">{height}</div>
      </div>
      <div className="w-14">
        <div className="text-slate-400 text-sm">몸무게</div>
        <div className="mt-3">{weight}</div>
      </div>
    </div>
  )
}

export default ProfileSection
