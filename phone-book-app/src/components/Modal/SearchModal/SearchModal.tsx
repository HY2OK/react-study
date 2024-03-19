import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import useClickOutside from '../../../hooks/useClickOutsideModal'
import {
  PhoneState,
  selectPhoneBookSearch,
} from '../../../store/features/phoneBook/phoneBook'
import useDebounce from '../../../hooks/useDebouce'
import { useAppSelector } from '../../../store/hooks'
import PhoneBookItem from '../../PhoneList/PhoneListView/PhoneItem/PhoneItem'
import { MdOutlineClose, MdSearch } from 'react-icons/md'

interface Props {
  setSearchModalOpen: Dispatch<SetStateAction<boolean>>
}

const SearchModal: React.FC<Props> = ({ setSearchModalOpen }) => {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  const phoneData = useAppSelector((state) =>
    selectPhoneBookSearch(state, debouncedSearchTerm),
  )

  useClickOutside(modalRef, () => setSearchModalOpen(false))

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <>
      <div
        ref={modalRef}
        className={`absolute bottom-0 left-0 bg-slate-200 rounded-3xl w-full transition-all px-8 py-16 ${
          isVisible ? 'h-full' : 'h-0'
        }`}
      >
        <div
          onClick={() => setSearchModalOpen(false)}
          className="absolute top-5 left-4 text-2xl cursor-pointer"
        >
          <MdOutlineClose />
        </div>
        <label className="relative">
          <MdSearch className="absolute top-1/2 left-3 text-xl translate-y-[-50%]" />
          <input
            ref={inputRef}
            type="text"
            name="search"
            id="search"
            value={searchTerm}
            onChange={handleInput}
            className="w-full h-10 rounded-lg px-10 mb-8"
          />
        </label>

        <ul className="flex flex-col gap-4">
          {phoneData === null && (
            <div className="pl-3 text-slate-800">검색어를 입력해주세요...</div>
          )}
          {phoneData?.length === 0 && (
            <div className="pl-3 text-slate-800">검색 결과가 없습니다.</div>
          )}
          {phoneData?.length > 0 &&
            phoneData.map((phone: PhoneState) => (
              <PhoneBookItem key={phone.id} name={phone.name} id={phone.id} />
            ))}
        </ul>
      </div>
    </>
  )
}

export default SearchModal
