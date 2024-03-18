import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutsideModal'
import PhoneModalForm from '../PhoneModalForm/PhoneModalForm'

interface Props {
  setModal: Dispatch<SetStateAction<boolean>>
  phone: {
    id: string
    name: string
    number: string
    createdAt: string
  } | null
}

const PhoneModal: React.FC<Props> = ({ setModal, phone = null }) => {
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
        className={`absolute bottom-0 left-0 bg-slate-200 rounded-3xl w-full transition-all  ${
          isVisible ? 'h-full' : 'h-0'
        }`}
      >
        {isVisible && <PhoneModalForm setModal={setModal} phone={phone} />}
      </div>
    </>
  )
}

export default PhoneModal
