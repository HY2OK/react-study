interface Props {
  stats: { base_stat: number; stat: { name: string } }[]
}

const COLOR = [
  'red-500',
  'purple-500',
  'yellow-400',
  'blue-300',
  'green-500',
  'indigo-700',
]

const StatSection: React.FC<Props> = ({ stats }) => {
  return (
    <div className="w-full flex justify-center flex-col gap-1 mt-6">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-sm text-slate-700">{stat.stat.name}</div>
          <div className="relative w-full h-[18px] bg-slate-200 rounded-sm">
            <div
              className={`text-xs absolute text-right pr-2 h-[18px] bg-${COLOR[index]} text-white rounded-r-sm`}
              style={{ width: `${Math.round((stat.base_stat / 255) * 100)}%` }}
            >
              {stat.base_stat}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatSection
