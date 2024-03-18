import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { sortedData } from '../../../utils/sortedData'

export interface PhoneState {
  id: string
  name: string
  number: string
  createdAt: string
}

export interface PhoneBookState {
  phoneBook: PhoneState[]
}

const initialState: PhoneBookState = {
  phoneBook: [],
}

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addPhoneBook: (state, action: PayloadAction<PhoneState>) => {
      state.phoneBook.push(action.payload)
    },
    deletePhoneBook: (state, action: PayloadAction<string>) => {
      state.phoneBook = state.phoneBook.filter((phone) => phone.id !== action.payload)
    },
    editPhoneBook: (state, action: PayloadAction<PhoneState>) => {
      state.phoneBook = state.phoneBook.map((phone) => {
        if (phone.id === action.payload.id) action.payload
        return phone
      })
    },
  },
})

export const selectAllPhoneBooks = createSelector(
  (state: RootState) => state.phone,
  (phone) => {
    const newPhoneArr = [...phone.phoneBook]
    sortedData(newPhoneArr)
    return newPhoneArr
  },
)

export const selectPhoneBookById = createSelector(
  (state: RootState) => state.phone,
  (_, id) => id,
  (phone, id) => {
    const phoneById: PhoneState = phone.phoneBook.find((p: PhoneState) => p.id === id)
    return phoneById
  },
)

// Action creators are generated for each case reducer function
export const { addPhoneBook, deletePhoneBook, editPhoneBook } = phoneBookSlice.actions

export default phoneBookSlice.reducer
