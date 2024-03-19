import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  name: string
  id: string
}

const COLORS: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const PhoneItem: React.FC<Props> = ({ id, name }) => {
  const [color, setColor] = useState<string | null>(null)

  const getFirstLetter = (name: string) => name.split('')[0]

  useEffect(() => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)]
    setColor(randomColor)
  }, [])

  return (
    <li>
      <Link
        to={`/${id}`}
        className="bg-white rounded-2xl w-full h-14 flex items-center gap-3 px-5 cursor-pointer"
      >
        {color && (
          <>
            <div
              className={`bg-${color}-400 rounded-full w-8 h-8 flex justify-center items-center text-white`}
            >
              {getFirstLetter(name)}
            </div>
            <div>{name}</div>
          </>
        )}
      </Link>

      {/* tailwind 색상 import */}
      <div className="bg-red-400 hidden"></div>
      <div className="bg-orange-400 hidden"></div>
      <div className="bg-yellow-400 hidden"></div>
      <div className="bg-green-400 hidden"></div>
      <div className="bg-blue-400 hidden"></div>
      <div className="bg-purple-400 hidden"></div>
    </li>
  )
}

export default PhoneItem
