import { createSelector, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface PageState {
  currentPage: number
  lastPage: number | null
  listCount: number
  pageList: number[][] | null
}

interface SetupPayload {
  page: number
  count: number
}

const initialState: PageState = {
  currentPage: 1,
  lastPage: null,
  listCount: 5,
  pageList: null,
}

const createPageList = (lastPage: number, listCount: number) => {
  const numbers = Array.from({ length: lastPage }, (_, index) => index + 1)
  const result = []
  for (let i = 0; i < numbers.length; i += listCount) {
    result.push(numbers.slice(i, i + listCount))
  }

  return result
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPages: (state, action: PayloadAction<SetupPayload>) => {
      state.currentPage = action.payload.page
      state.lastPage = Math.ceil(action.payload.count / 20)
      state.pageList = createPageList(Math.ceil(action.payload.count / 20), 5)
    },
    incrementPage: (state) => {
      state.currentPage += 1
    },
    decrementPage: (state) => {
      state.currentPage -= 1
    },
    locateByNumber: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const selectPageList = createSelector(
  (state: RootState) => state.page,
  ({ currentPage, pageList }) => {
    if (pageList !== null && pageList?.length !== 0) {
      const currentPageList = pageList!.find((page) => page.includes(currentPage))
      return currentPageList
    }
  },
)

export const { setPages, incrementPage, decrementPage, locateByNumber } =
  pageSlice.actions

export default pageSlice.reducer
