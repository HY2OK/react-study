import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

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
        if (phone.id === action.payload.id) return action.payload
        return phone
      })
    },
  },
})

export const selectAllPhoneBooks = createSelector(
  (state: RootState) => state.phone,
  (phone) => phone.phoneBook,
)

// Action creators are generated for each case reducer function
export const { addPhoneBook, deletePhoneBook, editPhoneBook } = phoneBookSlice.actions

export default phoneBookSlice.reducer
