import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutsideModal'
import AddPhoneForm from '../AddPhoneForm/AddPhoneForm'

interface Props {
  setAddModal: Dispatch<SetStateAction<boolean>>
}

const AddPhoneModal: React.FC<Props> = ({ setAddModal }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useClickOutside(modalRef, () => setAddModal(false))

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
        {isVisible && <AddPhoneForm setAddModal={setAddModal} />}
      </div>
    </>
  )
}

export default AddPhoneModal
