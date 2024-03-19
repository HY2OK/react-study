import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import useClickOutside from '../../../hooks/useClickOutsideModal'
import PhoneModalForm from './PhoneModalForm/PhoneModalForm'

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>
  phone: {
    id: string
    name: string
    number: string
    createdAt: string
  } | null
}

const PhoneModal: React.FC<Props> = ({ setModal, phone }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useClickOutside(modalRef, () => setModal(false))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <div
        ref={modalRef}
        className={`fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-slate-200 rounded-3xl w-[360px] h-[740px] border-8 border-black`}
      >
        <div
          className={`absolute bottom-0 transition-all w-full ${
            isVisible ? 'h-full' : 'h-0'
          }`}
        >
          {isVisible && <PhoneModalForm setModal={setModal} phone={phone} />}
        </div>
      </div>
    </>
  )
}

export default PhoneModal
