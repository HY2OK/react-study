import { useLocation, useNavigate } from 'react-router-dom'
import {
  decrementPage,
  incrementPage,
  locateByNumber,
  selectPageList,
  setPages,
} from '../../redux/features/page/pageSlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useEffect } from 'react'

interface Props {
  count: number
}

const PageButtons: React.FC<Props> = ({ count }) => {
  const location = useLocation()
  const page = Number(new URLSearchParams(location.search).get('page')) || 1
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { currentPage, lastPage } = useAppSelector((state) => state.page)
  const pageList = useAppSelector(selectPageList)

  useEffect(() => {
    dispatch(setPages({ page, count }))
  }, [])

  const prevPage = () => {
    if (currentPage - 1 <= 0) return
    navigate(`/?page=${currentPage - 1}`)
    dispatch(decrementPage())
  }

  const nextPage = () => {
    if (currentPage + 1 >= lastPage!) return
    navigate(`/?page=${currentPage + 1}`)
    dispatch(incrementPage())
  }

  const locatePage = (page: number) => {
    if (page >= lastPage! || page <= 0) return
    navigate(`/?page=${page}`)
    dispatch(locateByNumber(page))
  }

  return (
    <div className="flex justify-center items-center gap-3 mt-8">
      {currentPage !== 1 && <button onClick={() => prevPage()}>prev</button>}

      {pageList !== null &&
        pageList?.map((page, index) => (
          <div
            key={index}
            className={`w-8 h-8 border rounded-md flex justify-center items-center shadow-md cursor-pointer ${
              page === currentPage ? 'text-blue-500 border-blue-500' : 'border-black '
            }`}
            onClick={() => locatePage(page)}
          >
            {page}
          </div>
        ))}

      {currentPage !== lastPage && <button onClick={() => nextPage()}>next</button>}
    </div>
  )
}

export default PageButtons
